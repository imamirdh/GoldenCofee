import React, { useContext } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import MobileNavbar from "../../Components/Navbar/MobileNavbar";
import FooterComponent from "../../Components/Footer/FooterComponent";
import Input from "../../Components/Input/Input";
import {
  requiredValidator,
  minValidator,
  maxValidator,
  emailValidator,
} from "./../../Validations/rules";
import { useForm } from "../../Components/Hooks/useForm";
import Button from "../../Components/Input/Button";
import AppContext from "../../Context/AppContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
  const appContext = useContext(AppContext);
  const navigate=useNavigate();
  const [formState, onInputHandler] = useForm(
    {
      username: {
        value: "",
        isvalid: false,
      },
      password: {
        value: "",
        isvalid: false,
      },
    },
    false
  );

  const successToast = (msg) => {
    toast.success(`${msg}`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const errorToast = (msg) => {
    toast.error(`${msg}`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const login = (event) => {
    event.preventDefault();
    const userLogin = {
      identifier: formState.inputs.username.value,
      password: formState.inputs.password.value,
    };

    fetch(`http://localhost:4000/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLogin),
    })
      .then((res) => {
        if (res.ok) {
          successToast("با موفقیت لاگین شدید");
          return res.json();
        } else {
          errorToast("نام کاربری با رمز عبور مطابقت ندارد");
        }
      })
      .then((result) => {
        appContext.login({}, result.accessToken);
        navigate("/")
      });
  };
  return (
    <>
      <Navbar />
      <MobileNavbar />
      <div className="container bg-zinc-700 font-Dana">
        <div className="row flex items-center h-[80vh] bg-zinc-400 bg-opacity-50 rounded-2xl">
          <div className="w-1/2 h-full flex flex-col items-center justify-evenly">
            <h1 className="font-MorabbaBold text-orange-200 text-4xl shadow-lg shadow-orange-200 p-4 rounded-lg ">
              ورود به دنیای قهوه
            </h1>
            <form className="flex  flex-col items-center justify-center space-y-5">
              <div className="flex items-center justify-between w-96">
                <label className="text-white text-xl text-bold font-MorabbaMedium">
                  نام کاربری
                </label>
                <Input
                  type="text"
                  placeholder="نام کاربری"
                  id="username"
                  element="input"
                  validations={[
                    requiredValidator,
                    minValidator(5),
                    maxValidator(12),
                  ]}
                  onInputHandler={onInputHandler}
                  className="bg-black text-gray-100  p-3 w-64"
                />
              </div>
              <div className="flex items-center justify-between w-96 ">
                <label className="text-white text-xl text-bold font-MorabbaMedium">
                  رمز عبور
                </label>
                <Input
                  type="text"
                  placeholder="رمز عبور خود را وارد کنید"
                  id="password"
                  element="input"
                  validations={[
                    requiredValidator(),
                    minValidator(5),
                    maxValidator(12),
                  ]}
                  onInputHandler={onInputHandler}
                  className="bg-black text-gray-100 p-3  w-64"
                />
              </div>
              <div className="w-full">
                <Button
                  className={`${
                    !formState.isFormValid
                      ? "border-gray-300 text-gray-300"
                      : "  border-orange-200   text-orange-200  hover:bg-orange-200 hover:text-zinc-700  "
                  } rounded-2xl border-2 py-2 w-full text-lg transition-all`}
                  disabled={!formState.isFormValid}
                  onClick={login}
                >
                  ورود
                </Button>
              </div>
            </form>
          </div>
          <div className="w-px bg-orange-300 h-[90%]"></div>
          <div className="w-1/2 h-full flex flex-col items-center justify-center">
            <div className="w-3/4 space-y-5 flex flex-col">
              <h2 className="text-3xl text-orange-300 font-bold">
                منتظرت بودیم خوش اومدی...!
              </h2>
              <p className="text-white text-start text-lg">
                مخاطب دوست داشتنی من اگه هنوز همراه ما نیستی با زدن دکمه زیر
                میتونی جزئی از خانواده قهوه دوست ما باشی
              </p>
              <Button
                className="bg-orange-200 border-orange-200 text-zinc-700  rounded-2xl border-2 py-2 w-full text-center text-lg transition-all hover:bg-transparent hover:border-orange-200 hover:text-orange-200  "
                to="/register"
              >
                ساخت حساب کاربری
              </Button>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

export default Login;
