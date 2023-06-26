// middleware/authentication.js

const authenticateUser = (req, res, next) => {
    // Aquí se realiza la lógica de autenticación
    // Verificar el token, comprobar permisos, etc.
    // Ejemplo:
    const { token } = req.headers;
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
  };
  
  module.exports = authenticateUser;
  