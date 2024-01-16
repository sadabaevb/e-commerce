"use client";

import Image from "next/image";
import { Button, IconButton } from "@mui/material";
import { Circle } from "lucide-react";

const ProductCardDesktop = ({ product }) => {
  return (
    <div className="tw-hidden md:tw-flex tw-flex-col tw-gap-y-6 tw-basis-1/4">
      <Image src={product.photo} alt="photo" height="100%" className="tw-h-[427px]" />
      <div className="tw-flex tw-flex-col tw-items-center tw-gap-y-2.5">
        <p className="tw-text-base tw-font-bold">{product.title}</p>
        <p className="tw-text-sm tw-font-bold tw-text-[#737373]">{product.category}</p>
        <div className="tw-font-bold tw-flex tw-gap-x-1.5">
          <span className="tw-text-[#BDBDBD]">${product.price}</span>
          <span className="tw-text-[#23856D]">${product.discountPrice}</span>
        </div>

        <div>
          <IconButton>
            <Circle color="#23A6F0" fill="#23A6F0" />
          </IconButton>
          <IconButton>
            <Circle color="#23856D" fill="#23856D" />
          </IconButton>
          <IconButton>
            <Circle color="#E77C40" fill="#E77C40" />
          </IconButton>
          <IconButton>
            <Circle color="#252B42" fill="#252B42" />
          </IconButton>
          <Button>dasdasd</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardDesktop;
