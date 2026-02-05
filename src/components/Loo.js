"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Loo = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/data/logodata.json")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((err) => console.error("Error loading JSON:", err));
    }, []);

    return (
        <div>
            <h2>Products List</h2>

            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                {products.map((item, index) => (
                    <div key={index} style={{ textAlign: "center" }}>
                        <Image
                            src={item.logo}     // image path
                            alt={item.Company}  // correct alt text
                            width={100}
                            height={100}
                        />
                        <h4>{item.Company}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Loo;
