import React from "react";
import Table from "./../../../Components/AdminPanel/Table/Table";
import Button from "./../../../Components/AdminPanel/Input/Button"
import {
  HiOutlineEye,
  HiOutlineCheck,
  HiOutlineChat,
  HiOutlineTrash,
  HiOutlinePencil,
  HiOutlineLockClosed,
} from "react-icons/hi";
function Comments() {
  return (
    <>
      <div className="p-2">
        <p className="font-MorabbaBold text-xl dark:text-orange-200 text-gray-700 border-b dark:border-zinc-300 border-orange-300  py-2 my-2">
          کامنت های کاربران
        </p>
        <Table
          th={[
            "شناسه",
            "کاربر",
            "محصول",
            "مشاهده",
            "تایید یا رد",
            "پاسخ",
            "کنترل",
          ]}
        >
          <tr>
            <td>8585</td>
            <td>امیررضا</td>
            <td>قهوه ترک</td>
            <td>
              <Button className="group border-2 border-zinc-400 p-2 rounded-md hover:border-orange-300 transition-all">
                <HiOutlineEye className="text-zinc-500 text-lg hover:text-orange-300 group-hover:text-orange-300 dark:text-zinc-300" />
              </Button>
            </td>
            <td>
              <Button className="group border-2 border-zinc-400 p-2 rounded-md hover:border-teal-500 transition-all">
                <HiOutlineCheck className="text-zinc-500 text-lg hover:text-orange-300 group-hover:text-teal-500 dark:text-zinc-300" />
              </Button>
            </td>
            <td>
              <Button className="group border-2 border-zinc-400 p-2 rounded-md hover:border-orange-300 transition-all">
                <HiOutlineChat className="text-zinc-500 text-lg hover:text-orange-300 group-hover:text-orange-300 dark:text-zinc-300" />
              </Button>
            </td>
            <td>
              <Button className="group relative border-2 border-zinc-400 p-2 rounded-md hover:border-rose-500 transition-all">
                <HiOutlineTrash className="text-zinc-500 text-lg hover:text-orange-300 group-hover:text-rose-500 dark:text-zinc-300" />
                <span className="absolute -top-full -right-full hidden bg-white p-1 text-sm rounded-lg border border-zinc-500 group-hover:block dark:bg-zinc-700 ">حذف</span>
              </Button>
              <Button className="group relative border-2 border-zinc-400 p-2 rounded-md hover:border-yellow-500 transition-all">
                <HiOutlinePencil className="text-zinc-500 text-lg hover:text-orange-300 group-hover:text-yellow-500 dark:text-zinc-300" />
                <span className="absolute -top-full -right-full hidden bg-white p-1 text-sm rounded-lg border border-zinc-500 group-hover:block dark:bg-zinc-700 ">ویرایش</span>
              </Button>
              <Button className="group relative border-2 border-zinc-400 p-2 rounded-md hover:border-rose-500 transition-all">
                <HiOutlineLockClosed className="text-zinc-500 text-lg  group-hover:text-rose-500 dark:text-zinc-300" />
                <span className="w-28 absolute -top-full -right-full hidden bg-white p-1 text-sm rounded-lg border border-zinc-500 group-hover:block dark:bg-zinc-700 ">بن کردن کاربر</span>
              </Button>
            </td>
          </tr>
        </Table>
      </div>
    </>
  );
}

export default Comments;
