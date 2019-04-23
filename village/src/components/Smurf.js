import React from 'react';

const Smurf = props => {

  return (
    <div className="Smurf">
      <div className="smurf-info">
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
        {/* <button onClick={() => props.updateSmurf(props.id)}>Edit</button> */}
        <button onClick={() => props.deleteSmurf(props.id)}>Delete</button>
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