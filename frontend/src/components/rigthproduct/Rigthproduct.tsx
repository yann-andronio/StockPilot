import { Fragment, useState } from "react";
import Navbar from "../navbar/Navbar";
import Rp1 from "../rp1/Rp1";

const Rigthproduct: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Catégorie");

  return (
    <Fragment>
      <div className="navbar w-full">
        <Navbar />
      </div>
      <main className="p-8">
        <div className="selectcategorie flex gap-8 border-b border-gray-300 pb-2 text-gray-600 text-lg font-medium">
          <p
            className={`cursor-pointer pb-2 border-b-2 transition duration-300 ${
              activeTab === "Catégorie"
                ? "border-orange-500 text-orange-500"
                : "border-transparent hover:border-orange-500 hover:text-orange-500"
            }`}
            onClick={() => setActiveTab("Catégorie")}
          >
            Catégorie
          </p>
          <p
            className={`cursor-pointer pb-2 border-b-2 transition duration-300 ${
              activeTab === "Article"
                ? "border-orange-500 text-orange-500"
                : "border-transparent hover:border-orange-500 hover:text-orange-500"
            }`}
            onClick={() => setActiveTab("Article")}
          >
            Article
          </p>
        </div>

        <div className="rp1">
          {activeTab === "Catégorie" ? ( <Rp1 />) : (   <h1 className="text-xl">Bonjour</h1> )}
        </div>
      </main>
    </Fragment>
  );
};

export default Rigthproduct;
