import { Fragment } from "react/jsx-runtime";


const Editingprofil: React.FC = () => {
  return (
    <Fragment>
      <main className="p-8 ">
        <div className="edit flex flex-col justify-center items-center gap-4 bg-white p-6">
          <div className="sary">
            <p className="h-40 w-40 rounded-full bg-yellow-300"></p>
          </div>
          <div className="btneditinfo flex flex-col gap-4">
            <button className="bg-white px-6 py-1 font-normal flex justify-center items-center text-xl border border-[E6E6FA]">
              changer mot de passe
            </button>
            <button className="bg-red-600 px-6 py-1 flex justify-center items-center text-xl">
              modifier profil
            </button>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Editingprofil;
