import React from "react";

function DeleteButton({id, onDelete}) {
  return <a href="#" class="btn btn-danger" onClick={() => onDelete(id)}>Delete</a>
}

export default DeleteButton