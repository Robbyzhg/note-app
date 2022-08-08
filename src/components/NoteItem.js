import React from "react";
import DeleteButton from "./DeleteButton";

function NoteItem({judul, deskripsi, id, onDelete}) {
  return (
    <div class="col-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{judul}</h5>
          <p class="card-text">{deskripsi}</p>
          <DeleteButton id={id} onDelete={onDelete} />
        </div>
      </div>
    </div>
  )
}

export default NoteItem;