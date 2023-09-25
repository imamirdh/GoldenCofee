import React from "react";
import Button from "./../../../Components/AdminPanel/Input/Button"
import Table from "./../../../Components/AdminPanel/Table/Table";
import {
  HiOutlineEye,
  HiOutlineCheck,
  HiOutlineChat,
  HiOutlineTrash,
  HiOutlinePencil,
  HiOutlineLockClosed,
} from "react-icons/hi";
function Message() {
  return (
    <>
      <div className="p-2">
        <p className="font-MorabbaBold text-xl dark:text-orange-200 text-gray-700 border-b dark:border-zinc-300 border-orange-300  py-2 my-2">
          پیغام های کاربران
        </p>
        <Table
          th={[
            "ردیف",
            "نام و نام خانوادگی",
            "ایمیل",
            "شماره تماس",
            "مشاهده",
            "پاسخ",
            "حذف",
          ]}
        >
          <tr>
            <td>8585</td>
            <td>امیررضا</td>
            <td>قهوه ترک</td>
            <td>قهوه ترک</td>
            <td>
              <Button className="group border-2 border-zinc-400 p-2 rounded-md hover:border-orange-300 transition-all">
                <HiOutlineEye className="text-zinc-500 text-lg hover:text-orange-300 group-hover:text-orange-300 dark:text-zinc-300" />
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
            </td>
          </tr>
        </Table>
      </div>
    </>
  );
}

export default Message;

