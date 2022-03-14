import React, { useEffect, useState } from "react";
import axios from "axios";
import { reactLocalStorage } from "reactjs-localstorage";
//import ProductList from "./Produc";
import { useForm } from "react-hook-form";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [editItem, setEditItem] = useState({});

  const loginToken = reactLocalStorage.get("token");

  const { register, handleSubmit, reset } = useForm();
  // add product
  const onSubmit = (data) => {
    axios
      .post(
        " http://51.195.148.112/api/admin/product-type/",
        {
          name: data.name,
        },
        {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
        }
      )
      .then((res) => {
        getProduct();
      });
    reset();
  };

  //update product

  const updateProduct = (e) => {
    e.preventDefault();
    axios
      .patch(
        `http://51.195.148.112/api/admin/product-type/${editItem.id}`,
        {
          name: editItem.name,
        },
        {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
        }
      )
      .then((res) => {
        getProduct();
        setEditItem({});
        reset();
      });
  };
  /// get product
  const getProduct = () => {
    axios
      .get("http://51.195.148.112/api/admin/product-type/", {
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
      })
      .then(({ data: { data } }) => {
        setProducts(data);
      });
  };
  ///delete product
  const deleteProduct = (id) => {
    axios
      .delete(`http://51.195.148.112/api/admin/product-type/${id}`, {
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
      })
      .then((res) => getProduct())
      .catch((error) => {});
  };
  useEffect(() => {
    getProduct();
  }, []);
  console.log("ed", editItem);
  return (
    <div>
      <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Add Product
      </button>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Add Product
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="email">Product name</label>
                    <input
                      className="form-control"
                      name="name"
                      type="text"
                      {...register("name", { required: true })}
                    />
                    {/* <div className="form-group">
                      <label htmlFor="id">product-id</label>
                      <input
                        className="form-control"
                        name="id"
                        type="text"
                        {...register("id", { required: true })}
                      />
                    </div> */}
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="submit"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </>
      </div>

      {/* //modal for update */}
      <div
        className="modal fade"
        id="staticBackdrop1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel1"
        aria-hidden="true"
      >
        <form onSubmit={updateProduct}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel1">
                  Update Product
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="name">Product name</label>
                  <input
                    className="form-control"
                    name="name"
                    type="text"
                    defaultValue={editItem.name}
                    onChange={(e) =>
                      setEditItem({
                        ...editItem,
                        name: e.target.value,
                      })
                    }
                  />
                  {/* <div className="form-group">
                    <label htmlFor="id">product-id</label>
                    <input
                      className="form-control"
                      name="id"
                      type="text"
                      defaultValue={editItem.id}
                      onChange={(e) =>
                        setEditItem({ ...editItem, id: e.target.value })
                      }
                    />
                  </div> */}
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td
                  onClick={() => deleteProduct(item.id)}
                  className="delete-btn"
                >
                  Delete
                </td>
                <td className="update-btn">
                  <button
                    className="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop1"
                    onClick={() => {
                      setEditItem(item);
                    }}
                  >
                    Update
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Product;
