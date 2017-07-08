import React, { Component } from 'react';

class AddForm extends Component {
     constructor(props) {
       super(props);
       this.state = {name: "",
                    author: "",
                    cover: "",
                    year: null,
                    formErrors: {name: '', author: '', cover: '', year: ''},
                    yearValid: false,
                    formValid: false};
    }

    validateField(fieldName,value) {
      let fieldValidationErrors = this.state.formErrors;
      let yearValid = this.state.yearValid;

      switch(fieldName) {
        case 'year':
          yearValid = value > 0 && value <= 2017;
          fieldValidationErrors.year == yearValid ? '' : ' is invalid';
          break;
        default:
          break;
      }
      this.setState({formErrors: fieldValidationErrors,
                      yearValid: yearValid
                    }, this.validateForm);
    }

    validateForm() {
      this.setState({formValid: this.state.yearValid});
    }

    handleUserInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({[name]: value},
                    () => { this.validateField(name, value) });
    }

   /*   this.onChange = this.onChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
     handleSubmit(e) {
       e.preventDefault();
       alert("Имя: " + this.state.name);
     }*/

     render() {
       return (
           <form className="addBook">
               <h2>Добавьте книгу</h2>
                   <div className="form-group">
                     <label htmlFor="name">Название книги</label>
                     <input type="text" className="form-control" name="name"
                      value={this.state.name} onChange={this.handleUserInput}/>
                   </div>
                   <div className="form-group">
                     <label htmlFor="author">Автор</label>
                     <input type="text" className="form-control" name="author"
                     value={this.state.author} onChange={this.handleUserInput}/>
                   </div>
                   <div className="form-group">
                     <label htmlFor="year">Год выпуска</label>
                     <input type="number" className="form-control"name="year"
                      value={this.state.year} onChange={this.handleUserInput} />
                   </div>
                   <div className="form-group">
                     <label htmlFor="cover">Обложка книги</label>
                     <input type="text" className="form-control"name="cover"
                      value={this.state.cover} onChange={this.handleUserInput}/>
                   </div>
               <button type="submit" className="btn btn-primary"
               disabled={!this.state.formValid}>Сохранить</button>
               <button type="reset" className="btn btn-primary">Отменить</button>
           </form>
       );
     }
   }

   export default AddForm;
