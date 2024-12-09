import { Fragment } from "react/jsx-runtime";

const Modifclients: React.FC<{
  setModifmodule: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({  setModifmodule }) => {


  return (
    <Fragment>
      <Fragment>
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Modifier le client</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Nom</label>
                <input
                  type="text"
                  name="name"
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Téléphone</label>
                <input
                  type="text"
                  name="phone"
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Adresse</label>
                <input
                  type="text"
                  name="address"
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                  onClick={() => setModifmodule(false)}
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Sauvegarder
                </button>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    </Fragment>
  );
};

export default Modifclients;
