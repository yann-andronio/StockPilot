import { Fragment, useState } from "react";
import { FaUsers, FaShoppingCart, FaDollarSign } from "react-icons/fa";

interface CardData {
  title: string;
  value: number;
  icon: JSX.Element;
}

const Cardhome: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([
    {
      title: "Nombre de Clients",
      value: 250,
      icon: <FaUsers size={35} className="text-white" />,
    },
    {
      title: "Nombre de Commandes",
      value: 120,
      icon: <FaShoppingCart size={35} className="text-white"  />,
    },
    {
      title: "Revenu",
      value: 5000,
      icon: <FaDollarSign size={35} className="text-white"  />,
    },
  ]);

  return (
    <Fragment>
      <div className="p-4">
        {/* <h1 className="text-2xl font-bold mb-4">Tableau de bord</h1> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className=" p-4 bg-white shadow rounded-lg"
            >
              <div className="flex justify-between ">
                <h2 className="text-lg font-semibold text-[#30303091]">{card.title}</h2>
                <div className="mr-4  bg-[#8E44AD] p-2 rounded-lg">{card.icon}</div>
              </div>
              <p className="text-4xl font-bold">{card.value}</p>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Cardhome;