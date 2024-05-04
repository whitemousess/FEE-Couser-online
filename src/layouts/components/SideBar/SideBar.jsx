import { useContext } from "react";
import { NavLink } from "react-router-dom";
import routes from "~/config/routes";
import { AuthContext } from "~/shared/AuthProvider";

const SIDEBAR_TEACHER = [
  {
    title: "Trang chủ",
    link: routes.homeManager,
  },
  {
    title: "Khóa học",
    link: routes.courseTeacher,
  },
  {
    title: "Khóa học đã bán",
    link: routes.courseSold,
  },
];

const SIDEBAR_ADMIN = [
  {
    title: "Trang chủ",
    link: routes.homeManager,
  },
  {
    title: "Sinh viên",
    link: routes.studentAdmin,
  },
  {
    title: "Giảng viên",
    link: routes.teacherAdmin,
  },
  {
    title: "Khóa học",
    link: routes.courseAdmin,
  },
  {
    title: "Khóa học đã bán",
    link: routes.courseSoldAdmin,
  },
];

function SideBar() {
  const { role } = useContext(AuthContext);
  let sideBarItem = SIDEBAR_TEACHER;

  if (role !== 1) {
    sideBarItem = SIDEBAR_ADMIN;
  }

  return (
    <div className="w-full md:w-1/6 md:border-r flex md:flex-col flex-row md:justify-start justify-center ">
      {sideBarItem.map((data) => (
        <NavLink
          to={data.link}
          className={({ isActive }) =>
            `${
              isActive ? "font-medium bg-primary text-white " : ""
            } px-4 py-3 cursor-pointer hover:bg-primary hover:text-white hover:font-medium`
          }
          key={data.title}
        >
          {data.title}
        </NavLink>
      ))}
    </div>
  );
}

export default SideBar;
