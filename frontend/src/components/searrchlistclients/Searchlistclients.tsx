import { Fragment } from "react/jsx-runtime";
import { FaUsers } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";

const Searchlistclients: React.FC = () => {
  return (
    <Fragment>
      <div className="boxparents bg-white w-full rounded-sm flex justify-between     px-3 py-3">
        <div className="boxlogoandname flex  gap-4 items-center">
          <div className="logo p-2 rounded-md bg-[#E6E6FA] ">
            <FaUsers size={25} color="#8E44AD" />
          </div>
          <h1 className="text-xl font-normal">Listes clients</h1>
        </div>

        <div className="searchandadd flex gap-5 justify-center rounded-md items-center ">
          <div className="search flex gap-4 p-2 bg-[#E6E6FA] ">
            <IoSearchSharp size={25} />
            <input
              type="text"
              placeholder="Recherche..."
              className="focus:outline-none   bg-[#E6E6FA]"
            />
          </div>

          <button className="text-white px-10 py-2 rounded-md bg-[#8E44AD]">
            Ajouter client
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Searchlistclients;
