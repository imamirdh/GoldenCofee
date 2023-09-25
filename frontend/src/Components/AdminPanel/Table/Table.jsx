import React from "react";

export default function Table(props) {
  return (
    <>
      <table className="lg:w-full w-[900px] overflow-hidden rounded-xl text-center font-Dana">
        <thead className="h-16 bg-zinc-500 dark:bg-zinc-700 text-orange-200 rounded-lg overflow-hidden font-DanaMedium">
          {props.th.map((td) => (
            <td>{td}</td>
          ))}
        </thead>
        <tbody className="[&>*:nth-child(even)]:bg-zinc-100 child:h-14 dark:child:bg-zinc-600 dark:[&>*:nth-child(even)]:bg-zinc-500 dark:[&>*:nth-child(even)]:bg-opacity-70 dark:child:text-gray-100">
          {props.children}
        </tbody>
      </table>
    </>
  );
}
