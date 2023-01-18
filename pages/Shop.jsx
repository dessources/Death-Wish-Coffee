import React from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import ProductFilters from "../components/ProductFilters";
import RatingStars from "../components/RatingStars";
import ProductSort from "../components/ProductSort";
//hooks
import useProducts from "../hooks/useProducts";

//styles
import * as classes from "../styles/Shop.module.css";

const Shop = () => {
  const { data, setFilters, setSortOrder } = useProducts();
  console.log(data?.products);

  return (
    <>
      <Navbar />

      <main>
        <div className={classes["product-section"]}>
          <ProductSort
            className={classes["sort"]}
            handleChange={setSortOrder}
            quantity={data?.quantityDisplayed}
          />
          <ProductFilters className={classes["filters"]} onfilterChange={setFilters} />
          <div className={classes["products"]}>
            {data?.products?.map(({ id, attributes, hidden }) => {
              if (!hidden) {
                return (
                  <div key={id} className={classes["product"]}>
                    <a href="#">
                      <img src={attributes.main_image?.data?.attributes?.formats?.small?.url} alt="" />
                    </a>
                    <a href="#">
                      <div className={classes["name"]}>{attributes.name.toLowerCase()}</div>
                    </a>
                    {attributes.reviews ? (
                      <a href="#">
                        <div className={classes["reviews"]}>
                          <RatingStars rating={attributes.rating} />
                          {attributes.reviews} reviews
                        </div>
                      </a>
                    ) : (
                      ""
                    )}
                    <div className={classes["price"]}>${attributes.price}</div>
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
