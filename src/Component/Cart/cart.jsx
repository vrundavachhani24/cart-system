import React, { useState } from "react";
import Header from "../Header/Header";

const Cart = [
    {
        id: 1,
        name: "Apple Air Pods 2",
        price: "$600",
        image: "/images/Airpods.png",
    },
    {
        id: 2,
        name: "Samsung Smart Watch",
        price: "$600",
        image: "/images/smartwatch.png",
    },
    {
        id: 3,
        name: "Apple Monitor Pro",
        price: "$600",
        image: "/images/tv.png",
    },
    {
        id: 4,
        name: "Apple Watch Series 4",
        price: "$600",
        image: "/images/watch.png",
    },
    {
        id : 5,
        name: "Google Pixel 4 XL",
        price: "$600",
        image: "/images/Mobile.png",
    },
    {
        id : 6,
        name: "Amazon Smart Speaker",
        price: "$600",
        image: "/images/spaker.png",
    },
    {
        id : 7,
        name: "Apple MacBook Pro 16",
        price: "$600",
        image: "/images/mackbook.png",
    },
    {
        id : 8,
        name: "Apple iPad 10.2",
        price: "$600",
        image: "/images/ipad.png",
    },
    {
        id : 9,
        name: "Microsoft Surface Book",
        price: "$600",
        image: "/images/laptop.png",
    },
    {
        id : 10,
        name: "Google Nest",
        price: "$600",
        image: "/images/nest.png",
    },
    {
        id : 11,
        name: "Apple iMac Pro ",
        price: "$600",
        image: "/images/imac.png",
    },
    {
        id : 12,
        name: "Samsung Smart Watch",
        price: "$600",
        image: "/images/ssmartwatch.png",
    },
];

const Product = () => {

    const [selectItems, setSelectItems] = useState([])
    const [searchdata, setSearchData] = useState("");

    const handleSearch = (term) => {
        setSearchData(term.toLowerCase());
      };
    
      const filteredProducts = Cart.filter((item) =>
        item.name.toLowerCase().includes(searchdata)
      );


    const handleSelectAll = () => {
        if (selectItems.length === Cart.length) {
            setSelectItems([]); 
        } else {
            setSelectItems(Cart.map((item) => item.id))
        }
    }

    const handleSelectItem = (id) => {
        if (selectItems.includes(id)) {
            setSelectItems(selectItems.filter((itemId) => itemId !== id));
        } else {
            setSelectItems([...selectItems , id])
        }
    }

    return (
        <div>
            <Header Cart={Cart}
                handleSelectAll={handleSelectAll}
                selectItems={selectItems}
                handleSearch={handleSearch}
            />
            <div className="container mx-auto text-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
                    {
                        filteredProducts.map((item) => (
                            <div key={item.id} className="bg-white p-4 shadow-lg border-1 border-gray-300">
                                <input type="checkbox" checked={selectItems.includes(item.id)}
                                    onChange={() => handleSelectItem(item.id)} className="float-left w-5 h-5 accent-blue-500" />
                                <img src={item.image} className="mb-4" />
                                <h3 className="text-lg font-bold">{item.name}</h3>
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
