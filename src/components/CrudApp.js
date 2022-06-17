import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import { database } from "../db/db";

const initialDB = database;

const CrudApp = () => {
  const [db, setDb] = useState(initialDB);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createContact = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };

  const updateContact = (data) => {
    let newInfo = db.map((el) => (el.id === data.id ? data : el));
    setDb(newInfo);
  };

  const deleteContact = (id) => {
    let isDelete = window.confirm("Are you sure?");
    if (isDelete) {
      let newInfo = db.filter((el) => el.id !== id);
      setDb(newInfo);
    } else {
      return;
    }
  };

  return (
    <>
      <article className="grid grid-rows">
        <CrudForm
          createContact={createContact}
          updateContact={updateContact}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          deleteContact={deleteContact}
          setDataToEdit={setDataToEdit}
        />
      </article>
    </>
  );
};

export default CrudApp;
