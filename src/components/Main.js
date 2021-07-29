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

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

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
          {tarefas.map((tarefa) => (
            <li key={tarefa}>
              {tarefa}
              <div>
                <button className="btn_edit">
                  <FaEdit className="edit" />
                  Editar
                </button>
                <button className="btn_delete">
                  <FaWindowClose className="delete" />
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
