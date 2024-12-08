import { Fragment } from "react/jsx-runtime"
import Left from "../../components/left/Left"
import Navbar from "../../components/navbar/Navbar"

const Profil :React.FC = ()=>{
return (
    <Fragment>
        <div className="parents flex h-screen">
        <div className="Left bg-[#4B0082]  p-7  " >
            <Left/>
        </div>

        <div className="Rigth bg-blue-400 w-[100%] " >profil ty
            <Navbar/>
        </div>
        </div>
       
    </Fragment>
)
}

export default Profil