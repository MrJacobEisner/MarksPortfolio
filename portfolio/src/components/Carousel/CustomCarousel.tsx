import React from "react";
import Carousel from "react-bootstrap/Carousel";

import "./CustomCarousel.scss";

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
        <Carousel fade>
            {images.map((image) => (
                <Carousel.Item interval={3000}>
                    <img
                        className="Image"
                        src={require(`../../assets/${image.imageName}`)}
                        alt=""
                    />
                    <Carousel.Caption>
                        <div className="Caption-Wrapper">
                            <p>{image.title} </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default CustomCarousel;
