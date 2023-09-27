import React, { useContext, useEffect, useState } from "react";
import Table from "./../../../Components/AdminPanel/Table/Table";
import Button from "./../../../Components/AdminPanel/Input/Button";
import {
  HiOutlineEye,
  HiOutlineCheck,
  HiOutlineChat,
  HiOutlineTrash,
  HiOutlineX,
  HiOutlineLockClosed,
} from "react-icons/hi";
import Swal from "sweetalert2";
import AppContext from "../../../Context/AppContext";
function Comments() {
  const [comments, setComments] = useState([]);
  const appcontext = useContext(AppContext);
  useEffect(() => {
    getAllComments();
  }, []);

  function getAllComments() {
    fetch("http://localhost:4000/v1/comments")
      .then((res) => res.json())
      .then((allComments) => {
        console.log(allComments);
        setComments(allComments);
      });
  }

  const removeComment = (commentID) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));

    Swal.fire({
      title: "آیا از حذف کامنت اطمینان داری؟",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "خیر",
      confirmButtonText: "بله",
      confirmButtonColor: "#f43f5e",
      color: appcontext.isDark ? "#fed7aa" : "",
      background: appcontext.isDark ? "#3f3f46" : "",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/v1/comments/${commentID}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorageData}`,
          },
        }).then((res) => {
          if (res.ok) {
            Swal.fire({
              title: "کامنت موردنظر با موفقیت حذف شد",
              icon: "success",
              confirmButtonColor: "#10b981",
              color: appcontext.isDark ? "#fed7aa" : "",
              background: appcontext.isDark ? "#3f3f46" : "",
            }).then(() => getAllComments());
          }
        });
      }
    });
  };

  const showCommentBody = (commentBody) => {
    Swal.fire({
      text: commentBody,
      color: appcontext.isDark ? "#fed7aa" : "",
      background: appcontext.isDark ? "#3f3f46" : "",
    });
  };

  const banUser = (userID) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    Swal.fire({
      title: "آیا از بن کاربر اطمینان داری؟",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "خیر",
      confirmButtonText: "بله",
      confirmButtonColor: "#f43f5e",
      color: appcontext.isDark ? "#fed7aa" : "",
      background: appcontext.isDark ? "#3f3f46" : "",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/v1/users/ban/${userID}`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorageData}`,
          },
        }).then((res) => {
          if (res.ok) {
            Swal.fire({
              title: "کاربر موردنظر با موفقیت بن شد",
              icon: "success",
              confirmButtonColor: "#10b981",
              color: appcontext.isDark ? "#fed7aa" : "",
            }).then(() => getAllComments());
          } else {
            Swal.fire({
              title: "بن کردن کاربر با مشکلی مواجه شد",
              icon: "error",
              buttons: "اوکی",
            });
          }
        });
      }
    });
  };

  const acceptComment = (commentID) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));

    Swal.fire({
      title: "آیا از پذیرش و انتشار کامنت  اطمینان داری؟",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "خیر",
      confirmButtonText: "بله",
      confirmButtonColor: "#f43f5e",
      color: appcontext.isDark ? "#fed7aa" : "",
      background: appcontext.isDark ? "#3f3f46" : "",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/v1/comments/accept/${commentID}`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorageData}`,
          },
        }).then((res) => {
          console.log(res);
          if (res.ok) {
            Swal.fire({
              title: "کامنت موردنظر با موفقیت منتشر شد",
              icon: "success",
              confirmButtonColor: "#10b981",
              color: appcontext.isDark ? "#fed7aa" : "",
            }).then(() => {
              getAllComments();
            });
          }
        });
      }
    });
  };

  const rejectComment = (commentID) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    Swal.fire({
      title: "آیا از رد کامنت اطمینان داری؟",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "خیر",
      confirmButtonText: "بله",
      confirmButtonColor: "#f43f5e",
      color: appcontext.isDark ? "#fed7aa" : "",
      background: appcontext.isDark ? "#3f3f46" : "",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/v1/comments/reject/${commentID}`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorageData}`,
          },
        }).then((res) => {
          console.log(res);
          if (res.ok) {
            Swal.fire({
              title: "کامنت موردنظر با موفقیت رد شد",
              icon: "success",
              confirmButtonColor: "#10b981",
              color: appcontext.isDark ? "#fed7aa" : "",
            }).then(() => {
              getAllComments();
            });
          }
        });
      }
    });
  };

  const answerToComment = (commentID) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    Swal.fire({
      title: "پاسخ به کامنت",
      input: "text",
      confirmButtonColor: "#10b981",
      color: appcontext.isDark ? "#fed7aa" : "",
      showConfirmButton: true,
    }).then((answerText) => {
      if (answerText.isConfirmed) {
        console.log(answerText.value);
        const commentAnswer = {
          body: answerText.value,
        };
        fetch(`http://localhost:4000/v1/comments/answer/${commentID}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorageData}`,
          },
          body: JSON.stringify(commentAnswer),
        }).then((res) => {
          console.log(res);
          if (res.ok) {
            Swal.fire({
              title: "پاسخ موردنظر با موفقیت ثبت شد",
              icon: "success",
              confirmButtonColor: "#10b981",
              color: appcontext.isDark ? "#fed7aa" : "",
              background: appcontext.isDark ? "#3f3f46" : "",
            }).then(() => {
              getAllComments();
            });
          } else {
            Swal.fire({
              title: "پاسخ دادن به کاربر با مشکلی مواجه شد",
              icon: "error",
              buttons: "اوکی",
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
          کامنت های کاربران
        </p>
        <Table
          th={[
            "وضعیت",
            "ردیف",
            "کاربر",
            "محصول",
            "مشاهده",
            "تایید یا رد",
            "پاسخ",
            "کنترل",
          ]}
        >
          {comments?.map((comment, index) => (
            <tr>
              <td>
                <div className="flex items-center justify-center">
                  <HiOutlineCheck
                    className={`text-red-500 text-lg border-2 border-red-500 rounded-full ${
                      comment.answer && "text-teal-500 border-teal-500"
                    }`}
                  />
                </div>
              </td>
              <td> {index + 1}</td>
              <td>{comment.creator.name}</td>
              <td>{comment.course}</td>
              <td>
                <Button
                  onClick={() => showCommentBody(comment.body)}
                  className="group border-2 border-zinc-400 p-2 rounded-md hover:border-orange-300 transition-all"
                >
                  <HiOutlineEye className="text-zinc-500 text-lg hover:text-orange-300 group-hover:text-orange-300 dark:text-zinc-300" />
                </Button>
              </td>
              <td>
                <Button
                  onClick={() => acceptComment(comment._id)}
                  className="group border-2 border-zinc-400 p-2 rounded-md hover:border-teal-500 transition-all"
                >
                  <HiOutlineCheck className="text-zinc-500 text-lg hover:text-orange-300 group-hover:text-teal-500 dark:text-zinc-300" />
                </Button>
                <Button
                  onClick={() => rejectComment(comment._id)}
                  className="group  border-2 border-zinc-400 p-2 rounded-md hover:border-rose-500 transition-all"
                >
                  <HiOutlineX className="text-zinc-500 text-lg hover:text-orange-300 group-hover:text-rose-500 dark:text-zinc-300" />
                </Button>
              </td>
              <td>
                <Button
                  onClick={() => answerToComment(comment._id)}
                  className="group border-2 border-zinc-400 p-2 rounded-md hover:border-orange-300 transition-all"
                >
                  <HiOutlineChat className="text-zinc-500 text-lg hover:text-orange-300 group-hover:text-orange-300 dark:text-zinc-300" />
                </Button>
              </td>
              <td>
                <Button
                  onClick={() => removeComment(comment._id)}
                  className="group relative border-2 border-zinc-400 p-2 rounded-md hover:border-rose-500 transition-all"
                >
                  <HiOutlineTrash className="text-zinc-500 text-lg hover:text-orange-300 group-hover:text-rose-500 dark:text-zinc-300" />
                  <span className="absolute -top-full -right-full hidden bg-white p-1 text-sm rounded-lg border border-zinc-500 group-hover:block dark:bg-zinc-700 ">
                    حذف
                  </span>
                </Button>
                <Button
                  onClick={() => banUser(comment.creator._id)}
                  className="group relative border-2 border-zinc-400 p-2 rounded-md hover:border-rose-500 transition-all"
                >
                  <HiOutlineLockClosed className="text-zinc-500 text-lg  group-hover:text-rose-500 dark:text-zinc-300" />
                  <span className="w-28 absolute -top-full -right-full hidden bg-white p-1 text-sm rounded-lg border border-zinc-500 group-hover:block dark:bg-zinc-700 ">
                    بن کردن کاربر
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

export default Comments;
