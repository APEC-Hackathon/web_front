import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PostMediaPlayer = () => {
    const [images, setImages] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const fetchedImages: string[] = [];

                for (let i = 0; i < 5; i++) {
                    const response = await fetch(
                        "https://api.api-ninjas.com/v1/randomimage?category=food",
                        {
                            headers: {
                                "X-Api-Key": "OBtZqShuHuJs0HC3LDfN4g==U3ysgJgIb2LHHCx4",
                                Accept: "image/jpg",
                            },
                        }
                    );

                    const blob = await response.blob();
                    const reader = new FileReader();

                    reader.onloadend = () => {
                        if (typeof reader.result === "string") {
                            fetchedImages.push(reader.result);

                            // Check if all images have been fetched
                            if (fetchedImages.length === 5) {
                                setImages(fetchedImages);
                                setIsLoading(false);
                            }
                        }
                    };

                    reader.readAsDataURL(blob);
                }
            } catch (error) {
                console.error("Error fetching images:", error);
            }
        };

        fetchImages();
    }, []); // Empty dependency array ensures the effect runs only once

    const getRandomImages = (count: number): string[] => {
        const shuffledImages = [...images].sort(() => 0.5 - Math.random());
        return shuffledImages.slice(0, count);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <Carousel axis="horizontal">
            {getRandomImages(5).map((image, index) => (
                <div key={index}>
                    <img src={image} alt={`${index}`} />
                </div>
            ))}
        </Carousel>
    );
};

export default PostMediaPlayer;
