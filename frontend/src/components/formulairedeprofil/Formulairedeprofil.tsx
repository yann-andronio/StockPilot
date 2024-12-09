import { Fragment } from "react/jsx-runtime";

const Formulairedeprofil: React.FC = () => {
  return (
    <Fragment>
      <form className="p-8 bg-white ">
        <div className="name flex flex-col gap-2 bg-[#E6E6FA]">
            <label htmlFor="name">Nom</label>
            <input type="text" className="bg-[#E6E6FA] border-none focus:border-none" placeholder="Todivelo"></input>
        </div>
      </form>
    </Fragment>
  );
};

export default Formulairedeprofil;
