// Middleware para manejo global de errores
export const errorHandler = (err, req, res, next) => {
  console.error("Error:", err);

  if (err.name === "UnauthorizedError") {
    return res.status(401).json({
      error: "Error de autenticación",
      message: err.message,
    });
  }

  if (err.name === "ValidationError") {
    return res.status(400).json({
      error: "Error de validación",
      message: err.message,
    });
  }

  res.status(err.status || 500).json({
    error: "Error del servidor",
    message: err.message || "Ha ocurrido un error interno en el servidor.",
  });
};
