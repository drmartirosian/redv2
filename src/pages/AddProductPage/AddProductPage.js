import React, {Component} from 'react';

class AddProductPage extends Component {
  state = {
    invalidForm: true,
    formData: {
      title: '',
      description: '',
      author: '',
    }
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddProduct(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <div className="page">
        <h4>New Blog Post:</h4>
        <form style={{ width: '60%' }} ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <label>TITLE:</label>
            <input
              className="form-control"
              name="title"
              value={this.state.formData.title}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>BLOG:</label>
            <input
              className="form-control"
              name="description"
              value={this.state.formData.description}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>AUTHOR:</label>
            <input
              className="form-control"
              name="author"
              value={this.state.formData.author}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-success"
            disabled={this.state.invalidForm}
          >
            POST
          </button>
        </form>
      </div>
    );
  }
}

export default AddProductPage;