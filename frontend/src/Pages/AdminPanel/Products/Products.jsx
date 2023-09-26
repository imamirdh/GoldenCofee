import React, { useContext, useEffect, useState } from "react";
import { useForm } from "../../../Hooks/useForm";
import Swal from "sweetalert2";
import {
  maxValidator,
  minValidator,
  requiredValidator,
} from "./../../../Validations/rules";
import Button from "./../../../Components/AdminPanel/Input/Button";
import InputForm from "./../../../Components/AdminPanel/Input/Input";
import Table from "./../../../Components/AdminPanel/Table/Table";
import { MdOutlineAddShoppingCart, MdViewList } from "react-icons/md";
import { HiOutlineTrash, HiOutlinePencil, HiOutlineEye } from "react-icons/hi";
import AppContext from "../../../Context/AppContext";
function Products(props) {
  const appcontext = useContext(AppContext);
  const [pageHandle, setPageHanler] = useState("list");
  const [productList, setProductList] = useState([]);
  const [productCover, setProductCover] = useState({});
  const [productCategory, setProductCategory] = useState("-1");
  const [categories, setCategories] = useState([]);
  const [productStatus, setProductStatus] = useState("start");
  const [formstate, onInputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      shortName: {
        value: "",
        isValid: false,
      },
      price: {
        value: "",
        isValid: false,
      },
      support: {
        value: "تماس",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    getAllProducts();

    fetch(`http://localhost:4000/v1/category`)
      .then((res) => res.json())
      .then((allCategories) => {
        console.log(allCategories);
        setCategories(allCategories);
      });
  }, []);
  function getAllProducts() {
    fetch(`http://localhost:4000/v1/courses`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          const Toast = Swal.mixin({
            toast: true,
            color: appcontext.isDark ? "#fed7aa" : "",
            background: appcontext.isDark ? "#3f3f46" : "",
            showConfirmButton: false,
            width: "400px",
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "warning",
            title: " مشکلی در دریافت لیست پیش آمده ",
          });
        }
      })
      .then((result) => {
        console.log(result);
        setProductList(result);
      });
  }
  const removeProduct = (productID) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    Swal.fire({
      title: "آیا از حذف محصول اطمینان داری؟",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "خیر",
      confirmButtonText: "بله",
      confirmButtonColor: "#f43f5e",
      color: appcontext.isDark ? "#fed7aa" : "",
      background: appcontext.isDark ? "#3f3f46" : "",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/v1/courses/${productID}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          },
        }).then((res) => {
          if (res.ok) {
            Swal.fire({
              title: "دوره موردنظر با موفقیت حذف شد",
              icon: "success",
              confirmButtonColor: "#10b981",
              color: appcontext.isDark ? "#fed7aa" : "",
              background: appcontext.isDark ? "#3f3f46" : "",
            }).then(() => {
              getAllProducts();
            });
          } else {
            Swal.fire({
              title: "حذف دوره با مشکلی مواجه شد",
              icon: "error",
              buttons: "اوکی",
            });
          }
        });
      }
    });
  };

  const addProduct = (e) => {
    e.preventDefault();
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    let formData = new FormData();
    formData.append("name", formstate.inputs.name.value);
    formData.append("price", formstate.inputs.price.value);
    formData.append("shortName", formstate.inputs.shortName.value);
    formData.append("description", formstate.inputs.description.value);
    formData.append("support", formstate.inputs.support.value);
    formData.append("status", productStatus);
    formData.append("categoryID", productCategory);
    formData.append("cover", productCover);
    console.log(productCategory);
    fetch(`http://localhost:4000/v1/courses`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorageData}`,
      },
      body: formData,
    }).then((res) => {
      if (res.ok) {
        Swal.fire({
          title: "دوره موردنظر با موفقیت اضافه شد",
          icon: "success",
          confirmButtonColor: "#10b981",
          color: appcontext.isDark ? "#fed7aa" : "",
          background: appcontext.isDark ? "#3f3f46" : "",
        }).then(() => {
          getAllProducts();
        });
      } else {
        Swal.fire({
          title: "حذف دوره با مشکلی مواجه شد",
          icon: "error",
          buttons: "اوکی",
        });
      }
    });
  };
  return (
    <>
      <div className="buttons flex items-center gap-2 mt-2 px-2">
        <Button
          className={` border-zinc-700 text-zinc-500  rounded-md border-2 p-2 px-4 text-center text-sm transition-all hover:bg-transparent hover:border-orange-300 hover:text-orange-300 font-Dana flex items-center gap-2 ${
            pageHandle === "form" && "!border-orange-300 !text-orange-300"
          }`}
          onClick={() => setPageHanler("form")}
          icon={<MdOutlineAddShoppingCart className="text-lg" />}
        >
          افزودن محصول
        </Button>
        <Button
          className={`border-zinc-700 text-zinc-500  rounded-md border-2 p-2 px-4 text-center text-sm transition-all hover:bg-transparent hover:border-orange-300 hover:text-orange-300 font-Dana flex items-center gap-2 ${
            pageHandle === "list" && "!border-orange-300 !text-orange-300"
          }`}
          onClick={() => setPageHanler("list")}
          icon={<MdViewList className="text-lg" />}
        >
          لیست محصولات
        </Button>
      </div>
      {pageHandle === "list" && (
        <div className="p-2">
          <p className="font-MorabbaBold text-xl dark:text-orange-200 text-gray-700 border-b dark:border-zinc-300 border-orange-300  py-2 my-2">
            لیست محصولات
          </p>
          <Table
            th={[
              "ردیف",
              "عنوان",
              "لینک",
              "قیمت",
              " دسته بندی",
              "تاریخ  اضافه کردن",
              "کنترل",
            ]}
          >
            {productList?.map((product, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.shortName}</td>
                <td>{product.price}</td>
                <td>{product.categoryID}</td>
                <td>{product.createdAt.slice(0, 10)}</td>
                <td className="flex items-center justify-center my-2">
                  <Button
                    onClick={() => removeProduct(product._id)}
                    className="group relative border-2 border-zinc-400 p-2 rounded-md hover:border-rose-500 transition-all"
                  >
                    <HiOutlineTrash className="text-zinc-500 text-lg hover:text-orange-300 group-hover:text-rose-500 dark:text-zinc-300" />
                    <span className="absolute -top-full -right-full hidden bg-white p-1 text-sm rounded-lg border border-zinc-500 group-hover:block dark:bg-zinc-700 ">
                      حذف
                    </span>
                  </Button>
                  <Button className="group relative border-2 border-zinc-400 p-2 rounded-md hover:border-yellow-500 transition-all">
                    <HiOutlinePencil className="text-zinc-500 text-lg hover:text-orange-300 group-hover:text-yellow-500 dark:text-zinc-300" />
                    <span className="absolute -top-full -right-full hidden bg-white p-1 text-sm rounded-lg border border-zinc-500 group-hover:block dark:bg-zinc-700 ">
                      ویرایش
                    </span>
                  </Button>
                  <Button
                    to={`/product/${product.shortName}`}
                    className="group relative border-2 border-zinc-400 p-2 rounded-md hover:border-orange-300 transition-all"
                  >
                    <HiOutlineEye className="text-zinc-500 text-lg hover:text-orange-300 group-hover:text-orange-300 dark:text-zinc-300" />
                    <span className="absolute -top-full -right-full hidden bg-white p-1 text-sm rounded-lg border border-zinc-500 group-hover:block dark:bg-zinc-700 ">
                      مشاهده
                    </span>
                  </Button>
                </td>
              </tr>
            ))}
          </Table>
        </div>
      )}
      {pageHandle === "form" && (
        <div className="p-2">
          <p className="font-MorabbaBold text-xl dark:text-orange-200 text-gray-700 border-b dark:border-zinc-300 border-orange-300  py-2 my-2">
            افزودن محصول جدید
          </p>
          <form action="" className="p-2">
            <div className="row lg:flex lg:items-center gap-5 space-y-5 lg:space-y-0">
              <InputForm
                element="input"
                id="name"
                onInputHandler={onInputHandler}
                lable="نام محصول"
                validations={[requiredValidator(), minValidator(3)]}
                className={`lg:w-[33%] h-12 dark:text-gray-200`}
              />
              <InputForm
                element="input"
                id="price"
                onInputHandler={onInputHandler}
                lable="قیمت محصول"
                validations={[requiredValidator(), minValidator(3)]}
                className={`lg:w-[33%] h-12 dark:text-gray-200`}
              />
              <InputForm
                element="input"
                id="shortName"
                onInputHandler={onInputHandler}
                lable="url محصول"
                validations={[requiredValidator(), minValidator(3)]}
                className={`lg:w-[33%] h-12 dark:text-gray-200`}
              />
            </div>
            <div className="row mt-4 space-y-5">
              <label
                htmlFor=""
                className="font-DanaDemiBold  dark:text-orange-200 text-gray-700 border-b dark:border-zinc-300 border-orange-300 "
              >
                توضیحات محصول
              </label>
              <InputForm
                id="description"
                onInputHandler={onInputHandler}
                lable="توضیحات به صورت کد html وارد شود"
                validations={[requiredValidator(), minValidator(3)]}
                className={`w-[100%] h-60`}
              />
            </div>
            <div className="row mt-4 lg:flex lg:items-center gap-5 space-y-5 lg:space-y-0">
              <div className="flex flex-col lg:w-[33%] space-y-5">
                <label
                  htmlFor=""
                  className="font-DanaDemiBold dark:text-orange-200 text-gray-700 border-b dark:border-zinc-300 border-orange-300 "
                >
                  عکس محصول
                </label>
                <input
                  type="file"
                  onChange={(e) => {
                    setProductCover(e.target.files[0]);
                  }}
                  onInputHandler={onInputHandler}
                  validations={[requiredValidator(), minValidator(3)]}
                  className={`h-12 bg-zinc-200 rounded-md p-2 dark:bg-transparent dark:border-2 dark:border-orange-300 dark:text-gray-300`}
                />
              </div>
              <div className="flex flex-col lg:w-[33%] space-y-5">
                <label
                  htmlFor=""
                  className="font-DanaDemiBold dark:text-orange-200 text-gray-700 border-b dark:border-zinc-300 border-orange-300 "
                >
                  دسته بندی محصول
                </label>
                <select
                  onChange={(e) => setProductCategory(e.target.value)}
                  class="bg-gray-50 border-2 border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-orange-300 focus:border-orange-300 block w-full p-2.5 dark:bg-zinc-700 dark:border-orange-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-orange-300"
                >
                  <option value="-1" selected>
                    دسته بندی مورد نظر را انتخاب کنید
                  </option>
                  {categories.map((category) => (
                    <option value={category._id}>{category.title}</option>
                  ))}
                </select>
              </div>
              <Button
                className="bg-zinc-600 text-orange-200  rounded-2xl border-2 p-2 px-4 text-center text-sm transition-all hover:bg-transparent hover:border-orange-300 dark:hover:border-orange-300 hover:text-orange-300 dark:bg-transparent dark:border-orange-200   font-Dana"
                onClick={(e) => addProduct(e)}
              >
                افزودن محصول
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Products;
