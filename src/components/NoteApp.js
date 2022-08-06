import React from "react";
import FormInput from "./FormInput";
import NoteList from "./NoteList";
import { getData } from '../utils/data'

class NoteApp extends React.Component {
  render() {
    const notes = getData();
    return (
      <div>
        <FormInput />
        <NoteList notes={notes} />
      </div>
    )
  }
}

export default NoteApp;