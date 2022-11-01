import { useState } from "react";
import Modal from "./Modal";
import Table from "./Table";

const Details = ({
  table,
  title,
  buttonColor = "",
  buttonClass = "Button-cancel",
}) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div
      style={{ display: "flex", textAlign: "center", justifyContent: "center" }}
    >
      <button
        style={{
          width: "6.5rem",
          alignSelf: "center",
          backgroundColor: buttonColor,
          height: "max-content",
          textWrap: "column",
        }}
        className={buttonClass}
        onClick={() => setOpenModal(!openModal)}
      >
        {title}
      </button>
      {
        <Modal open={openModal} setClosed={() => setOpenModal(false)}>
          <Table
            onEdit={() => setOpenModal(!openModal)}
            body={table}
            edit={true}
            del={true}
          />
        </Modal>
      }
    </div>
  );
};

export default Details;
