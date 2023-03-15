import { Button, Image, Space } from "antd";
import React from "react";
import Rating from "../Rating";
import "./item.css";
import { Link } from "react-router-dom";

function Item() {
    return (
        <div className="itemContainer">
            <Link to={"/product"}>
                <Space size={"small"} direction="vertical">
                    <Image
                        preview={false}
                       
                        style={{
                            objectFit: "contain",
                            height: " 8.125rem",
                            width: "11.25rem",
                            margin: "0 auto",
                        }}
                        src="https://boulanger.scene7.com/is/image/Boulanger/4711081209348_h_f_l_0?wid=180&hei=130"
                    />
                    <Rating rating={4.35} numReviews={24} />
                    <h5
                        style={{
                            margin: "0px",
                        }}
                    >
                        Ecran Plasma oled 55 pouce 4K tv
                    </h5>
                    <span style={{ color: "#000" }}>267000 XOF</span>
                    <Button>Ajouter au panier</Button>
                </Space>
            </Link>
        </div>
    );
}

export default Item;
