import React, { Component } from 'react';
// Form -> add -> edit -> Delete
import { FaPlusSquare, FaEdit, FaWindowClose } from 'react-icons/fa';

import '../style/Main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [
      'Estudar',
    ],

  };

  // Envio do form
  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1) return;

    const novastarefas = [...tarefas];

    this.setState({
      // eslint-disable-next-line react/no-unused-state
      tarefas: [...novastarefas, novaTarefa],
    });
  }

  // Value do input
  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  // Funcao Edit
  handleEdit = (e, index) => {
    console.log('edit', index);
  }

  // Funcao Delete
  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1); // remover 1 elemento do indece

    this.setState({
      tarefas: [...novasTarefas],
    });
  }

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input
            onChange={this.handleChange}
            type="text"
            value={novaTarefa}
          />
          <button type="submit" className="btn_add">
            <FaPlusSquare className="add" />
            Adicionar
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa, index) => (
            <li key={tarefa}>
              {tarefa}
              <div>
                {/* Funcao edit */}
                <button
                  className="btn_edit"
                  onClick={(e) => this.handleEdit(e, index)}
                >
                  <FaEdit
                    className="edit"
                  />
                  Editar
                </button>
                {/* Funcao delete */}
                <button
                  className="btn_delete"
                  onClick={(e) => this.handleDelete(e, index)}
                >
                  <FaWindowClose
                    className="delete"
                  />
                  Delete
                </button>

              </div>
            </li>
          ))}

        </ul>
      </div>
    );
  }
}
