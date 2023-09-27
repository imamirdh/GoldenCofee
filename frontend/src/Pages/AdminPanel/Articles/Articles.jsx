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
import { useForm } from "../../../Hooks/useForm";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import AppContext from "../../../Context/AppContext";
function Articles(props) {
  const [pageHandle, setPageHanler] = useState("list");
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [articleCategory, setArticleCategory] = useState("-1");
  const [articleCover, setArticleCover] = useState({});
  const [articleBody, setArticleBody] = useState("");
  const appcontext = useContext(AppContext);
  const [formState, onInputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      shortName: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    getAllArticles();

    fetch(`http://localhost:4000/v1/category`)
      .then((res) => res.json())
      .then((allCategories) => {
        setCategories(allCategories);
      });
  }, []);

  function getAllArticles() {
    fetch("http://localhost:4000/v1/articles")
      .then((res) => res.json())
      .then((allArticles) => {
        console.log(allArticles);
        setArticles(allArticles);
      });
  }

  const removeArticle = (articleID) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));

    Swal.fire({
      title: "آیا از حذف مقاله اطمینان داری؟",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "خیر",
      confirmButtonText: "بله",
      confirmButtonColor: "#f43f5e",
      color: appcontext.isDark ? "#fed7aa" : "",
      background: appcontext.isDark ? "#3f3f46" : "",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/v1/articles/${articleID}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorageData}`,
          },
        }).then((res) => {
          if (res.ok) {
            Swal.fire({
              title: "مقاله موردنظر با موفقیت حذف شد",
              icon: "success",
              confirmButtonColor: "#10b981",
              color: appcontext.isDark ? "#fed7aa" : "",
              background: appcontext.isDark ? "#3f3f46" : "",
            }).then(() => {
              getAllArticles();
            });
          }
        });
      }
    });
  };

  const createArticle = (event) => {
    event.preventDefault();
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    let formData = new FormData();
    formData.append("title", formState.inputs.title.value);
    formData.append("shortName", formState.inputs.shortName.value);
    formData.append("description", formState.inputs.description.value);
    formData.append("categoryID", articleCategory);
    formData.append("cover", articleCover);
    formData.append("body", articleBody);

    fetch(`http://localhost:4000/v1/articles`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorageData}`,
      },
      body: formData,
    }).then((res) => {
      if (res.ok) {
        Swal.fire({
          title: "مقاله  با موفقیت منتشر شد",
          icon: "success",
          confirmButtonColor: "#10b981",
          color: appcontext.isDark ? "#fed7aa" : "",
        }).then(() => {
          getAllArticles();
        });
      }
    });
  };
  // const saveArticleAsDraft = (event) => {
  //   event.preventDefault();
  //   const localStorageDate = JSON.parse(localStorage.getItem("user"));
  //   let formData = new FormData();
  //   formData.append("title", formState.inputs.title.value);
  //   formData.append("shortName", formState.inputs.shortName.value);
  //   formData.append("description", formState.inputs.description.value);
  //   formData.append("categoryID", articleCategory);
  //   formData.append("cover", articleCover);
  //   formData.append("body", articleBody);

  //   fetch(`http://localhost:4000/v1/articles/draft`, {
  //     method: "POST",
  //     headers: {
  //       Authorization: `Bearer ${localStorageDate.token}`,
  //     },
  //     body: formData,
  //   }).then((res) => {
  //     if (res.ok) {
  //       swal({
  //         title: "مقاله جدید با موفقیت پیش نویس شد",
  //         icon: "success",
  //         buttons: "اوکی",
  //       }).then(() => {
  //         getAllArticles();
  //       });
  //     }
  //   });
  // };
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
          افزودن مقاله
        </Button>
        <Button
          className={`border-zinc-700 text-zinc-500  rounded-md border-2 p-2 px-4 text-center text-sm transition-all hover:bg-transparent hover:border-orange-300 hover:text-orange-300 font-Dana flex items-center gap-2 ${
            pageHandle === "list" && "!border-orange-300 !text-orange-300"
          }`}
          onClick={() => setPageHanler("list")}
          icon={<MdViewList className="text-lg" />}
        >
          لیست مقاله ها
        </Button>
      </div>
      {pageHandle === "list" && (
        <div className="p-2">
          <p className="font-MorabbaBold text-xl dark:text-orange-200 text-gray-700 border-b dark:border-zinc-300 border-orange-300  py-2 my-2">
            لیست مقاله ها
          </p>
          <Table
            th={[
              "ردیف",
              "عنوان",
              "لینک",
              "نویسنده",
              "وضعیت",
              " مشاهده ",
              "کنترل",
            ]}
          >
            {articles.map((article, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{article.title}</td>
                <td>{article.shortName}</td>
                <td>{article.creator.name}</td>
                <td>{article.publish === 1 ? "منتشر شده" : "پیش نویس"} </td>
                <td>
                  <Button className="group relative border-2 border-zinc-400 p-2 rounded-md hover:border-orange-300 transition-all">
                    <HiOutlineEye className="text-zinc-500 text-lg hover:text-orange-300 group-hover:text-orange-300 dark:text-zinc-300" />
                    <span className="absolute -top-full -right-full hidden bg-white p-1 text-sm rounded-lg border border-zinc-500 group-hover:block dark:bg-zinc-700 ">
                      مشاهده
                    </span>
                  </Button>
                </td>
                <td>
                  <Button
                    onClick={() => removeArticle(article._id)}
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
                </td>
              </tr>
            ))}
          </Table>
        </div>
      )}
      {pageHandle === "form" && (
        <div className="p-2">
          <p className="font-MorabbaBold text-xl dark:text-orange-200 text-gray-700 border-b dark:border-zinc-300 border-orange-300  py-2 my-2">
            افزودن مقاله جدید
          </p>
          <form action="" className="p-2">
            <div className="row lg:flex lg:items-center gap-5 space-y-5 lg:space-y-0">
              <InputForm
                element="input"
                id="title"
                onInputHandler={onInputHandler}
                lable="عنوان"
                validations={[requiredValidator(), minValidator(3)]}
                className={`lg:w-1/2 h-12 dark:text-gray-200`}
              />
              <InputForm
                element="input"
                id="shortName"
                onInputHandler={onInputHandler}
                lable="url مقاله"
                validations={[requiredValidator(), minValidator(3)]}
                className={`lg:w-1/2 h-12 dark:text-gray-200`}
              />
            </div>
            <div className="row mt-4 space-y-5">
              <InputForm
                element="input"
                id="description"
                onInputHandler={onInputHandler}
                lable="چکیده"
                validations={[requiredValidator(), minValidator(3)]}
                className={`lg:w-full h-28 dark:text-gray-200`}
              />
            </div>
            <div className="row mt-4 space-y-5">
              <label
                htmlFor=""
                className="font-DanaDemiBold  dark:text-orange-200 text-gray-700 border-b dark:border-zinc-300 border-orange-300 "
              >
                محتوا
              </label>
              <textarea
              value={articleBody}
              onChange={(e)=>setArticleBody(e.target.value)}
                lable="توضیحات به صورت کد html وارد شود"
                validations={[requiredValidator(), minValidator(3)]}
                className={`bg-zinc-50 rounded-md p-2 border border-zinc-700 focus:border-2 transition-all dark:bg-zinc-600 dark:text-teal-300  outline-none w-[100%] h-32`}
              ></textarea>
            </div>
            <div className="row mt-4 lg:flex lg:items-center gap-5 space-y-5 lg:space-y-0">
              <div className="flex flex-col lg:w-[33%] space-y-5">
                <label
                  htmlFor=""
                  className="font-DanaDemiBold dark:text-orange-200 text-gray-700 border-b dark:border-zinc-300 border-orange-300 "
                >
                  عکس مقاله
                </label>
                <input
                  type="file"
                  id="cover"  
                  onChange={(e)=>setArticleCover(e.target.files[0])}
                  className={`h-12 bg-zinc-200 rounded-md p-2 dark:bg-transparent dark:border-2 dark:border-orange-300 dark:text-gray-300`}
                />
              </div>
              <div className="flex flex-col lg:w-[33%] space-y-5">
                <label
                  htmlFor=""
                  className="font-DanaDemiBold dark:text-orange-200 text-gray-700 border-b dark:border-zinc-300 border-orange-300 "
                >
                  دسته بندی مقاله
                </label>
                <select
                  onChange={(e) => setArticleCategory(e.target.value)}
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
              <Button onClick={(e)=>createArticle(e)} className="bg-zinc-600 text-orange-200  rounded-2xl border-2 p-2 px-4 text-center text-sm transition-all hover:bg-transparent hover:border-orange-300 dark:hover:border-orange-300 hover:text-orange-300 dark:bg-transparent dark:border-orange-200   font-Dana" >
                افزودن مقاله
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Articles;
