import { NavLink } from "react-router";

function MenuLink({ children, to }) {
  return (
    <NavLink
      to={to}
      className={(obj) => {
        return `px-3 py-2 rounded-lg ${obj.isActive ? "bg-blue-700" : ""} `;
      }}
    >
      {children}
    </NavLink>
  );
}

export default MenuLink;
