import React from "react";
import { Button, Carousel, Image, Space } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import Rating from "../../components/Rating";
import "./home.css"
import Item from "../../components/item/Item";
import { Pagination } from "swiper";
import List from "../../components/list/List";
import pc from "../../assets/pc1.png"
import tel from "../../assets/tel.png"
import tv from "../../assets/tv.png"
export const Home = () => {
    return (
        <div
            style={{
                padding: "10px",
            }}
        >
            <Carousel className="carouselImg" autoplay effect="fade">
                <img src="https://boulanger.scene7.com/is/image/Boulanger/top-commerce-aem-sams160223?wid=2000" />
                <img src="https://boulanger.scene7.com/is/image/Boulanger/sim-donsdu14fevrier2023?scl=1" />
                <img src="https://boulanger.scene7.com/is/image/Boulanger/top-commerce-aem-whirlplabel210223?wid=2000" />
                <img src="https://boulanger.scene7.com/is/image/Boulanger/top-commerce-aem-cluub140223?wid=2000" />
            </Carousel>
            <List />
            <List titre='Meilleure vente' />
            <h3>En ce moment </h3>
            <div className="topCategorie">
                <div className="left">
                    <img src={pc} alt="image" />
                </div>
                <div className="right">
                    <p>
                        Profiter des toutes derniers sortie d'ordinateur a petit
                        prix
                    </p>
                    <Button> Decouvrir</Button>
                </div>
            </div>
            <Space className="topCate-phone">
                <div className="topCategorie">
                    <div className="left">
                        <img src={tv} alt="image" />
                    </div>
                    <div className="rights">
                        <p>Besoin d'un Ecran LED ?</p>
                        <Button> Decouvrir</Button>
                    </div>
                </div>
                <div className="topCategorie">
                    <div className="lefts">
                        <img src={tel} alt="image" />
                    </div>
                    <div className="rights">
                        <p>
                            Alors quel preferez vous, Apple ? SAMSUNG? XIAOMI?
                        </p>
                        <Button> Decouvrir</Button>
                    </div>
                </div>
            </Space>
        </div>
    );
};
