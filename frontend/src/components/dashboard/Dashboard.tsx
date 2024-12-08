import { FC } from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaUsers, FaBoxOpen, FaShoppingCart } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";

import s from "./Dashboard.module.css";

interface NavItem {
  path: string;
  name: string;
  icon: JSX.Element;
}

const navItems: NavItem[] = [
  {
    path: "/home",
    name: "Accueil",
    icon: <RxDashboard size={25} color="white" />,
  },
  {
    path: "/profile",
    name: "Profil",
    icon: <FaUser size={25} color="white" />,
  },
  {
    path: "/clients",
    name: "Clients",
    icon: <FaUsers size={25} color="white" />,
  },
  {
    path: "/products",
    name: "Produits",
    icon: <FaBoxOpen size={25} color="white" />,
  },
  {
    path: "/orders",
    name: "Commandes",
    icon: <FaShoppingCart size={25} color="white" />,
  },
];

const Dashboard: FC = () => {
  return (
    <nav className={` ${s.navbar} `}>
      <ul className={`${s.navlist} flex flex-col gap-3 mt-8`}>
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={(nav) =>
                `${nav.isActive ? s.active : s.Non_active} ${s.link}`
              }
            >
              {item.icon}
              <span className="font-normal text-white">{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Dashboard;
