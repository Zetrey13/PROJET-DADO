import React, { useState } from 'react'
import "./product.css";
 import tv1 from "../../assets/tv1.png";
 import tv2 from "../../assets/tv3.png";
 import tv from "../../assets/tv.png";
import { Button, Space } from 'antd';
import List from '../../components/list/List';
export const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantite, Setquantite] = useState(1);
 
 
  const images = [tv1, tv2];

  return (
      <>
    <div className="product">
          <div className="left">
              <div className="images">
                  <img
                      src={tv1}
                      alt="image"
                      onClick={(e) => setSelectedImage(0)}
                      />
                  <img
                      src={images[1]}
                      alt="image"
                      onClick={(e) => setSelectedImage(1)}
                      />
              </div>
              <div className="mainImg">
                  <img src={images[selectedImage]} alt="" />
              </div>
          </div>
           <Space className="right" direction='vertical'>
         
              <h1>Tv led 55V pouce</h1>
              <span>147000</span>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  ab provident nesciunt dolor dolorum, sint architecto maxime,
                  ex laboriosam excepturi deserunt delectus id doloribus porro
                  autem laudantium fugit neque praesentium?
              </p>
              <div className="quantite">
                  <button
                      onClick={() =>
                        Setquantite((prev) => (prev === 1 ? 1 : prev - 1))
                      }
                      >
                      -
                  </button>
                  {quantite}
                  <button onClick={() => Setquantite((prev) => prev + 1)}>
                      +
                  </button>
        </div>
        <Button className="addCart">Ajouter au panier</Button>
         
          </Space>
      </div>
      <List titre="vous aimeriez aussi" />
    </>
  );
}
