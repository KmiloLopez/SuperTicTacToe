import React, { useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

//import { data } from "../../assets/data"
import { data } from '../../../public/images/data'
import {
    CardStyled,
    ImageStyled,
    TextContainer,
} from './InstructionsContent.styled'

const IntructionsContent = () => {
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
            <CardStyled>
                <ImageStyled src={item.imgURL} alt={item.alt} />
                <TextContainer>
                    <p>{item.text}</p>
                </TextContainer>
            </CardStyled>
        )
    })

    return (
        <Carousel
            responsive={responsive}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            partialVisible={false}
        >
            {product}
        </Carousel>
    )
}

export default IntructionsContent
