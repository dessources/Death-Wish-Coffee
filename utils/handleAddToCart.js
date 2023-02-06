import formatProductDescription from "../utils/formatProductDescription";

const handleAddToCart = ({ size, style, uid, price, sizes, name, thumbnailImage }) => {
  const cartPayload = {
    uid: uid,
    name: `${name} `,
    description: formatProductDescription(size, style) || " ",
    image: thumbnailImage,
    price: sizes?.[size] || price,
    style: style,
    size: size,
  };
  return cartPayload;
};

export default handleAddToCart;
