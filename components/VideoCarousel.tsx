"use client"

import React from 'react'
import { Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import "bootstrap/dist/css/bootstrap.min.css";
import "@/components/VideoCarousel.css";
import Link from 'next/link';

type Color = {
    hex: string;
}

type Asset = {
    url: string;
}

type Carousel = {
    id: string;
    position: string;
    subtitleText: string;
    titleColor: Color;
    titleText: string;
    carSlug: string;
    background: Asset
}

const VideoCarousel = (props: { carousels: Carousel[] }) => {
    const { carousels } = props;
    return <Carousel>
        {carousels.map(caroursel =>
            <Carousel.Item key={caroursel.id}>
                <Link key={caroursel.carSlug} href={`/cars/${caroursel.carSlug}`} target='blank'>
                    <ReactPlayer
                        url={caroursel.background.url}
                        pip={true}
                        controls={true}
                        playing={true}
                    />
                    <Carousel.Caption>
                        <h3 color={caroursel.titleColor.hex}>{caroursel.titleText}</h3>
                        <p>{caroursel.subtitleText}</p>
                    </Carousel.Caption>
                </Link>
            </Carousel.Item>
        )}
    </Carousel>
}

export default VideoCarousel
