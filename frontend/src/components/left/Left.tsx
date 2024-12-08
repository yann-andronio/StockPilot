import { Fragment } from "react/jsx-runtime";
import Dashboard from "../dashboard/Dashboard";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";

const Lefthome: React.FC = () => {
  const activeBar = useSelector(
    (state: RootState) => state.activeLink.closeBar
  );

  return (
    <Fragment>
      <div
        className={`logo flex items-center gap-3 pb-8 border-b-2  border-[#ffffff] ${
          activeBar ? "" : " w-full"
        }     `}
      >
        <p className="h-8 w-8 rounded-full bg-yellow-300"></p>
        <h1
          className={` ${
            activeBar ? `hidden` : ``
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
