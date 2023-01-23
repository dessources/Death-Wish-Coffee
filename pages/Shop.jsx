import React from "react";
import Navbar from "../components/Navbar";
import ProductFilters from "../components/ProductFilters";
import ProductSort from "../components/ProductSort";
import Products from "../components/Products";
//hooks
import useProducts from "../hooks/useProducts";

//styles
import { mainSection, productsHeader } from "../styles/Shop.module.css";

const Shop = () => {
  const { data, setFilters, filters, setSortOrder, sortOrder } = useProducts();
  const [filtersVisible, setFiltersVisible] = React.useState(false);

  return (
    <>
      <Navbar />
      <main className={mainSection}>
        <div className={productsHeader}>
          <span onClick={() => setFiltersVisible(!filtersVisible)}>Filter</span>
          <ProductSort handleChange={setSortOrder} sortOrder={sortOrder} quantity={data?.quantityDisplayed} />
        </div>
        <ProductFilters onFilterChange={setFilters} filtersVisible={filtersVisible} filters={filters} />
        <Products data={data} />
      </main>
    </>
  );
};

export default Shop;
