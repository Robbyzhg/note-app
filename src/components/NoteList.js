import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes, onDelete}) {
    if(!notes.length) {
      return <div><h1>List Catatan</h1><h3>No Data Found</h3></div> 
    } else {
      return (
        <div class="row">
          <h1>List Catatan</h1>
            {
              notes.map((note) => (
                <NoteItem key={note.id} {...note} id={note.id} onDelete={onDelete} />
              ))
            }
        </div>
      )
    }
}

export default NoteList;