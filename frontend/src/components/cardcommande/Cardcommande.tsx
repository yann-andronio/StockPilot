import { Fragment, useState } from "react";
import { FaUsers, FaShoppingCart,  } from "react-icons/fa";

interface CardData {
  title: string;
  value: number;
  icon: JSX.Element;
}

const Cardcommande: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([
    {
        title: "Nombre de Commandes",
      value: 250,
      icon: <FaUsers size={35} className="text-white" />,
    },
    {
      title: "Total du Commandes",
      value: 120,
      icon: <FaShoppingCart size={35} className="text-white"  />,
    },
  
  ]);

  return (
    <Fragment>
      <div className="p-4">
        {/* <h1 className="text-2xl font-bold mb-4">Tableau de bord</h1> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className={` p-4  shadow rounded-lg ${card.title === "Total du Commandes" ? 'bg-[#A3E4D7]' : 'bg-white'}`}
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

export default Cardcommande;
