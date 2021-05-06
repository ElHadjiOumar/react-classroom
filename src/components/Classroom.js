import axios from "axios";
import React, { Component } from "react";
import AddStudent from "./AddStudent";
import Student from "./Student";

export default class Classroom extends Component {
  constructor() {
    super();
    // this.state = {
    //   students: [
    //     { id: 1, nom: "EL Hadji Oumar MBENGUE" },
    //     { id: 2, nom: "Marie Therese NANASTA" },
    //     { id: 3, nom: "Wilfried PODA" },
    //     { id: 4, nom: "Rachid PITROIPA" },
    //   ],
    // };

    this.state = { isLoading: false, students: [], error: null };

    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    axios
      .get("http://localhost:3333/learners")
      .then((res) => {
        const students = res.data;
        this.setState({ students, idLoading: false });
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  }
  //   handleDelete(id) {
  //     this.setState((prevstate) => ({
  //       students: prevstate.students.filter((student) => student.id !== id),
  //     }));
  //   }
  handleDelete(id) {
    axios
      .delete("http://localhost:3333/learners/" + id)
      .then((res) =>
        this.setState((prevstate) => ({
          students: prevstate.students.filter((student) => student.id !== id),
        }))
      )
      .catch((error) => this.setState({ error: error, isLoading: false }));
  }
  //   handleAdd = (nom) => {
  //     const newStudent = { id: Date.now(), nom: nom };
  //     this.setState({ students: [...this.state.students, newStudent] });
  //   };
  handleAdd = (nom) => {
    axios.post("http://localhost:3333/learners", { nom }).then((res) => {
      this.setState({ students: [...this.state.students, res.data] });
    });
  };

  render() {
    const learners = this.state.students;
    const isLoading = this.state.isLoading;
    return (
      <div>
        <AddStudent handleAdd={this.handleAdd} />
        <h1>Liste des étudiants de {this.props.nom}</h1>
        <ul>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            learners.map((learner) => (
              <Student
                key={learner.id}
                learner={learner}
                handleDelete={this.handleDelete}
              />
            ))
          )}
        </ul>
      </div>
    );
  }
}
