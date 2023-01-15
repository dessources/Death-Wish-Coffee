import React from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import ProductFilters from "../components/ProductFilters";
import RatingStars from "../components/RatingStars";
import ProductSort from "../components/ProductSort";
//hooks
import useCoffees from "../hooks/useCoffees";

//styles
import * as classes from "../styles/Shop.module.css";

const Shop = () => {
  const { coffees, setSortOrder } = useCoffees();

  return (
    <>
      <Navbar />
      <main>
        <div className={classes["product-section"]}>
          <ProductSort className={classes["sort"]} handleChange={setSortOrder} />
          <ProductFilters className={classes["filters"]} />
          <div className={classes["products"]}>
            {coffees?.map(({ id, attributes }) => (
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
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Shop;
