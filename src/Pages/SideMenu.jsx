// import {  NavLink, } from "react-router"
import MenuLink from "./MenuLink";
function SideMenu() {
  return (
    <div className="w-80 h-screen p-5  bg-slate-900 text-white">
      <h1 className="text-3xl  mb-5">Admin Panel</h1>

      <div className="flex flex-col gap-2">
        <MenuLink to={"/"}> Dashboard </MenuLink>
        <MenuLink to={"/posts"}> Posts </MenuLink>
        <MenuLink to={"/todos"}> Todos </MenuLink>
        <MenuLink to={"/users"}> Users </MenuLink>
        <MenuLink to={"/comments"}> Comments </MenuLink>
        <MenuLink to={"/companies"}> Companies </MenuLink>
        <MenuLink to={"/roles"}> Roles </MenuLink>

      </div>
    </div>
  );
}

export default SideMenu;
