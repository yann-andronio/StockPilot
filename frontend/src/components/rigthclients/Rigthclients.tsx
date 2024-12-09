import { Fragment } from "react/jsx-runtime";
import Navbar from "../navbar/Navbar";
import Searchlistclients from "../searrchlistclients/Searchlistclients";

const Rigthclients: React.FC = () => {
  return (
    <Fragment>
      <div className="navbar w-full">
        <Navbar />
      </div>
      <main className="p-8">
        <Searchlistclients/>
      </main>
    </Fragment>
  );
};

export default Rigthclients;
