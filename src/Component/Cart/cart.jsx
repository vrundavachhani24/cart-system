import React from "react";
import Header from "../Header/Header";
import { Checkbox } from "@mantine/core";

const Cart = [
    {
        name: "Apple Air Pods 2",
        price: "$600",
        image: "/images/Airpods.png",
    },
    {
        name: "Samsung Smart Watch",
        price: "$600",
        image: "/images/smartwatch.png",
    },
    {
        name: "Apple Monitor Pro",
        price: "$600",
        image: "/images/tv.png",
    },
    {
        name: "Apple Watch Series 4",
        price: "$600",
        image: "/images/watch.png",
    },
    {
        name: "Google Pixel 4 XL",
        price: "$600",
        image: "/images/Mobile.png",
    },
    {
        name: "Amazon Smart Speaker",
        price: "$600",
        image: "/images/spaker.png",
    },
    {
        name: "Apple MacBook Pro 16",
        price: "$600",
        image: "/images/mackbook.png",
    },
    {
        name: "Apple iPad 10.2",
        price: "$600",
        image: "/images/ipad.png",
    },
];

const Product = () => {
    return (
        <div>
            <Header />
            <div className="container mx-auto p-6 text-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {
                        Cart.map((item) => (
                            <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-200">
                                <input type="checkbox" className="float-left" />
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="mb-4"
                                />
                                <h3 className="text-lg">{item.name}</h3>
                                <p>{item.price}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Product
