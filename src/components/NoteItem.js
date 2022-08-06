import React from "react";

function NoteItem({judul, deskripsi}) {
  return (
    <div>
      <h3>{judul}</h3>
      <p>{deskripsi}</p>
    </div>
  )
}

export default NoteItem;