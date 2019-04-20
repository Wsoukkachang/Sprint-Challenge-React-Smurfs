import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <button onClick={() => props.deleteSmurf(props.id)}>Delete</button>
      <div className="smurf-info"></div>
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
      </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

