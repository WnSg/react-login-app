import React from 'react';

const Mensaje = ({ message }) => {
  return (
    <div className="mt-3">
      {message && (
        <div className={`alert ${message.includes('Bienvenido') ? 'alert-success' : 'alert-danger'}`}>
          {message}
        </div>
      )}
    </div>
  );
};

export default Mensaje;