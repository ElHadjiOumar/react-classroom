import React, { Component } from 'react'
import Student from './Student'

export default class Classroom extends Component {
    render() {
        return (
            <div>
                <h1>Liste des étudiants de {this.props.nom}</h1>
                <ul>
                    <Student nom="Fatou Dia" />
                    <Student nom="Saliou Diouf" />
                    <Student nom="Alain Gomis" />
                </ul>
            </div>
        )
    }
}
