import { FC, useState } from "react";

const data = [
  {
    client: "Messi",
    product: 'Apple MacBook Pro 17"',
    unitPrice: "$2999",
    quantity: 1,
    status: "Payé",
  },
  {
    client: "yamal",
    product: "Microsoft Surface Pro",
    unitPrice: "$1999",
    quantity: 2,
    status: "Non payé",
  },
  {
    client: "halland",
    product: "Magic Mouse 2",
    unitPrice: "$99",
    quantity: 1,
    status: "Payé",
  },
 
];

const Tablederniercmd: FC = () => {


    const [Dataderniercmd , SetDataDerniercmd] = useState(data)
  const handleDetails = (index: number) => {
    alert(`Détails de la commande #${index + 1}`);
  };

  return (
    <div className="w-full px-4 py-4 lg:px-8 bg-white rounded-lg">
      <h1 className="text-xl pb-4 ">Liste des commandes </h1>
      <div className="relative overflow-x-auto mt-4">
        <table className="w-full text-sm text-left border-collapse">
          <thead className="text-xs bg-[#E6E6FA54]">
            <tr>
              <th className="px-6 py-3 ">Client</th>
              <th className="px-6 py-3 ">Produit</th>
              <th className="px-6 py-3 ">Prix unitaire</th>
              <th className="px-6 py-3 ">Quantité</th>
              <th className="px-6 py-3 ">Status</th>
              <th className="px-6 py-3 ">Action</th>
            </tr>
          </thead>
          <tbody>
          {Dataderniercmd.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-4">
                  Aucune commande
                </td>
              </tr>
            ) : (
                Dataderniercmd.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="px-6 py-4">{item.client}</td>
                  <td className="px-6 py-4">{item.product}</td>
                  <td className="px-6 py-4">{item.unitPrice}</td>
                  <td className="px-6 py-4">{item.quantity}</td>
                  <td className="px-6 py-4">{item.status}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleDetails(index)}
                      className="text-white px-10 py-2 rounded-md bg-[#8E44AD]"
                    >
                      Détails
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tablederniercmd;
