import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

const MainLayuot = () => {







    return (
        <div>
            <section className="w-[90%] mx-auto">
                <nav className="flex justify-between py-5 shadow-xl p-2">
                    <div>
                        <h2>Product Deal</h2>
                    </div>
                    <ul className="flex gap-16 ">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-green-400 p-2 rounded-xl" : ""
                                }
                            >
                                Home
                            </NavLink>

                            {/* <a href="/">Home</a> */}
                        </li>
                        <li>
                            <NavLink
                                to="/products"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-green-400 p-2 rounded-xl" : ""
                                }
                            >
                                Products
                            </NavLink>
                            {/* <a href="/products">Products</a> */}
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-green-400 p-2 rounded-xl" : ""
                                }
                            >
                                Dashboard
                            </NavLink>
                            {/* <a href="/dashboard">Dashboard</a> */}
                        </li>
                    </ul>
                </nav>

            </section>
            <div className=" w-[90%] mx-auto min-h-screen">
                <Outlet></Outlet>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default MainLayuot;