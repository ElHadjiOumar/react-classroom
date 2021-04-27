import React, { Component } from 'react'
import Student from './Student'

export default class Classroom extends Component {
    constructor(){
        super();
        this.state = {
            students : [
                {id:1, nom:"EL Hadji Oumar MBENGUE"},
                {id:2, nom:"Marie Therese NANASTA"},
                {id:3, nom:"Wilfried PODA"},
                {id:4, nom:"Rachid PITROIPA"},
            ]
        }
    }

    render() {
        const leaners = this.state.students;
        return (
            <div>
                <h1>Liste des étudiants de {this.props.nom}</h1>
                <ul>
                    {
                        leaners.map(leaner => <Student 
                        key={leaner.id}
                        nom={leaner.nom}
                        />)
                    }
                </ul>
            </div>
        )
    }
}
