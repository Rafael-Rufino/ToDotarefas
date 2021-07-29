import React from 'react';
import { FaPlusSquare } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './Form.css';

export default function Form({ handleSubmit, handleChange, novaTarefa }) {
  return (

    <form onSubmit={handleSubmit} action="#" className="form">
      <input
        onChange={handleChange}
        type="text"
        value={novaTarefa}
      />
      <button type="submit" className="btn_add">
        <FaPlusSquare className="add" />
        Adicionar
      </button>
    </form>

  );
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
