import { Fragment } from "react/jsx-runtime";
import Navbar from "../navbar/Navbar";
import Cardcommande from "../cardcommande/Cardcommande";
import Searchlistcommande from "../searchlistcommande/Searchlistcommande";
import Tablesearchcardcommand from "../tablesearchcardcommand/Tablesearchcardcommand";
import { useState } from "react";
import Addcomandemod from "../addcomandemodule/Addcomandemod";

const Rigthcommande: React.FC = () => {
  const [searchCommande, setSearchClients] = useState("");
  const [addcommandemodule, setAddcommandemodule] = useState(false);

  const handleSearchCommande = (dataclients: string) => {
    setSearchClients(dataclients);
  };
  return (
    <Fragment>
      <div className="navbar w-full">
        <Navbar />
      </div>
      <main className="p-8">
        <Cardcommande />
        <div className="searchcommand p-3">
          <Searchlistcommande onSearch={handleSearchCommande} setAddcommandemodule={setAddcommandemodule}   />
        </div>
        <div className="searchcommand mt-4 p-3">
          <Tablesearchcardcommand searchCommande={searchCommande} />
        </div>

        <div className="addcommandemodule">
          {addcommandemodule && (
            <Addcomandemod setAddcommandemodule={setAddcommandemodule} />
          )}
        </div>
      </main>
    </Fragment>
  );
};

export default Rigthcommande;
