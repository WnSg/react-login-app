import React, { useState } from 'react';
import Mensaje from './Mensaje';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginClick = () => {
    // valores predefinidos o realizar una petición a una base de datos.
    const predefinedUsername = 'user';
    const predefinedPassword = 'password';

    if (username === predefinedUsername && password === predefinedPassword) {
      setMessage(`Bienvenido, ${username}!`);
    } else {
      setMessage('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-center">Login</h2>
            <form>
              <div className="form-group">
                <label>Usuario:</label>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </div>
              <div className="form-group">
                <label>Contraseña:</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <button
                type="button"
                className="btn btn-primary btn-block mt-3"
                onClick={handleLoginClick}
              >
                Iniciar Sesión
              </button>
            </form>
            <Mensaje message={message} />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Login;