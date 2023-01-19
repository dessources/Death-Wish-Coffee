import React from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import ProductFilters from "../components/ProductFilters";
import RatingStars from "../components/RatingStars";
import ProductSort from "../components/ProductSort";
//hooks
import useProducts from "../hooks/useProducts";

//styles
import { productSection, sortSection, products, product, name, reviews, price } from "../styles/Shop.module.css";

const Shop = () => {
  const { data, setFilters, setSortOrder, sortOrder } = useProducts();
  // console.log(data?.products);

  return (
    <>
      <Navbar />

      <main>
        <div className={productSection}>
          <ProductSort
            className={sortSection}
            handleChange={setSortOrder}
            sortOrder={sortOrder}
            quantity={data?.quantityDisplayed}
          />
          <ProductFilters onfilterChange={setFilters} />
          <div className={products}>
            {data?.products?.map(({ id, attributes, hidden }) => {
              if (!hidden) {
                return (
                  <div key={id} className={product}>
                    <a href="#">
                      <img src={attributes.main_image?.data?.attributes?.formats?.small?.url} alt="" />
                    </a>
                    <a href="#">
                      <div className={name}>{attributes.name.toLowerCase()}</div>
                    </a>
                    {attributes.reviews ? (
                      <a href="#">
                        <div className={reviews}>
                          <RatingStars rating={attributes.rating} />
                          {attributes.reviews} reviews
                        </div>
                      </a>
                    ) : (
                      ""
                    )}
                    <div className={price}>${attributes.price}</div>
                  </div>
                );
              } else return "";
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Shop;
