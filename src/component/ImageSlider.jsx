import React from 'react';
import "react-slideshow-image/dist/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/Slider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export const ImageSlider = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 1
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 1
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };

    const items = [
        {
            id: 1,
            altText: "Technology",
            caption: "”What new technology does is create new opportunities to do a job that customers want done.”",
            src: "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        },
        {
            id: 2,
            altText: "Colors",
            caption: "When you photograph people in color, you photograph their clothes. But when you photograph people in Black and white, you photograph their souls!",
            src: "https://images.unsplash.com/photo-1679312995136-4bfc25c1936f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        },
        {
            id: 3,
            altText: "Earth",
            caption: "Treat the earth well: it was not given to you by your parents, it was loaned to you by your children. We do not inherit the Earth from our Ancestors, we borrow it from our Children.",
            src: "https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
        },
        {
            id: 4,
            altText: "Earth",
            caption: "Treat the earth well: it was not given to you by your parents, it was loaned to you by your children. We do not inherit the Earth from our Ancestors, we borrow it from our Children.",
            src: "https://images.unsplash.com/photo-1679395561581-9d9bc2584047?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        }, {
            id: 5,
            altText: "Earth",
            caption: "Treat the earth well: it was not given to you by your parents, it was loaned to you by your children. We do not inherit the Earth from our Ancestors, we borrow it from our Children.",
            src: "https://images.unsplash.com/photo-1679087643385-c97591969466?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
        }, {
            id: 6,
            altText: "Earth",
            caption: "Treat the earth well: it was not given to you by your parents, it was loaned to you by your children. We do not inherit the Earth from our Ancestors, we borrow it from our Children.",
            src: "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        }
    ];

    const slides = items.map((item) => {
        return (
            <div className="card">
                <div className="card-img">
                    <img src={item.src} alt={item.altText} className="img-fluid" width={15000}/>
                </div>
                <div className="shade"></div>
            </div>
        )
    });


    return (
        <Carousel
            // showDots={true}
            draggable={false}
            // // swipeable={false}
            // ssr={true}
            infinite={true}
            // // autoPlaySpeed={1000}
            // keyBoardControl={true}
            // // customTransition="all .5"
            // transitionDuration={500}
            // containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            // itemClass="carousel-item-padding-40-px"
            responsive={responsive}
            // customRightArrow={<CustomRightArrow/>}
            // customButtonGroup={<ButtonGroup/>}
            centerMode={true}
            focusOnSelect={true}
        >
            {slides}
        </Carousel>
    )
}