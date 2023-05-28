import React, { useState, useEffect, useRef, useCallback } from 'react';
import { w3cwebsocket as WebSocket } from 'websocket';
import axios from 'axios';
import './App.css';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const appBodyRef = useRef(null);
  const socketRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showTranslatedContent, setShowTranslatedContent] = useState(false);

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODU5NTk4MTIsInN1YiI6IjIifQ.549P94knBYrrvBGeJGAMDtfuGOVumtxTYMBSlF6MUaE';
  const base_url = 'localhost:8000';

  // Using useCallback to memoize the fetchMessages function
  const fetchMessages = useCallback(async () => {
    try {
      const userMessagesPromise = axios.get(`http://${base_url}/api/v1/message/4/sent`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const friendMessagesPromise = axios.get(`http://${base_url}/api/v1/message/4/received`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const [userMessagesResponse, friendMessagesResponse] = await Promise.all([
        userMessagesPromise,
        friendMessagesPromise,
      ]);

      const userMessages = userMessagesResponse.data.map((message) => ({
        content: message.content,
        translated_content: message.translated_content,
        sender: 'me',
        timestamp: message.timestamp,
      }));
      const friendMessages = friendMessagesResponse.data.map((message) => ({
        content: message.content,
        translated_content: message.translated_content,
        sender: 'friend',
        timestamp: message.timestamp,
      }));

      const allMessages = [...userMessages, ...friendMessages];
      allMessages.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
      setMessages(allMessages);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching messages:', error);
      setIsLoading(false);
    }
  }, [token]); // fetchMessages will only change if token changes

  useEffect(() => {
    const initializeWebSocket = () => {
      socketRef.current = new WebSocket(`ws://${base_url}/ws/2/4/`);

      socketRef.current.onopen = () => {
        console.log('WebSocket connection opened');
      };

      socketRef.current.onmessage = (event) => {
        const message = JSON.parse(event.data);
        setMessages((prevMessages) => [
          ...prevMessages,
          { content: message.content, sender: 'friend', translated_content: message.translated_content },
        ]);
      };
    };

    fetchMessages();
    initializeWebSocket();

    // Clean up function
    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, [fetchMessages]); // fetchMessages is a dependency here

  useEffect(() => {
    if (appBodyRef.current) {
      appBodyRef.current.scrollTop = appBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      const newMessage = { content: input, sender: 'me' };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInput('');

      try {
        await axios.post(
          `http://${base_url}/api/v1/message/4/`,
          { content: newMessage.content },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log('Message sent successfully');
      } catch (error) {
        console.error('Error sending message:', error);
      }

      if (socketRef.current) {
        socketRef.current.send(JSON.stringify(newMessage));
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage(e);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      <div className="app__toggle-button">
        <button onClick={() => setShowTranslatedContent(!showTranslatedContent)}>
          {showTranslatedContent ? 'Display Original Message' : 'Display Translated Message'}
        </button>
      </div>
      <div className="app__body" ref={appBodyRef}>
        <div className="app__message-container">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`app__message ${message.sender === 'me' ? 'app__message--me' : 'app__message--friend'}`}
            >
              {message.sender === 'me' ? (
                message.content
              ) : (
                showTranslatedContent ? message.translated_content : message.content
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="app__footer">
        <input
          type="text"
          placeholder="Type a message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default App;
