import { Fragment, useEffect, useState } from "react";
import { FaBox, FaMoneyBill, FaPencilAlt, FaTrashAlt } from "react-icons/fa";

const Cardcatégorie: React.FC<{
  searchCatégorie: string;
}> = ({ searchCatégorie }) => {
  const [categories] = useState([
    { name: "Kiraro", pieces: "150", prix: "200" },
    { name: "Ordinateur", pieces: "20", prix: "300" },
    { name: "Tee-shirt", pieces: "780", prix: "400" },
    { name: "Fiara", pieces: "24", prix: "500" },
    { name: "Andrianina Tiana", pieces: "72", prix: "600" },
    { name: "Ranaivo Hery", pieces: "130", prix: "700" },
  ]);

  const [filteredCategories, setFilteredCategories] = useState(categories);

  useEffect(() => {
    const result = categories.filter((category) =>
      category.name.toLowerCase().includes(searchCatégorie.toLowerCase())
    );
    setFilteredCategories(
      searchCatégorie === "" ? [...categories] : [...result]
    );
  }, [searchCatégorie, categories]);

  return (
    <Fragment>
      <div className="cardsearch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-6">
        {filteredCategories.length === 0 ? (
          <div className="text-center text-gray-500 col-span-full">
            Aucune catégorie trouvée
          </div>
        ) : (
          filteredCategories.map((category, index) => (
            <div
              key={index}
              className="card bg-white shadow-md rounded-lg p-6 flex flex-col gap-4"
            >
              <h2 className="text-lg font-semibold text-gray-800">
                {category.name}
              </h2>
              <div className="flex items-center gap-2 text-gray-600">
                <FaBox className="text-blue-500" />
                <span>{category.pieces} pièces</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FaMoneyBill className="text-green-500" />
                <span>{category.prix} Ar</span>
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

export default Cardcatégorie;
