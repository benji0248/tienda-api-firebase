import productService from "../services/productService.js";

class ProductController {
  async getAllProducts(req, res, next) {
    try {
      const products = await productService.getAllProducts();
      res.status(200).json({
        success: true,
        data: products,
      });
    } catch (error) {
      next(error);
    }
  }

  async getProductById(req, res, next) {
    try {
      const { id } = req.params;
      const product = await productService.getProductById(id);

      if (!product) {
        return res.status(404).json({
          success: false,
          error: "Producto no encontrado",
        });
      }

      res.status(200).json({
        success: true,
        data: product,
      });
    } catch (error) {
      next(error);
    }
  }

  async createProduct(req, res, next) {
    try {
      const productData = req.body;
      const newProduct = await productService.createProduct(productData);

      res.status(201).json({
        success: true,
        message: "Producto creado exitosamente",
        data: newProduct,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateProduct(req, res, next) {
    try {
      const { id } = req.params;
      const productData = req.body;

      const updatedProduct = await productService.updateProduct(
        id,
        productData
      );

      if (!updatedProduct) {
        return res.status(404).json({
          success: false,
          error: "Producto no encontrado",
        });
      }

      res.status(200).json({
        success: true,
        message: "Producto actualizado exitosamente",
        data: updatedProduct,
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteProduct(req, res, next) {
    try {
      const { id } = req.params;
      const result = await productService.deleteProduct(id);

      if (!result) {
        return res.status(404).json({
          success: false,
          error: "Producto no encontrado",
        });
      }

      res.status(200).json({
        success: true,
        message: "Producto eliminado exitosamente",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new ProductController();
