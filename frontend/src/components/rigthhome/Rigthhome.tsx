import { Fragment } from "react/jsx-runtime"
import Navbar from "../navbar/Navbar"
import Cardhome from "../cardhome/Cardhome"

const Rigthhome :React.FC = ()=>{
return (
    <Fragment>
      <div className="navbar w-full">
        <Navbar/>
      </div>
      <main className="p-8">
        <Cardhome />
      </main>
       
    </Fragment>
)
}

export default Rigthhome