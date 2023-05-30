import '../directory/MediaPlayer.css'
import React, {useEffect, useState, useRef} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Box, Stack} from "@mui/material";

const PostMediaPlayer = () => {
    const [nav1, setNav1] = useState<Slider | null>(null);
    const [nav2, setNav2] = useState<Slider | null>(null);
    const slider1 = useRef<Slider | null>(null);
    const slider2 = useRef<Slider | null>(null);

    useEffect(() => {
        if (slider1.current && slider2.current) {
            setNav1(slider1.current);
            setNav2(slider2.current);
        }
    }, []);

    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        fade: true,
        asNavFor: ".slider-nav",
    };

    const settingsThumbs = {
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: ".slider-for",
        centerMode: true,
        swipeToSlide: true,
        focusOnSelect: true,
        infinite: true,
    };

    const slidesData = [
        {
            id: 1,
            title: "repellendus id ullam",
            label: "Dolorem officiis temporibus.",
        },
        {
            id: 2,
            title: "excepturi consequatur est",
            label: "Officia non provident dolor esse et neque.",
        },
        {
            id: 3,
            title: "eius doloribus blanditiis",
            label: "Ut recusandae vel vitae molestiae id soluta.",
        },
        {
            id: 4,
            title: "nihil voluptates delectus",
            label: "Qui vel consequatur recusandae illo repellendus.",
        },
        {
            id: 5,
            title: "nemo dolorem necessitatibus",
            label: "Placeat odit velit itaque voluptatem.",
        },
    ];


    return (
        <Stack
            direction="row"
        >
            <Box sx={{ width: "85%", pr: "10px"}}>
                <Slider
                    {...settingsMain}
                    asNavFor={nav2!}
                    ref={(slider) => (slider1.current = slider)}
                >
                    {slidesData.map((slide) => (
                        <div className="slick-slide" key={slide.id}>
                            <img
                                className="slick-slide-image"
                                src={`https://picsum.photos/1920/1080?img=${slide.id}`}
                                alt={slide.title}
                            />
                        </div>
                    ))}
                </Slider>
            </Box>
            <Box sx={{ width: "15%", height: "100%" }}>
                <div className="thumbnail-slider-wrap">
                <Slider
                    {...settingsThumbs}
                    asNavFor={nav1!}
                    ref={(slider) => (slider2.current = slider)}
                    vertical={true}
                >
                    {slidesData.map((slide) => (
                        <div className="slick-slide" key={slide.id}>
                            <img
                                className="slick-slide-image"
                                src={`https://picsum.photos/1920/1080?img=${slide.id}`}
                                alt={slide.title}
                            />
                        </div>
                    ))}
                </Slider>
                </div>
            </Box>
        </Stack>
    );
};

export default PostMediaPlayer;
