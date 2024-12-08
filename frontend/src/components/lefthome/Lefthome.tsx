import { Fragment } from "react/jsx-runtime";
import Dashboard from "../dashboard/Dashboard";

const Lefthome: React.FC = () => {
  return (
    <Fragment>
      <div className="logo flex items-center gap-3 pb-8 border-b-2  border-yellow-300 ">
        <p  className="h-8 w-8 rounded-full bg-yellow-300" ></p>
        <h1 className=" text-xl font-semibold text-white">StockPilot</h1>
      </div>
      <Dashboard/>
    </Fragment>
  );
};

export default Lefthome;
