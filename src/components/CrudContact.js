import React from "react";

const CrudContact = ({contacto, setDataToEdit, deleteContact}) => {
  
  let {name, age, number, email, id} = contacto

  return (
    <tr className="shadow-slate-500 shadow-sm">
      <td>{name}</td>
      <td>{age}</td>
      <td>{number}</td>
      <td>{email}</td>
      <td className="flex flex-col">
        <button className="my-2 border-none bg-orange-400 text-white hover:shadow-md hover:shadow-orange-400 transition-all" onClick={() => setDataToEdit(contacto)}>Edit</button>
        <button className="my-2 border-none bg-red-500 text-white hover:shadow-md hover:shadow-red-500 transition-all" onClick={() => deleteContact(id)}>Remove</button>
      </td>
    </tr>
  );
};

export default CrudContact;
