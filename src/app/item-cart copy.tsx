"use client";

import React from "react";
import Image from "next/image";
import { IconButton, Typography, Stack } from "@mui/material/";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface ItemCartProps {
  itemname: string;
  price: number;
  image: string;
  handleIncremental: (itemPrice: number) => void;
  handleDecremental: (itemPrice: number) => void;
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export default function ItemCart({  
  itemname,
  price,
  image,
  handleIncremental,
  handleDecremental,
}: ItemCartProps) {
  const [count, setCount] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const handleAddItemClick = () => {
    setCount(count + 1);
    handleIncremental(price);
  };

  const handleRemoveItemClick = () => {
    if (count > 0) {
      setCount(count - 1);
      handleDecremental(price);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4">
      <Image src={image} alt={itemname} width={100} height={100} className="rounded-lg" />
      <div className="flex-1">
        <Typography variant="h6" className="text-xl font-semibold font-sans">{itemname}</Typography>
        <Stack direction="row" spacing={2} alignItems="center" className="mt-2">
          <IconButton onClick={handleRemoveItemClick} className="text-red-500">
            <RemoveIcon />
          </IconButton>
          <Typography variant="h6" className="text-lg font-sans">{count}</Typography>
          <IconButton onClick={handleAddItemClick} className="text-green-500">
            <AddIcon />
          </IconButton>
        </Stack>
      </div>
      <Typography variant="subtitle1" className="text-lg font-medium font-sans">Total: {formatCurrency(totalPrice)}</Typography>
    </div>
  );
}
