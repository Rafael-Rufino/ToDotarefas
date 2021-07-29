import React from 'react';
import './index.css';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import PropTypes from 'prop-types';

export default function Tarefas({ tarefas, handleEdit, handleDelete }) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <div>
            {/* Funcao edit */}
            <button
              className="btn_edit"
              onClick={(e) => handleEdit(e, index)}
            >
              <FaEdit
                className="edit"
              />
              Editar
            </button>
            {/* Funcao delete */}
            <button
              className="btn_delete"
              onClick={(e) => handleDelete(e, index)}
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
  );
}

Tarefas.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  tarefas: PropTypes.array.isRequired,
};
