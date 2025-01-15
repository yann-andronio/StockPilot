import { Fragment } from "react";
import { FaUserPlus, FaShoppingCart } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";

type SearchlistclientsProps = {
  onSearch: (searchCategorie: string) => void;
  setAddcommandemodule: (value: boolean) => void;
};
const Searchlistcommande: React.FC<SearchlistclientsProps> = ({
  onSearch,
  setAddcommandemodule,
}) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <Fragment>
      <div className="boxparents bg-white w-full rounded-lg flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-0 px-4 py-2 shadow-md">
        <div className="boxlogoandname flex gap-4 items-center">
          <div className="logo p-3 rounded-md bg-[#E6E6FA] flex items-center justify-center">
            <FaShoppingCart size={25} color="#8E44AD" />
          </div>
          <h1 className="text-lg sm:text-xl font-semibold text-gray-800">
            Listes Commandes
          </h1>
        </div>

        <div className="searchandadd flex flex-col sm:flex-row gap-4 sm:gap-6 items-center w-full sm:w-auto">
          <div className="search flex items-center gap-2 px-3 py-2 bg-[#E6E6FA] rounded-lg w-full sm:w-auto">
            <IoSearchSharp size={20} className="text-gray-600" />
            <input
              type="text"
              placeholder="Recherche..."
              className="bg-[#E6E6FA] focus:outline-none text-gray-700 w-full sm:w-auto"
              onChange={handleSearchChange}
            />
          </div>

          <button className="text-white bg-[#8E44AD] px-6 py-2 rounded-lg w-full sm:w-auto text-center font-medium flex items-center gap-2 hover:bg-[#732d91] transition duration-300"
           onClick={() => setAddcommandemodule(true)}
          >
            <FaUserPlus size={20} />
            Ajouter Commande
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Searchlistcommande;
