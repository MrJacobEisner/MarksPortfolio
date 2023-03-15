import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

interface ImageObject {
    imageName: string;
    title: string;
}

interface CustomCarouselProps {
    images: ImageObject[];
}

const CustomCarousel = (CustomCarouselProps: CustomCarouselProps) => {
    const { images } = CustomCarouselProps;
    return (
        <Carousel>
            {images.map((image) => (
                <Carousel.Item>
                    <img
                        className="Carousel-Image"
                        src={require(`../../assets/${image.imageName}`)}
                        alt=""
                    />
                    <Carousel.Caption>
                        <p className="Carousel-Caption">{image.title}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default CustomCarousel;
