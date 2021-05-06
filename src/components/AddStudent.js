import React, { Component } from 'react'

export class AddStudent extends Component {
    constructor() {
        super();
        this.state = {nom:'', placeholder:"Nom de l'étudiant"}
    }

    handleChange = event =>this.setState({nom:event.target.value})
    handleAdd = e =>{
        e.preventDefault();
        this.props.handleAdd(this.state.nom);
        this.setState({nom:''});
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleAdd}>
                    <input 
                        name="nom"
                        placeholder={this.state.placeholder}
                        value={this.state.nom}
                        onChange = {this.handleChange}
                    />
                    <input type="submit" value="Ajoutez" />
                </form>
            </div>
        )
    }
    
}

export default AddStudent