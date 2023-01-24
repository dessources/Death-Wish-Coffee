import React from "react";
import Navbar from "../components/Navbar";
import ProductFilters from "../components/ProductFilters";
import ProductSort from "../components/ProductSort";
import Products from "../components/Products";
//hooks
import useProducts from "../hooks/useProducts";

//styles
import { productSection, sortSection } from "../styles/Shop.module.css";

const Shop = () => {
  const { data, setFilters, setSortOrder, sortOrder } = useProducts();
  // console.log(data?.products);

  return (
    <>
      <Navbar />
      <main className={productSection}>
        <ProductSort
          className={sortSection}
          handleChange={setSortOrder}
          sortOrder={sortOrder}
          quantity={data?.quantityDisplayed}
        />
        <ProductFilters onfilterChange={setFilters} />
        <Products data={data} />
      </main>
    </>
  );
};

export default Shop;
