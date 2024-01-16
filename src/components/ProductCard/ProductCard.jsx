import ProductCardDesktop from "./ProductCardDesktop";
import ProductCardMobile from "./ProductCardMobile";

const ProductCard = ({ product }) => {
  return (
    <div>
      <ProductCardMobile />
      <ProductCardDesktop product={product} />
    </div>
  );
};

export default ProductCard;
