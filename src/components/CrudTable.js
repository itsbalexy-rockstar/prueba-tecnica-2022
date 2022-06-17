import React, { useState } from "react";
import CrudContact from "./CrudContact";

const CrudTable = ({ data, setDataToEdit, deleteContact }) => {
  const [formValues, setFormValues] = useState("");
  const handleChangeSearch = (e) => {
    e.preventDefault();
    setFormValues(e.target.value);
  };
  const filtered = () => {
    if (formValues !== "") {
      data = data.filter(
        (el) => el.name.includes(formValues) || el.number.includes(formValues)
      );
      return data.map((el) => (
        <CrudContact
          setDataToEdit={setDataToEdit}
          deleteContact={deleteContact}
          key={el.id}
          contacto={el}
          className="animate__animated animate__bounce"
        />
      ));
    } else {
      return data.map((el) => (
        <CrudContact
          setDataToEdit={setDataToEdit}
          deleteContact={deleteContact}
          key={el.id}
          contacto={el}
          className="animate__animated animate__bounce"
        />
      ));
    }
  };
  return (
    <>
      <div className="flex my-6 justify-between items-center">
        <h3 className="text-lg font-bold text-cyan-500 mx-4">
          Contactos agregados
        </h3>
        <form action="" className="m-0 flex justify-center items-center">
          <input
            type="text"
            className="w-25 h-4 m-0 shadow-md shadow-cyan-500"
            placeholder="Buscar contacto"
            onChange={handleChangeSearch}
          />
          <button
            type="submit"
            className="text-sm p-0 w-12 h-7 m-0 mx-2 border-none bg-cyan-500 text-white hover:shadow-md hover:shadow-cyan-500 transition-all"
          >
            Buscar
          </button>
        </form>
      </div>
      <table className="shadow-md shadow-cyan-300 mt-5">
        <thead>
          <tr>
            <th className="text-lg">Nombre</th>
            <th>Edad</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-md">
                No has agregado ningún contacto
              </td>
            </tr>
          ) : (
            filtered()
          )}
        </tbody>
      </table>
    </>
  );
};

export default CrudTable;
