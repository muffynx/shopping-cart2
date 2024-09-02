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

export default function ItemCart({ itemname, price, image, handleIncremental, handleDecremental }: ItemCartProps) {
  const [count, setCount] = React.useState(0);

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
    <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4 font-sans text-black">
      <Image src={image} alt={itemname} width={100} height={100} className="rounded-lg" />
      <div className="flex-1">
        <Typography variant="h6">{itemname}</Typography>
        <Typography variant="h6">{formatCurrency(price)}</Typography>
      </div>
      <Stack direction="row" spacing={2} alignItems="center">
        <IconButton onClick={handleRemoveItemClick}>
          <RemoveIcon />
        </IconButton>
        <Typography variant="h6">{count}</Typography>
        <IconButton onClick={handleAddItemClick}>
          <AddIcon />
        </IconButton>
      </Stack>
    </div>
  );
}

// Utility function for currency formatting
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};
