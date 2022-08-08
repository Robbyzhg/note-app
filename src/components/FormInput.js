import React from "react";

class FormInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      judul: '',
      deskripsi: '',
    }
    this.onJudulChangeEventHandler = this.onJudulChangeEventHandler.bind(this);
    this.onDeskripsiChangeEventHandler = this.onDeskripsiChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onJudulChangeEventHandler(event) {
    this.setState(() => {
      return {
        judul: event.target.value,
      }
    })
  }

  onDeskripsiChangeEventHandler(event) {
    this.setState(() => {
      return {
        deskripsi: event.target.value,
      }
    })
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNotes(this.state);
  }

  render() {
    return (
      <div>
        <div class="card mt-5">
          <h1 class="text-center">Input Catatan</h1>
          <div class="card-body">
            <form onSubmit={this.onSubmitEventHandler}>
              <div class="mb-3">
                <label for="judul" class="form-label">Judul</label>
                <input type="text" class="form-control" value={this.state.judul} onChange={this.onJudulChangeEventHandler}></input>
              </div>
              <div class="mb-3">
                <label for="deskripsi" class="form-label">Deskripsi</label>
                <textarea className="form-control" value={this.state.deskripsi} onChange={this.onDeskripsiChangeEventHandler}></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default FormInput;