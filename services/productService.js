import Product from "../models/Product.js";

class ProductService {
  async getAllProducts() {
    return await Product.getAll();
  }

  async getProductById(id) {
    return await Product.getById(id);
  }

  async createProduct(productData) {
    if (!productData.name || !productData.price) {
      throw new Error("Nombre y precio son requeridos");
    }

    return await Product.create(productData);
  }

  async updateProduct(id, productData) {
    return await Product.update(id, productData);
  }

  async deleteProduct(id) {
    return await Product.delete(id);
  }
}

export default new ProductService();
