import { Fragment } from "react/jsx-runtime";
import Dashboard from "../dashboard/Dashboard";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";

const Lefthome: React.FC = () => {
  const closeBar = useSelector(
    (state: RootState) => state.activeLink.closeBar
  );

  return (
    <Fragment>
      <div
        className={`logo flex items-center gap-3 pb-8 border-b-2  border-[#ffffff] ${
          closeBar ? "" : " w-full"
        }     `}
      >
        <p className="h-8 w-8 rounded-full bg-yellow-300 z-20"></p>
        <h1
          className={` 
            font-normal transition-all duration-[600ms] z-0 absolute left-20 ${closeBar && 'opacity-0 scale-0 '} 
          }  text-xl font-semibold text-white `}
        >
          StockPilot
        </h1>
      </div>
      <Dashboard />
    </Fragment>
  );
};

export default Lefthome;
