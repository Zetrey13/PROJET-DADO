import React,{useState} from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./list.css";
import Item from "../item/Item";
export default function List({titre}) {
     const [Data, setData] = useState(
        Array(15)
            .fill()
            .map(() => Math.round(Math.random() * 15))
    );
    return (
        <>
            <h3> {titre? titre : "Nouvelle arrivage"} </h3>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={9}
                pagination={{
                    clickable: true,
                    type: "progressbar",
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {Data.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Item />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
}
