import { NavLink } from "@remix-run/react";
import React from "react";

interface LayoutLinkProps {
  to: string;
  children: React.ReactNode;
}

const LayoutLink = (props: LayoutLinkProps) => {
  const activeStyle =
    "flex items-center px-2 py-2 mb-2 space-x-2 transition-all duration-150 rounded-md hover:bg-zinc-800";
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) =>
        isActive ? `${activeStyle} bg-zinc-800` : activeStyle
      }
    >
      {props.children}
    </NavLink>
  );
};

export default LayoutLink;
