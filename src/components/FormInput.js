import React from "react";

class FormInput extends React.Component {
  render() {
    return (
      <form>
        <h1>Input Note</h1>
        <input type="text" placeholder="Judul"></input>
        <br/>
        <textarea placeholder="Deskripsi"></textarea>
        <br/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default FormInput;