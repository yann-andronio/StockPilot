import { Fragment, useState } from "react";
import Navbar from "../navbar/Navbar";
import Rp1 from "../rp1/Rp1";
import Rp2 from "../rp2/Rp2";

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
                ? "border-[#4B0082] text-[#4B0082]"
                : "border-transparent hover:border-[#4B0082] hover:[#4B0082]"
            }`}
            onClick={() => setActiveTab("Catégorie")}
          >
            Catégorie
          </p>
          <p
            className={`cursor-pointer pb-2 border-b-2 transition duration-300 ${
              activeTab === "Article"
                ? "border-[#4B0082] text-[#4B0082]"
                : "border-transparent hover:border-[#4B0082] hover:text-[#4B0082] "
            }`}
            onClick={() => setActiveTab("Article")}
          >
            Article
          </p>
        </div>

        <div className="rp1">
          {activeTab === "Catégorie" ? <Rp1 /> : <Rp2 />}
        </div>
      </main>
    </Fragment>
  );
};

export default Rigthproduct;
