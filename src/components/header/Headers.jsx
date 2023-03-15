import React from "react";
import { useState } from "react";
import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
    MenuOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import {
    Menu,
    Drawer,
    Button,
    Divider,
    Image,
    Input,
    Space,
    Badge,
} from "antd";
import { useNavigate } from "react-router-dom";
import "./header.css";
const { Search } = Input;

const items = [
    {
        label: "Acceuil",
        key: "/",
    },
    {
        label: "nouvelle arrivage",
        key: "product",
    },
    {
        label: "Telephone",
        key: "categorie",
        children: [
            {
                label: "Iphone",
                key: "/categorie/iphone",
            },
            {
                label: "Samsung",
                key: "/categorie/Samsung",
            },
            {
                label: "Huawei",
                key: "/categorie/Huawei",
            },
            {
                label: "Xiaomi",
                key: "/categorie/Xiaomi",
            },
            {
                label: "Nokia",
                key: "/categorie/Nokia",
            },
        ],
    },
    {
        label: "Telivision",
        key: "/categorie/telivision",
        children: [
            {
                label: "Samsung",
                key: "/categorie/tv/Samsung",
            },
            {
                label: "LG",
                key: "/categorie/tv/LG",
            },
            {
                label: "Sharp",
                key: "/categorie/tv/Sharp",
            },
            {
                label: "Nokia",
                key: "/categorie/tv/Nokia",
            },
        ],
    },
];

export default function Headers() {
    const [open, setOpen] = useState(false);
    const [childrenDrawer, setChildrenDrawer] = useState(false);
    const [isHover, setHover] = useState(false);
    const showDrawer = () => {
        setOpen(!open);
    };
    const onSearch = (value) => console.log(value);
    const navigate = useNavigate();
    const [current, setCurrent] = useState("/");
    const onClick = (e) => {
        setCurrent(e.key);
        setOpen(!open);
        navigate(e.key);
    };
    return (
        <div>
            <div className="header">
                <Image
                    className="logo"
                    width={155}
                    preview={false}
                    src="https://m.boulanger.com/etc.clientlibs/aem-site-desktop/wpk.app/resources/assets/svg/logo-boulanger-full.svg"
                />
                <Search
                    placeholder="Rechercher...."
                    allowClear
                    enterButton
                    onSearch={onSearch}
                    style={{
                        width: "500px",
                        height: "40px",
                        borderRadius: "25px",
                    }}
                    className="search"
                />
                <Space size={"large"}>
                    <i class="fa fa-user-circle" aria-hidden="true"></i>
                    <Badge count={6}>
                        <ShoppingCartOutlined
                            style={{ fontSize: "24px", color: "#08c" }}
                        />
                    </Badge>
                </Space>
            </div>
            <div className="headerBotom">
                <Space size={"large"}>
                    <p
                        onMouseOver={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        <MenuOutlined
                            style={{
                                fontSize: "24px",
                                color: "#08c",
                                marginRight: "5px",
                            }}
                            onClick={showDrawer}
                            spin={isHover}
                        />
                        <span id="menuSubtitle"> Produits</span>
                    </p>
                    <Link className="botomItem">Nouvelle arrivage</Link>
                    <Link className="botomItem">Meilleure vente</Link>
                    <Link className="botomItem">Offre</Link>
                </Space>
                <Search
                    placeholder="Rechercher...."
                    allowClear
                    enterButton
                    onSearch={onSearch}
                    style={{ width: "260px" }}
                    className="searchMobile"
                />
                <Drawer
                    title="categories"
                    width={250}
                    closable={false}
                    onClose={showDrawer}
                    open={open}
                    placement="left"
                >
                    <Menu
                        onClick={onClick}
                        selectedKeys={[current]}
                        mode="inline"
                        items={items}
                    />
                    <div className="menuBotm">
                        <p>Nouvelle arrivage</p>
                        <p>Meilleure vente</p>
                        <p>Offre</p>
                    </div>
                </Drawer>
            </div>
        </div>
    );
}
