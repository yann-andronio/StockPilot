import { Fragment, useEffect, useState } from "react";
import {
  FaBox,
  FaMoneyBill,
  FaPencilAlt,
  FaTrashAlt,
  
} from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";

const Cardarticle: React.FC<{
  searchArticle: string;
}> = ({ searchArticle }) => {
  const [articles] = useState([
    {
      name: "Air Jordan",
      category: "Chaussures",
      price: "200 000",
      pieces: "150",
      image: "1",
    },
    {
      name: "Samsung Galaxy",
      category: "Smartphone",
      price: "1 500 000",
      pieces: "20",
      image: "2",
    },
    {
      name: "Tee-shirt Nike",
      category: "Tee-shirt",
      price: "50 000",
      pieces: "780",
      image: "3",
    },
    {
      name: "MacBook Pro",
      category: "Ordinateur",
      price: "3 000 000",
      pieces: "24",
      image: "1",
    },
    {
      name: "Casquette Adidas",
      category: "Accessoire",
      price: "30 000",
      pieces: "72",
      image: "2",
    },
    {
      name: "Baskets Puma",
      category: "Chaussures",
      price: "250 000",
      pieces: "130",
      image: "3",
    },
  ]);

  const [filteredArticles, setFilteredArticles] = useState(articles);

  useEffect(() => {
    const result = articles.filter((article) =>
      article.name.toLowerCase().includes(searchArticle.toLowerCase())
    );
    setFilteredArticles(searchArticle === "" ? [...articles] : [...result]);
  }, [searchArticle, articles]);

  return (
    <Fragment>
      <div className="cardsearch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-6">
        {filteredArticles.length === 0 ? (
          <div className="text-center text-gray-500 col-span-full">
            Aucun article trouvé
          </div>
        ) : (
          filteredArticles.map((article, index) => (
            <div
              key={index}
              className="card bg-white shadow-md rounded-lg p-4 flex flex-col gap-4"
            >
              <img
                src={`./image/${article.image}.jpg`}
                alt={article.name}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h2 className="text-lg font-semibold text-gray-800">
                {article.name}
              </h2>
              <div className="flex items-center gap-2 text-gray-600 pb-3  border-[#E6E6FA] border-b-2">
                <TbPointFilled className="text-purple-500" color="#4B0082" />
                <span>{article.category}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FaBox className="text-blue-500" />
                <span>{article.pieces} pièces</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FaMoneyBill className="text-green-500" />
                <span>{article.price} Ar</span>
              </div>
              <div className="flex gap-4 mt-auto">
                <button className="p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300">
                  <FaPencilAlt size={15} />
                </button>
                <button className="p-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-300">
                  <FaTrashAlt size={15} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </Fragment>
  );
};

export default Cardarticle;
