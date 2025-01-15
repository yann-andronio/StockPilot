import { FieldValues, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import * as yup from "yup";
import axios from "axios";
import { Fragment } from "react/jsx-runtime";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




interface User {
  name: string;
  password: string;
  passwordConfirm: string;
}

const Register: React.FC = () => {
  const [dataUser, setDataUser] = useState<User[]>([]);
  const notify = () => toast("utilisateur poster");

  const ValidationSchema = yup.object({
    name: yup.string().required("Donnez votre nom"),
    password: yup.string().required("Votre mot de passe est obligatoire"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Les mots de passe doivent correspondre")
      .required("La confirmation du mot de passe est requise"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ resolver: yupResolver(ValidationSchema) });

  const onSubmit = (data: FieldValues) => {
    axios
      .post("http://localhost:3000/users", data)
      .then((res) => {
        console.log(res.data);
        setDataUser((prevData) => [...prevData, res.data]);
        notify();
        reset(); 
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi des données :", error);
      });
  };
  

  
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        setDataUser(res.data);
      })
      .catch((error) => {
        console.error("Erreur lors de l'affichage des données :", error);
      });
  }, []);

  return (
    <Fragment>
      <h1 className="text-center text-4xl font-bold text-gray-800 my-8">
        Page d'inscription
      </h1>

      <form
        className="flex justify-center items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Nom
            </label>
            <input
              type="text"
              placeholder="Entrez votre nom"
              className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Mot de Passe
            </label>
            <input
              type="password"
              placeholder="Entrez votre mot de passe"
              className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-600 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Confirmation du Mot de Passe
            </label>
            <input
              type="password"
              placeholder="Confirmez votre mot de passe"
              className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("passwordConfirm")}
            />
            {errors.passwordConfirm && (
              <p className="text-red-600 text-sm mt-1">
                {errors.passwordConfirm.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Envoyer
          </button>
        </div>
      </form>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Utilisateurs enregistrés :
        </h2>
      <div className="mt-8 px-6 grid gap-5 grid-cols-4">
      
        {dataUser.length > 0 ? (
         dataUser.map((user, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-lg shadow-sm mb-2"
          >
            <p className="text-lg font-semibold text-gray-800">
              Nom : {user.name}
            </p>
            <p className="text-sm text-gray-600">
              Mot de Passe : {user.password}
            </p>
            <p className="text-sm text-gray-600">
              Confirmation : {user.passwordConfirm}
            </p>
          </div>
            )
          )
        ) : (
          <p className="text-gray-600">Aucun utilisateur trouvé.</p>
        )}
      </div>

      <ToastContainer />
    </Fragment>
  );
};

export default Register;
