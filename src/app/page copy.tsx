"use client";

import React from "react";
import ItemCart from "./item-cart";
import { Stack, Typography } from "@mui/material";

// Helper function to format numbers in Thai currency format
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export default function Home() {
  const [total, setTotal] = React.useState(0);

  const handleIncremental = () => {
    setTotal(total + 1);
  };

  const handleDecremental = () => {
    setTotal(total - 1);
  };

  const myItems = [
    { itemname: "iPhone 15", price: 34900, image: "/images/iphone-15-pink.webp" },
    { itemname: "iPhone 15 Pro", price: 37900, image: "/images/iphone-15-pro-natural-titanium.webp" },
    { itemname: "iPad Pro", price: 33900, image: "/images/ipad-pro-13-in-m4-chip-wifi-7th-gen-silver.webp" },
    { itemname: "iPad Air", price: 19900, image: "/images/ipad-air-11-in-m2-chip-wifi-6th-gen-purple.webp" },
    { itemname: "iPad", price: 12900, image: "/images/194252521328.webp" },
    { itemname: "iPad mini", price: 15900, image: "/images/ipad-mini-select-cell-starlight-202109_FMT_WHH.png" },
    { itemname: "MacBook Air", price: 35900, image: "/images/111883_macbookair.png" },
    { itemname: "MacBook Pro", price: 54900, image: "/images/111902_mbp14-silver2.png" },
    { itemname: "iMac", price: 49900, image: "/images/imac-24-no-id-blue-selection-hero-202310.png" },
    { itemname: "Mac mini", price: 24900, image: "/images/111894_macminihero.png" },
    { itemname: "Mac Studio", price: 81900, image: "/images/MQH73TH-A.webp" },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen font-sans">
      <h1 className="text-4xl font-bold mb-6 text-center ">Shopping Cart</h1>
      <div className="flex flex-col space-y-4">
        {myItems.map((item, index) => (
          <ItemCart
            key={index}
            itemname={item.itemname}
            price={item.price}
            image={item.image}
            handleIncremental={handleIncremental}
            handleDecremental={handleDecremental}
          />
        ))}
      </div>
      <Stack direction="row" spacing={2} className="mt-6">
        <Typography variant="h4" className="font-bold font-sans">Total</Typography>
        <Typography variant="h4" className="font-bold font-sans">{(total)}</Typography>
      </Stack>
    </div>
  );
}
