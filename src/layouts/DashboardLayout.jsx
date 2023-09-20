import { Link, Outlet } from "react-router-dom";


const DashboardLayout = () => {
    return (
        <div className="flex">
            <div className="w-[30%]">
                <ul>
                    <li>
                        <Link to={`/dashboard`}>Dashboard</Link>
                    </li>
                    <li>
                        <Link to={`/dashboard/profile`}>Profile</Link>
                    </li>
                    <li>
                        <Link to={`/dashboard/editProfile`}>Edit Profile</Link>
                    </li>
                </ul>
            </div>

            <div className="w-[70%]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;