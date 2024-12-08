import { Fragment } from "react/jsx-runtime"
import Left from "../../components/left/Left"
import Rigthhome from "../../components/rigthhome/Rigthhome"

const Home :React.FC = ()=>{
return (
    <Fragment>
        <div className="parents flex h-screen">
        <div className="Left bg-[#4B0082]  p-7  " >
            <Left/>
        </div>
        <div className="Rigth bg-[#E6E6FA] w-[100%] " >
            <Rigthhome/>
        </div>
        </div>
       
    </Fragment>
)
}

export default Home