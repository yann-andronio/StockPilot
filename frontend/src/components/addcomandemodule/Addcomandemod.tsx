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
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Fragment } from "react";

const Addcomandemod: React.FC<{
    setAddcommandemodule: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setAddcommandemodule }) => {
  const notifySuccess = () => toast.success("Client ajouté avec succès !");
  const notifyError = (message: string) => toast.error(message);

  const ValidationSchema = yup.object({
    name: yup.string().required("Le nom complet est requis."),
    contact: yup
      .string()
      .matches(/^\d+$/, "Le contact doit contenir uniquement des chiffres.")
      .required("Le contact est requis."),
    address: yup.string().required("L'adresse est requise."),
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
      .post("url andefasana new clients", data)
      .then(() => {
        notifySuccess();
        reset();
      })
      .catch((error) => {
        notifyError("Erreur lors de l'ajout du client : " + error.message);
      });
  };

  return (
    <Fragment>
      <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 sm:w-96 relative">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Ajouter un commande
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Nom complet
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg p-2">
                <FaUser className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Entrez le nom et le prénom"
                  className="flex-1 focus:outline-none focus:ring-0"
                  {...register("name")}
                />
              </div>
              {errors.name && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Contact
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg p-2">
                <FaPhone className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Entrez le numéro de téléphone"
                  className="flex-1 focus:outline-none focus:ring-0"
                  {...register("contact")}
                />
              </div>
              {errors.contact && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.contact.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Adresse
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg p-2">
                <FaMapMarkerAlt className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Entrez l'adresse du client"
                  className="flex-1 focus:outline-none focus:ring-0"
                  {...register("address")}
                />
              </div>
              {errors.address && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.address.message}
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
