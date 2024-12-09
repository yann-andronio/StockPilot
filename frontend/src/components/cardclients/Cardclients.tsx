import { Fragment, useEffect, useState } from "react";
import { FaPhone, FaMapMarkerAlt, FaEdit, FaTrash } from "react-icons/fa";

const Cardclients: React.FC<{ searchClients: string }> = ({
  searchClients,
}) => {
  const [users] = useState([
    { name: "Yann Andronio", phone: "034 20 578 36", address: "Antananarivo" },
    { name: "Todivelo R.", phone: "034 15 123 45", address: "Mahajanga" },
    { name: "Rakoto Miora", phone: "034 67 890 12", address: "Fianarantsoa" },
    { name: "Razafy Jean", phone: "034 99 876 54", address: "Toamasina" },
    { name: "Andrianina Tiana", phone: "034 11 234 56", address: "Toliara" },
    { name: "Ranaivo Hery", phone: "034 77 543 21", address: "Antsirabe" },
  ]);

  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    const result = users.filter(
      (user) => user.name.toLowerCase().includes(searchClients.toLowerCase())
      // || user.phone.toLowerCase().includes(searchClients.toLowerCase())
    );
    setFilteredUsers(searchClients === "" ? [...users] : [...result]);
    //  setFilteredUsers(searchClients === "" ? users : result);
  }, [searchClients, users]);

  return (
    <Fragment>
      <div className="cardsearch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-6">
        {filteredUsers.length === 0 ? (
          <div className="text-center text-gray-500 col-span-full">
            Aucun utilisateur trouvé
          </div>
        ) : (
          filteredUsers.map((user, index) => (
            <div
              key={index}
              className="card bg-white shadow-md rounded-lg p-6 flex flex-col gap-4"
            >
              <h2 className="text-lg font-semibold text-gray-800">
                {user.name}
              </h2>
              <div className="flex items-center gap-2 text-gray-600">
                <FaPhone className="text-blue-500" />
                <span>{user.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FaMapMarkerAlt className="text-green-500" />
                <span>{user.address}</span>
              </div>
              <div className="flex gap-4 mt-auto">
                <button className="p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300">
                  <FaEdit size={15} />
                </button>
                <button className="p-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-300">
                  <FaTrash size={15} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </Fragment>
  );
};

export default Cardclients;
