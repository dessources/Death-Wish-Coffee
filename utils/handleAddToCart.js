import { addToCart } from "../redux/cart.slice";
import { useDispatch, useSelector } from "react-redux";

export default handleAddToCart = ({ size, style, uid, price }) => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.cart);

    console.log("the state is before adding the produtc :");
    console.info(state);
    const [product] = data.products.filter(({ attributes }) => attributes.uid === uid);

    const cartPayload = {
      uid: uid,
      name: product.attributes.name,
      style: style,
      size: size,
      main_image: product.attributes.main_image,
      price: price || product.attributes.price,
    };
    dispatch(addToCart(cartPayload));
  };