import React from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import ProductFilters from "../components/ProductFilters";
import { coffeesQueryURL } from "../utils/queries";

const Shop = () => {
  const [coffees, setCoffees] = React.useState([]);
  React.useEffect(() => {
    axios.get(coffeesQueryURL).then((data) => setCoffees(data.data.data));
  }, []);
  console.info(coffees);
  return (
    <>
      <Navbar />
      <main>
        <ProductFilters />
        <div className="products">
          {coffees?.map(({ id, attributes }) => (
            <div key={id}>
              <img src={attributes.main_image?.data?.attributes?.formats?.small.url} alt="" />
              <div>{attributes.name}</div>
              <div>${attributes.price}</div>
              {attributes.reviews ? <span>{attributes.reviews} reviews</span> : ""}
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Shop;
