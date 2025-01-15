import { Fragment } from "react/jsx-runtime";
import Navbar from "../navbar/Navbar";
import Searchlistclients from "../searrchlistclients/Searchlistclients";
import Cardclients from "../cardclients/Cardclients";
import { useState } from "react";
import Modifclients from "../modifclients/Modifclients";
import Addclientmod from "../addclientsmodule/Addclientmod";

const Rigthclients: React.FC = () => {
  const [searchClients, setSearchClients] = useState("");
  const [modifmodule, setModifmodule] = useState(false);
  const [addclientmodule, setAddclientmodule] = useState(false);

  const handleSearchClients = (dataclients: string) => {
    setSearchClients(dataclients);
  };

  return (
    <Fragment>
      <div className="navbar w-full">
        <Navbar />
      </div>
      <main className="p-12">
        <Searchlistclients onSearch={handleSearchClients} setAddclientmodule={setAddclientmodule} /> 

        <div className="cardclient mt-8">
          <Cardclients
            searchClients={searchClients}
            Modifmodule={modifmodule}
            setModifmodule={setModifmodule}
          />
        </div>

        <div className="modifclients">
          {modifmodule && <Modifclients setModifmodule={setModifmodule} />}
        </div>
        <div className="addclientsmodule">
          {addclientmodule && <Addclientmod setAddclientmodule={setAddclientmodule} />}
        </div>
      </main>
    </Fragment>
  );
};

export default Rigthclients;
