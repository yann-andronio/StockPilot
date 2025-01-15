import { FaTimes, FaSave } from "react-icons/fa";
import { Fragment } from "react";

const Addcategoriemod: React.FC<{
  setAddcategoriemodule: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setAddcategoriemodule }) => {
  return (
    <Fragment>
      <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 sm:w-96 relative">
       
          {/* <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            onClick={() => setAddcategoriemodule(false)}
          >
            <FaTimes size={20} />
          </button> */}

        
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Ajouter une catégorie
          </h2>

         
          <form>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Nom de la catégorie
              </label>
              <input
                type="text"
                name="name"
                placeholder="Entrez le nom de la catégorie"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Entrez une description pour la catégorie"
                rows={4}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <button
                type="button"
                className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
                onClick={() => setAddcategoriemodule(false)}
              >
                <FaTimes />
                Annuler
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 bg-[#8E44AD]  text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                <FaSave />
                Sauvegarder
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Addcategoriemod;
