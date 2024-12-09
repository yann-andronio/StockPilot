import { Fragment } from "react/jsx-runtime";

const Editingprofil: React.FC = () => {
  return (
    <Fragment>
      <main className=" bg-gray-50 flex items-center justify-center">
        <div className="edit flex flex-col justify-center items-center gap-6 bg-white p-8 rounded-lg shadow-lg py-9 ">
          <div className="sary">
            <div className="h-40 w-40 rounded-full bg-yellow-300 flex items-center justify-center text-white text-2xl font-bold">
              Avatar
            </div>
          </div>

          <div className="btneditinfo flex flex-col gap-4 w-full">
            <button className="px-8 border border-[#E6E6FA] text-gray-700 py-2 rounded-sm font-medium  hover:bg-gray-200 transition duration-300">
              Changer mot de passe
            </button>
            <button className="px-8 border border-[#E6E6FA] text-gray-700 py-2 rounded-sm font-medium  hover:bg-gray-200 transition duration-300">
              Modifier profil
            </button>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Editingprofil;
