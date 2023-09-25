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
import { useForm } from "../../Hooks/useForm";
import Button from "../../Components/Input/Button";
import AppContext from "../../Context/AppContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function Register() {
  const appContext = useContext(AppContext);
  const navigate = useNavigate();
  const [formState, onInputHandler] = useForm(
    {
      name: {
        value: "",
        isvalid: false,
      },
      username: {
        value: "",
        isvalid: false,
      },
      phone: {
        value: "",
        isvalid: false,
      },
      email: {
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

  const registerUser = (event) => {
    event.preventDefault();
    const userData = {
      name: formState.inputs.name.value,
      username: formState.inputs.username.value,
      email: formState.inputs.email.value,
      phone: formState.inputs.phone.value,
      password: formState.inputs.password.value,
    };
    fetch(`http://localhost:4000/v1/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => {
        if (res.ok) {
          successToast("ثبت نام شما با موفقیت انجام شد");
          return res.json();
        } else {
          errorToast("مقادیر ورودی خود را چک کنید");
        }
      })
      .then((result) => {
        appContext.login(result.user, result.accessToken);
        navigate("/");
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
              <div className="flex items-center justify-between w-[400px]">
                <label className="text-white text-lg text-bold font-MorabbaMedium">
                  نام و نام خانوادگی
                </label>
                <Input
                  type="text"
                  placeholder="نام و نام خانوادگی"
                  id="name"
                  element="input"
                  validations={[
                    requiredValidator,
                    minValidator(5),
                    maxValidator(20),
                  ]}
                  onInputHandler={onInputHandler}
                  className="bg-black text-gray-100  p-3 w-64"
                />
              </div>
              <div className="flex items-center justify-between w-[400px] ">
                <label className="text-white text-lg text-bold font-MorabbaMedium">
                  نام کاربری
                </label>
                <Input
                  type="text"
                  placeholder="نام کاربری"
                  id="username"
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
              <div className="flex items-center justify-between w-[400px] ">
                <label className="text-white text-lg text-bold font-MorabbaMedium">
                  شماره همراه
                </label>
                <Input
                  type="text"
                  placeholder="شماره همراه"
                  id="phone"
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
              <div className="flex items-center justify-between w-[400px] ">
                <label className="text-white text-lg text-bold font-MorabbaMedium">
                  ایمیل
                </label>
                <Input
                  type="text"
                  placeholder="ایمیل"
                  id="email"
                  element="input"
                  validations={[requiredValidator(), emailValidator()]}
                  onInputHandler={onInputHandler}
                  className="bg-black text-gray-100 p-3  w-64"
                />
              </div>
              <div className="flex items-center justify-between w-[400px] ">
                <label className="text-white text-lg text-bold font-MorabbaMedium">
                  رمز عبور
                </label>
                <Input
                  type="text"
                  placeholder="رمز عبور"
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
                  } rounded-2xl border-2 py-2 w-full text-lg transition-all `}
                  disabled={!formState.isFormValid}
                  onClick={registerUser}
                >
                  ثبت نام
                </Button>
              </div>
            </form>
          </div>
          <div className="w-px bg-orange-300 h-[90%]"></div>
          <div className="w-1/2 h-full flex flex-col items-center justify-center">
            <div className="w-3/4 space-y-5 flex flex-col">
              <h2 className="text-3xl text-orange-300 font-bold">
                به به میبینم که عضو جدید دااریم
              </h2>
              <p className="text-white text-start text-lg">
                یه سلام گرررم به تو دوست خوبم خوشحالم که قراره عضو جدید خانواده
                ما بشی اگه قبلا پیش ما بودی میتونی با همون اکانت وارد سایتمون
                بشی فقط با زدن دکمه زیر...
              </p>
              <Button
                className="bg-orange-200 border-orange-200 text-zinc-700  rounded-2xl border-2 py-2 w-full text-center text-lg transition-all hover:bg-transparent hover:border-orange-200 hover:text-orange-200  "
                to="/login"
              >
                ورود به دنیای قهوه
              </Button>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

export default Register;
