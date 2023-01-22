import React from "react";
import Navbar from "../components/Navbar";
import ProductFilters from "../components/ProductFilters";
import ProductSort from "../components/ProductSort";
import Products from "../components/Products";
//hooks
import useProducts from "../hooks/useProducts";

//styles
import { mainSection, mobileFilterSort, mobileFiltersSection } from "../styles/Shop.module.css";

const Shop = () => {
  const { data, setFilters, setSortOrder, sortOrder } = useProducts();
  const [filtersVisible, setFiltersVisible] = React.useState(false);

  return (
    <>
      <Navbar />
      <main className={mainSection}>
        <ProductSort handleChange={setSortOrder} sortOrder={sortOrder} quantity={data?.quantityDisplayed} />
        <ProductFilters onfilterChange={setFilters} />
        <div className={mobileFilterSort}>
          <span onClick={() => setFiltersVisible(!filtersVisible)}>Filter</span>
          <ProductSort handleChange={setSortOrder} sortOrder={sortOrder} quantity={data?.quantityDisplayed} />
        </div>
        <ProductFilters
          className={mobileFiltersSection}
          filtersVisible={filtersVisible}
          onfilterChange={setFilters}
        />
        <Products data={data} />
      </main>
    </>
  );
};

export default Shop;
