import React, { useState, useEffect, useRef, useCallback } from 'react';
import messageApi from '../../api/messageApi';
import userApi from '../../api/userApi';
import './ChatPage.css';
import { useParams } from 'react-router-dom';

const ChatPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const appBodyRef = useRef<HTMLDivElement>(null);
  const socketRef = useRef<WebSocket | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showTranslatedContent, setShowTranslatedContent] = useState(false);

  const wsUrl = 'ws://172.104.229.42:8000/ws';

  const [myId, setMyId] = useState<number | undefined>(undefined);
  useEffect(() => {
    const fetchMe = async () => {
      try {
        const me = await userApi.getMe();
        setMyId(me.id);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    fetchMe();
  }, []);

  
    useEffect(() => {
      if (appBodyRef.current) {
        appBodyRef.current.scrollTop = appBodyRef.current.scrollHeight;
      }
    }, [messages]);
    

  interface Message {
    content: string;
    translated_content: string;
    sender: 'me' | 'friend';
    timestamp: string;
  }

  const base_url = 'localhost:8000';

  // Using useCallback to memoize the fetchMessages function
  const fetchMessages = useCallback(async () => {
    try {
      const userMessagesPromise = messageApi.getSentMessages(parseInt(id!)); 
      const friendMessagesPromise = messageApi.getReceivedMessages(parseInt(id!)); 
  
      const [userMessagesResponse, friendMessagesResponse] = await Promise.all([
        userMessagesPromise,
        friendMessagesPromise,
      ]);
  
      const userMessages: Message[] = userMessagesResponse.map((message: any) => ({
        content: message.content,
        translated_content: message.translated_content,
        sender: 'me',
        timestamp: message.timestamp,
      }));
      const friendMessages: Message[] = friendMessagesResponse.map((message: any) => ({
        content: message.content,
        translated_content: message.translated_content,
        sender: 'friend',
        timestamp: message.timestamp,
      }));

      const allMessages = [...userMessages, ...friendMessages];
      allMessages.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
      setMessages(allMessages);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching messages:', error);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const initializeWebSocket = () => {
      socketRef.current = new WebSocket(`${wsUrl}/${myId}/${parseInt(id!)}/`);

      socketRef.current.onopen = () => {
        console.log('WebSocket connection opened');
      };

      socketRef.current.onmessage = (event) => {
        const message = JSON.parse(event.data);
        setMessages((prevMessages) => [
          ...prevMessages,
          { content: message.content, sender: 'friend', translated_content: message.translated_content, timestamp: '' },
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
  }, [fetchMessages]);

  useEffect(() => {
    if (appBodyRef.current) {
      appBodyRef.current.scrollTop = appBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  const sendMessage = async () => {
    if (!input) return;

    const message: Message = {
      content: input,
      translated_content: '',
      sender: 'me',
      timestamp: '',
    };

    setMessages((prevMessages) => [...prevMessages, message]);
    setInput('');

    try {
      messageApi.sendMesage(5, input); 
    } catch (error) {
      console.error('Error sending message:', error);
    }

    if (socketRef.current) {
      socketRef.current.send(JSON.stringify({ message: input }));
    }
  };

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

export default ChatPage;
