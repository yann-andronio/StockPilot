import { FC, useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const data = [
  {
    client: "Messi",
    product: 'Apple MacBook Pro 17"',
    catégorie: "téléphone",
    unitPrice: "$2999",
    quantity: 1,
    status: "Payé",
  },
  {
    client: "yamal",
    product: "Microsoft Surface Pro",
    catégorie: "ordinateur",
    unitPrice: "$1999",
    quantity: 2,
    status: "Non payé",
  },
  {
    client: "halland",
    product: "Magic Mouse 2",
    catégorie: "chocolat",
    unitPrice: "$99",
    quantity: 1,
    status: "Payé",
  },
];

const Tablesearchcardcommand: FC<{ searchCommande: string }> = ({
  searchCommande,
}) => {
  const [Datacommande] = useState(data);

  const [filteredUsers, setFilteredUsers] = useState(data);

  useEffect(() => {
    const result = data.filter(
      (datacmd) =>
        datacmd.client.toLowerCase().includes(searchCommande.toLowerCase()) ||
        datacmd.product.toLowerCase().includes(searchCommande.toLowerCase()) ||
        datacmd.status.toLowerCase().includes(searchCommande.toLowerCase()) ||
        datacmd.catégorie.toLowerCase().includes(searchCommande.toLowerCase())


    );
    setFilteredUsers(searchCommande === "" ? [...data] : [...result]);
    //  setFilteredUsers(searchClients === "" ? users : result);
  }, [searchCommande, data]);

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
            {filteredUsers.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-4">
                  Aucune commande
                </td>
              </tr>
            ) : (
              filteredUsers.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="px-6 py-4 ">{item.client}</td>
                  <td className="px-6 py-4 flex flex-col  "><p className="font-semibold text-lg">{item.product}</p> <span className="font-extralight">{item.catégorie}</span></td>
                  <td className="px-6 py-4">{item.unitPrice}</td>
                  <td className="px-6 py-4">{item.quantity}</td>
                  <td className="px-6 py-4">{item.status}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-4 mt-auto">
                      <button className="p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300">
                        <FaEdit size={15} />
                      </button>
                      <button className="p-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-300">
                        <FaTrash size={15} />
                      </button>
                      <button className="p-2 text-white bg-green-500 rounded-lg hover:bg-red-600 transition duration-300">
                        <FaArrowRightLong size={15} />
                      </button>
                    </div>
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

export default Tablesearchcardcommand;
