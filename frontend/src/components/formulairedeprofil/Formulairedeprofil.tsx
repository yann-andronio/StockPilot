import { Fragment } from "react/jsx-runtime";

const Formulairedeprofil: React.FC = () => {
  return (
    <Fragment>
      <form className="p-8 bg-gray-50 rounded-md shadow-lg flex flex-col gap-6 ">
        <h1 className="font-normal text-xl">Information personneles</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2 ">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Nom
            </label>
            <input
              type="text"
              id="name"
              className="p-3 bg-[#E6E6FA] rounded-sm focus:outline-none placeholder-gray-400"
              placeholder="TODIVELO"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="username"
              className="text-sm font-medium text-gray-700"
            >
              Prénom
            </label>
            <input
              type="text"
              id="username"
              className="p-3 bg-[#E6E6FA] rounded-sm focus:outline-none placeholder-gray-400"
              placeholder="Yann Andronio"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="Adresse"
              className="text-sm font-medium text-gray-700"
            >
              Adresse
            </label>
            <input
              type="text"
              id="Adresse"
              className="p-3 bg-[#E6E6FA] rounded-sm focus:outline-none placeholder-gray-400"
              placeholder="Antananarivo"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="profession"
              className="text-sm font-medium text-gray-700"
            >
              Profession
            </label>
            <input
              type="text"
              id="profession"
              className="p-3 bg-[#E6E6FA] rounded-sm focus:outline-none placeholder-gray-400"
              placeholder="Vendeur"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact"
              className="text-sm font-medium text-gray-700"
            >
              Contact
            </label>
            <input
              type="text"
              id="contact"
              className="p-3 bg-[#E6E6FA] rounded-sm focus:outline-none placeholder-gray-400"
              placeholder="034 20 578 36"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="p-3 bg-[#E6E6FA] rounded-sm focus:outline-none placeholder-gray-400"
              placeholder="exemple@email.com"
            />
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default Formulairedeprofil;
