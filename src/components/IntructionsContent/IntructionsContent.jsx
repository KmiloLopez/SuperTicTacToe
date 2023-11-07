import React, { useEffect, useRef, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { data } from "../../assets/data"

const IntructionsContent = () => {
   
    useEffect(() => {}, [Carousel])
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    }
    const product = data.map((item) => {
        return (
            <div className="card">
                <img
                    src={item.imgURL}
                    alt={item.alt}
                    style={{ width: 180, height: 'auto' }}
                    className="product-image"
                />
                <div className="text-container">
                    <p>{item.text}</p>
                </div>
            </div>
        )
    })

    return (
        <Carousel responsive={responsive}>
            {product}
        </Carousel>
    )
}

export default IntructionsContent

