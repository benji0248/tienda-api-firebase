import { generateToken } from "../middlewares/auth.js";

class AuthController {
  async login(req, res, next) {
    try {
      const { username, password } = req.body;

      // Validar que se enviaron credenciales
      if (!username || !password) {
        return res.status(400).json({
          success: false,
          error: "Usuario y contraseña son requeridos",
        });
      }

      const validUsers = {
        admin: "admin123",
        tienda: "tienda456",
      };

      // Verificar credenciales
      if (validUsers[username] !== password) {
        return res.status(401).json({
          success: false,
          error: "Credenciales inválidas",
        });
      }

      // Generar token JWT
      const token = generateToken({
        username,
        role: username === "admin" ? "admin" : "user",
      });

      res.status(200).json({
        success: true,
        message: "Login exitoso",
        token: token,
      });
    } catch (error) {
      next(error);
    }
  }

  async verifyToken(req, res, next) {
    try {
      res.status(200).json({
        success: true,
        message: "Token válido",
        user: req.user,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new AuthController();
