import React from 'react'
import { Col, Divider, Row, Space } from 'antd';
import Item from '../../components/item/Item';
import { Pagination } from "antd";
import { useState } from "react";
import "./categorie.css"
export const Categorie = () => {
    const [current, setCurrent] = useState(1);
    const [Data, setData] = useState(
        Array(80)
            .fill()
            .map(() => Math.round(Math.random() * 80))
    );
    const [productPerPage, setProductPerPage] = useState(12);
    const onChange = (page) => {
        console.log(page);
        setCurrent(page);
    };
  const lastProductIndex = current * productPerPage;
  const firstProductIndex = lastProductIndex - productPerPage;
  const currentProduct = Data.slice(firstProductIndex, lastProductIndex);
  return (
      <Space className="categorie" direction="vertical">
          <Row
              style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
              }}
              gutter={{
                  xs: 1,
                  sm: 2,
                  md: 5,
                  lg: 7,
              }}
          >
              {currentProduct.map((item, index) => {
                  return (
                      <Col key={index} className="gutter-row">
                          <Item />
                      </Col>
                  );
              })}
          </Row>

          <div className="pagination">
              <Pagination
                  simple
                  defaultCurrent={current}
                  total={Data.length}
                  onChange={onChange}
              />
          </div>
      </Space>
  );
}
