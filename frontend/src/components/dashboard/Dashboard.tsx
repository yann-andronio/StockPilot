import { FC, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaUsers, FaBoxOpen, FaShoppingCart } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { setActiveName } from "../../redux/slice/activeLinkSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";

import s from "./Dashboard.module.css";
import { boolean } from "yup";

interface NavItem {
  path: string;
  name: string;
  icon: JSX.Element;
}

const navItems: NavItem[] = [
  {
    path: "/",
    name: "Accueil",
    icon: <RxDashboard size={25} />,
  },
  {
    path: "/profile",
    name: "Profil",
    icon: <FaUser size={25} />,
  },
  {
    path: "/clients",
    name: "Clients",
    icon: <FaUsers size={25} />,
  },
  {
    path: "/products",
    name: "Produits",
    icon: <FaBoxOpen size={25} />,
  },
  {
    path: "/orders",
    name: "Commandes",
    icon: <FaShoppingCart size={25} />,
  },
];

const Dashboard: FC = () => {
  const dispatch = useDispatch();
  const closeBar = useSelector((state: RootState) => state.activeLink.closeBar);

  // trucage de disparition

 

  return (
    <nav className={` ${s.navbar} relative  `}>
      <ul className={`${s.navlist} flex flex-col gap-3 mt-8`}>
        {navItems.map((item, index) => (
          <li key={index} className={``}>
            <NavLink
              to={item.path}
              className={(nav) =>
                `${nav.isActive ? s.active : s.inactive} ` +
                `${closeBar ? s.linkclose : s.link} `
              }
              onClick={() => dispatch(setActiveName(item.name))}
            >
              {item.icon}
              <span
                style={{ transitionDelay: `${index * 1}00ms` }}
                className={` font-normal transition-all duration-500 absolute left-12 ${closeBar && 'opacity-0 translate-x-10 '} `}
              >
                {item.name}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Dashboard;
