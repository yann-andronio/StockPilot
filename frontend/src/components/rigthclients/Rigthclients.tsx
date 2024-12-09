import { Fragment } from "react/jsx-runtime";
import Navbar from "../navbar/Navbar";
import Searchlistclients from "../searrchlistclients/Searchlistclients";
import Cardclients from "../cardclients/Cardclients";
import { useState } from "react";

const Rigthclients: React.FC = () => {
  const [searchClients, setSearchClients] = useState("");

  const handleSearchClients = (dataclients: string) => {
    setSearchClients(dataclients); 
  };

  return (
    <Fragment>
      <div className="navbar w-full">
        <Navbar />
      </div>
      <main className="p-12">
        <Searchlistclients onSearch={handleSearchClients} />

        <div className="cardclient mt-8">
          <Cardclients searchClients={searchClients} />
        </div>
      </main>
    </Fragment>
  );
};

export default Rigthclients;
