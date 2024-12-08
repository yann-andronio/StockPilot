import { Fragment } from "react/jsx-runtime"
import Navbar from "../navbar/Navbar"
import Cardhome from "../cardhome/Cardhome"
import Tablederniercmd from "../tablederniercmd/Tablederniercmd"

const Rigthhome :React.FC = ()=>{
return (
    <Fragment>
      <div className="navbar w-full">
        <Navbar/>
      </div>
      <main className="p-8">
        <Cardhome />
        <div className="table w-full p-4">
          <h1 className="text-2xl border-b-2 border-b-[#0000002B] pb-2 mb-6">Dernier commande</h1>
          <Tablederniercmd/>
        </div>

      </main>
       
    </Fragment>
)
}

export default Rigthhome