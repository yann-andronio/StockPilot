import { Fragment } from "react/jsx-runtime";
import Navbar from "../navbar/Navbar";
import Editingprofil from "../editingprofil/Editingprofil";
import Formulairedeprofil from "../formulairedeprofil/Formulairedeprofil";

const Rigthprofil: React.FC = () => {
  return (
    <Fragment>
      <div className="navbar w-full">
        <Navbar />
      </div>
      <main className="p-8 flex justify-center  gap-8 ">
        <div className="editprofil">
          <Editingprofil />
        </div>

        <div className="infoperso w-3/5">
          <Formulairedeprofil />
        </div>
      </main>
    </Fragment>
  );
};

export default Rigthprofil;
