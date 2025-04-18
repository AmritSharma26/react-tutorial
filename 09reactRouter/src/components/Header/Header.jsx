import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header({ setpage }) {
    return (
        <>
            {/* <ul className="flex bg-amber-100 gap-5">
                <li>
                    <a href="#" onClick={() => setpage("Home")}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => setpage("About")}>
                        About
                    </a>
                </li>
            </ul> */}

            <nav className="bg-gray-800 w-full h-15 flex items-center justify-between px-15">
                <div id="logo">
                    <Link to={"/"} className="">
                        <img
                            src="https://img.freepik.com/free-vector/abstract-logo-flame-shape_1043-44.jpg?t=st=1742571876~exp=1742575476~hmac=c31bcfeedd6cfb4b6042d317c34502702b4b7afb241a24672cfba46f5cfaf7a9&w=826"
                            alt="Logo"
                            className="h-10 rounded-full"
                        />
                    </Link>
                </div>
                <ul className="flex text-white">
                    <NavLink
                        to={"/"}
                        className={({ isActive }) =>
                            `hover:text-blue-300 h-15 leading-15 px-5 ${
                                isActive
                                    ? "bg-gradient-to-t from-white/10 to-gray-800 "
                                    : "bg-none"
                            }`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to={"/About"}
                        className={({ isActive }) =>
                            `hover:text-blue-300 h-15 leading-15 px-5 ${
                                isActive
                                    ? "bg-gradient-to-t from-white/10 to-gray-800 "
                                    : "bg-none"
                            }`
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to={"/Contact"}
                        className={({ isActive }) =>
                            `hover:text-blue-300 h-15 leading-15 px-5 ${
                                isActive
                                    ? "bg-gradient-to-t from-white/10 to-gray-800 "
                                    : "bg-none"
                            }`
                        }
                    >
                        Contact
                    </NavLink>
                    <NavLink
                        to={"/Github"}
                        className={({ isActive }) =>
                            `hover:text-blue-300 h-15 leading-15 px-5 ${
                                isActive
                                    ? "bg-gradient-to-t from-white/10 to-gray-800 "
                                    : "bg-none"
                            }`
                        }
                    >
                        Github
                    </NavLink>
                </ul>
                <div id="btn-container" className="text-white">
                    <Link
                        to={"#"}
                        className="px-4 border border-white rounded-2xl py-1 mx-4 cursor-pointer"
                    >
                        <button className=" cursor-pointer">Log in</button>
                    </Link>
                    <Link
                        to={"#"}
                        className="px-4 bg-blue-800 rounded-2xl py-1 mx-4 cursor-pointer"
                    >
                        <button className=" cursor-pointer">Get Started</button>
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default Header;
