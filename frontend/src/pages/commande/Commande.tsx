import { Fragment } from "react/jsx-runtime";
import Left from "../../components/left/Left";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import Rigthcommande from "../../components/rigthcommande/Rigthcommande";

const Commande: React.FC = () => {
  const closeBar = useSelector((state: RootState) => state.activeLink.closeBar);

  return (
    <Fragment>
      <div className="parents flex h-screen">
        <div
          className={`bg-[#4B0082] fixed top-0 left-0 min-h-screen flex flex-col items-center p-7  
            ${
              closeBar ? "w-[5rem]" : "w-[16rem]"
            } transition-width  duration-[600ms] ease-in-out`}
        >
          <Left />
        </div>

        <div
          className={`Rigth bg-[#E6E6FA] w-[100%] 
            ${
              closeBar ? "ml-16" : "ml-60"
            } transition-all duration-[600ms] ease-in-out`}
        >
          <Rigthcommande />
        </div>
      </div>
    </Fragment>
  );
};

export default Commande;
