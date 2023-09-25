
import {
  maxValidator,
  minValidator,
  requiredValidator,
} from "./../../../Validations/rules";
import Button from "./../../../Components/AdminPanel/Input/Button"
import InputForm from "./../../../Components/AdminPanel/Input/Input"
import Table from "./../../../Components/AdminPanel/Table/Table";
import { MdOutlineAddShoppingCart, MdViewList } from "react-icons/md";
import { HiOutlineTrash, HiOutlinePencil, HiOutlineEye } from "react-icons/hi";
import { useForm } from "../../../Hooks/useForm";
import { useState } from "react";
function Articles(props) {
  const [pageHandle, setPageHanler] = useState("list");
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
        value: "",
        isValid: false,
      },
    },
    false
  );
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
            <tr>
              <td>1</td>
              <td>امیررضا</td>
              <td>imamirdh</td>
              <td>imamirdh@gmail.com</td>
              <td>091212345678</td>
              <td>
                <Button className="group relative border-2 border-zinc-400 p-2 rounded-md hover:border-orange-300 transition-all">
                  <HiOutlineEye className="text-zinc-500 text-lg hover:text-orange-300 group-hover:text-orange-300 dark:text-zinc-300" />
                  <span className="absolute -top-full -right-full hidden bg-white p-1 text-sm rounded-lg border border-zinc-500 group-hover:block dark:bg-zinc-700 ">
                    مشاهده
                  </span>
                </Button>
              </td>
              <td>
                <Button className="group relative border-2 border-zinc-400 p-2 rounded-md hover:border-rose-500 transition-all">
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
                id="name"
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
                id="shortName"
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
              <InputForm
                id="name"
                onInputHandler={onInputHandler}
                lable="توضیحات به صورت کد html وارد شود"
                validations={[requiredValidator(), minValidator(3)]}
                className={`w-[100%] h-32`}
              />
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
                  id="name"
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
                  دسته بندی مقاله
                </label>
                <select
                  id="countries"
                  class="bg-gray-50 border-2 border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-orange-300 focus:border-orange-300 block w-full p-2.5 dark:bg-zinc-700 dark:border-orange-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-orange-300"
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <Button className="bg-zinc-600 text-orange-200  rounded-2xl border-2 p-2 px-4 text-center text-sm transition-all hover:bg-transparent hover:border-orange-300 dark:hover:border-orange-300 hover:text-orange-300 dark:bg-transparent dark:border-orange-200   font-Dana">
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
