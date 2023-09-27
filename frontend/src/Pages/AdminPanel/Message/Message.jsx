import React, { useContext, useEffect, useState } from "react";
import Button from "./../../../Components/AdminPanel/Input/Button";
import Table from "./../../../Components/AdminPanel/Table/Table";
import {
  HiOutlineEye,
  HiOutlineCheck,
  HiOutlineChat,
  HiOutlineTrash,
  HiOutlinePencil,
  HiOutlineLockClosed,
} from "react-icons/hi";
import Swal from "sweetalert2";
import AppContext from "../../../Context/AppContext";
function Message() {
  const [contacts, setContacts] = useState([]);
  const appcontext = useContext(AppContext);
  useEffect(() => {
    getAllContacts();
  }, []);

  function getAllContacts() {
    fetch("http://localhost:4000/v1/contact")
      .then((res) => res.json())
      .then((allContacts) => {
        console.log(allContacts);
        setContacts(allContacts);
      });
  }

  const showContactBody = (body) => {
    Swal.fire({
      text: body,
      color: appcontext.isDark ? "#fed7aa" : "",
      background: appcontext.isDark ? "#3f3f46" : "",
    });
  };

  const sendAnwserToUser = (contactEmail) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    Swal.fire({
      title: "پاسخ به پیغام",
      input: "text",
      confirmButtonColor: "#10b981",
      color: appcontext.isDark ? "#fed7aa" : "",
      showConfirmButton: true,
    }).then((value) => {
      if (value.isConfirmed) {
        console.log(value);

        const anwserInfo = {
          email: contactEmail,
          answer: value.value,
        };

        fetch("http://localhost:4000/v1/contact/answer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorageData}`,
          },
          body: JSON.stringify(anwserInfo),
        }).then((res) => {
          console.log(res);
          if (res.ok) {
            getAllContacts();
            return res.json();
          }
        });
      }
    });
  };

  const removeContact = (contactID) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    Swal.fire({
      title: "آیا از حذف  پیغام اطمینان داری؟",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "خیر",
      confirmButtonText: "بله",
      confirmButtonColor: "#f43f5e",
      color: appcontext.isDark ? "#fed7aa" : "",
      background: appcontext.isDark ? "#3f3f46" : "",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/v1/contact/${contactID}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorageData}`,
          },
        }).then((res) => {
          if (res.ok) {
            Swal.fire({
              title: "پیغام  با موفقیت حذف شد",
              icon: "success",
              color: appcontext.isDark ? "#fed7aa" : "",
              background: appcontext.isDark ? "#3f3f46" : "",
              confirmButtonColor: "#10b981",
            }).then(() => {
              getAllContacts();
            });
          }
        });
      }
    });
  };
  return (
    <>
      <div className="p-2">
        <p className="font-MorabbaBold text-xl dark:text-orange-200 text-gray-700 border-b dark:border-zinc-300 border-orange-300  py-2 my-2">
          پیغام های کاربران
        </p>
        <Table
          th={[
            "وضعیت پاسخ",
            "ردیف",
            "نام و نام خانوادگی",
            "ایمیل",
            "شماره تماس",
            "مشاهده",
            "پاسخ",
            "حذف",
          ]}
        >
          {contacts.map((contact , index) => (
            <tr>
              <td>
                <div className="flex items-center justify-center">
                  <HiOutlineCheck
                    className={`text-red-500 text-lg border-2 border-red-500 rounded-full ${
                      contact.answer && "text-teal-500 border-teal-500"
                    }`}
                  />
                </div>
              </td>
              <td>{index + 1}</td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>
                <Button onClick={()=>showContactBody(contact.body)} className="group border-2 border-zinc-400 p-2 rounded-md hover:border-orange-300 transition-all">
                  <HiOutlineEye className="text-zinc-500 text-lg hover:text-orange-300 group-hover:text-orange-300 dark:text-zinc-300" />
                </Button>
              </td>
              <td>
                <Button onClick={()=>sendAnwserToUser(contact.email)} className="group border-2 border-zinc-400 p-2 rounded-md hover:border-orange-300 transition-all">
                  <HiOutlineChat className="text-zinc-500 text-lg hover:text-orange-300 group-hover:text-orange-300 dark:text-zinc-300" />
                </Button>
              </td>
              <td>
                <Button onClick={()=>removeContact(contact._id)} className="group relative border-2 border-zinc-400 p-2 rounded-md hover:border-rose-500 transition-all">
                  <HiOutlineTrash className="text-zinc-500 text-lg hover:text-orange-300 group-hover:text-rose-500 dark:text-zinc-300" />
                  <span className="absolute -top-full -right-full hidden bg-white p-1 text-sm rounded-lg border border-zinc-500 group-hover:block dark:bg-zinc-700 ">
                    حذف
                  </span>
                </Button>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </>
  );
}

export default Message;
