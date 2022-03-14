import React from "react";
import Product from "../component/Product";

//import ProductList from "../component/ProductList";
import SideBar from "../component/SideBar";
import TopNav from "../component/TopNav";

const ProductPage = () => {
  return (
    <div className="wrapper">
      <SideBar />
      <TopNav />
      <div className="main-content">
        <div className="row">
          <div className="col-md-12">
            <div class="table-wrapper">
              <Product />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
