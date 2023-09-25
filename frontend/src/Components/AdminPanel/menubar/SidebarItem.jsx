import React from "react";
import {NavLink} from "react-router-dom";

function SidebarItem({title, toroute, icon}) {
    return (
        <NavLink to={toroute}
                 className={link => link.isActive ? "p-2.5 mt-3 flex items-center rounded-md rounded-l-full px-4 bg-orange-200 dark:bg-opacity-90 dark:text-gray-800 text-gray-500" : "p-2.5 mt-3 flex items-center rounded-md rounded-l-full px-4 duration-300 cursor-pointer hover:bg-zinc-600 hover:text-orange-300"}>
            <span className="text-xl">{icon}</span>
            <span class="text-[15px] mr-2  font-bold">{title}</span>
        </NavLink>
    );
}

export default SidebarItem;
