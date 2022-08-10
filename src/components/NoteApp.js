import React from "react";
import FormInput from "./FormInput";
import NoteList from "./NoteList";
import { getInitialData } from '../utils/data'

class NoteApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: getInitialData()
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({notes});
  }

  onAddNotesHandler({judul, deskripsi}) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            judul,
            deskripsi,
          }
        ]
      }
    })
  }
  render() {
    return (
      <div>
        <FormInput addNotes={this.onAddNotesHandler} />
        <br />
        <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} />
      </div>
    )
  }
}

export default NoteApp;