"use client";

import Image from "next/image";
import Photo from "@/assets/filter.png";
import { Button } from "@mui/material";

const ProductCardMobile = () => {
  return (
    <div className="tw-h-[500px] tw-relative tw-block md:tw-hidden">
      <Image src={Photo} alt="photo" />
      <Button
        className="tw-px-10 tw-py-2 tw-absolute tw-bottom-7 tw-left-8 tw-text-black tw-bg-white"
        variant="contained"
      >
        MEN
      </Button>
    </div>
  );
};

export default ProductCardMobile;
