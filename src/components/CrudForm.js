import React, { useState, useEffect } from "react";

const CrudForm = ({
  createContact,
  updateContact,
  dataToEdit,
  setDataToEdit,
}) => {
  const initialForm = {
    id: null,
    name: "",
    age: "",
    number: "",
    birthday: "",
    location: "",
    email: "",
  };

  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //Lo hago con estas validaciones únicamente, ya que son las que voy a utilizar en la tarjeta
    if (!form.name || !form.age || !form.email || !form.number) {
      alert("All fields are required");
      return;
    }
    if (form.id === null) {
      createContact(form);
    } else {
      updateContact(form);
    }
    handleReset();
  };
  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };
  const [openForm, setOpenForm] = useState(false);
  const handleOpenForm = () => {
    if (openForm) {
      return "flex flex-col";
    } else {
      return "hidden";
    }
  };
  return (
    <div className="shadow-lg shadow-cyan-300 m-2 rounded p-2">
      <h3
        className="text-cyan-500 cursor-pointer font-bold mb-4 text-lg"
        onClick={() => setOpenForm(!openForm)}
      >
        {dataToEdit ? "Editando un contacto" : "Crear un nuevo contacto"}{" "}
        <i class="fa-solid fa-circle-arrow-down"></i>
      </h3>
      <form onSubmit={handleSubmit} className={handleOpenForm()}>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Nombre"
          value={form.name}
          className="my-1 shadow-md appearance-none border rounded w-full text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
        />
        <input
          onChange={handleChange}
          type="text"
          name="age"
          placeholder="Edad"
          value={form.age}
          className="my-1 shadow-md appearance-none border rounded w-full text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
        />
        <input
          onChange={handleChange}
          type="text"
          name="number"
          placeholder="Número"
          value={form.number}
          className="my-1 shadow-md appearance-none border rounded w-full text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
        />
        <input
          onChange={handleChange}
          type="text"
          name="birthday"
          placeholder="Fecha de nacimiento"
          value={form.birthday}
          className="my-1 shadow-md appearance-none border rounded w-full text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
        />
        <input
          onChange={handleChange}
          type="text"
          name="location"
          placeholder="Ubicación"
          value={form.location}
          className="my-1 shadow-md appearance-none border rounded w-full text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
        />
        <input
          onChange={handleChange}
          type="text"
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          className="my-1 shadow-md appearance-none border rounded w-full text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
        />
        <div className="flex justify-end my-2">
          <button
            type="submit"
            value="Send"
            className="bg-cyan-500 mx-2 p-2 rounded border-none text-white hover:shadow-md transition-all hover:shadow-cyan-500"
          >
            Enviar
          </button>
          <button
            type="reset"
            value="Reset"
            onClick={handleReset}
            className="bg-orange-400 mx-2 p-2 rounded border-none text-white hover:shadow-md transition-all hover:shadow-orange-500"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default CrudForm;
