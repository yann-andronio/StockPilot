import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaTimes,
  FaSave,
  FaUser,
  FaBox,
  FaShoppingCart,
} from "react-icons/fa";
import { Fragment } from "react";

const Addcomandemod: React.FC<{
  setAddcommandemodule: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setAddcommandemodule }) => {
  const notifySuccess = () => toast.success("Commande ajoutée avec succès !");
  const notifyError = (message: string) => toast.error(message);

  const clients = [
    { id: 1, name: "Alice Dupont" },
    { id: 2, name: "Jean Martin" },
    { id: 3, name: "Marie Curie" },
  ];

  const articles = [
    { id: 1, name: "Ordinateur portable" },
    { id: 2, name: "Smartphone" },
    { id: 3, name: "Casque audio" },
  ];

  const ValidationSchema = yup.object({
    client: yup.string().required("Le client est requis."),
    article: yup.string().required("L'article est requis."),
    quantity: yup
      .number()
      .typeError("La quantité doit être un nombre.")
      .positive("La quantité doit être supérieure à 0.")
      .integer("La quantité doit être un nombre entier.")
      .required("La quantité est requise."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(ValidationSchema),
  });

  const onSubmit = (data: FieldValues) => {
    axios
      .post("url/api/commandes", data)
      .then(() => {
        notifySuccess();
        reset();
      })
      .catch((error) => {
        notifyError("Erreur lors de l'ajout de la commande : " + error.message);
      });
  };

  return (
    <Fragment>
      <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 sm:w-96 relative">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Ajouter une commande
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Nom du client
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg p-2">
                <FaUser className="text-gray-400 mr-2" />
                <select
                  className="flex-1 focus:outline-none focus:ring-0"
                  {...register("client")}
                >
                  <option value="">Sélectionnez un client</option>
                  {clients.map((client) => (
                    <option key={client.id} value={client.name}>
                      {client.name}
                    </option>
                  ))}
                </select>
              </div>
              {errors.client && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.client.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Article
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg p-2">
                <FaBox className="text-gray-400 mr-2" />
                <select
                  className="flex-1 focus:outline-none focus:ring-0"
                  {...register("article")}
                >
                  <option value="">Sélectionnez un article</option>
                  {articles.map((article) => (
                    <option key={article.id} value={article.name}>
                      {article.name}
                    </option>
                  ))}
                </select>
              </div>
              {errors.article && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.article.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Quantité
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg p-2">
                <FaShoppingCart className="text-gray-400 mr-2" />
                <input
                  type="number"
                  placeholder="Entrez la quantité"
                  className="flex-1 focus:outline-none focus:ring-0"
                  {...register("quantity")}
                />
              </div>
              {errors.quantity && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.quantity.message}
                </p>
              )}
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <button
                type="button"
                className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
                onClick={() => setAddcommandemodule(false)}
              >
                <FaTimes />
                Annuler
              </button>

              <button
                type="submit"
                className="flex items-center gap-2 bg-[#8E44AD] text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300"
              >
                <FaSave />
                Sauvegarder
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default Addcomandemod;
