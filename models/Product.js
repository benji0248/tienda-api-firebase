import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../config/firebase.js";

const productsCollection = collection(db, "products");

class Product {
  static async getAll() {
    try {
      const snapshot = await getDocs(productsCollection);
      const products = [];

      snapshot.forEach((doc) => {
        products.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      return products;
    } catch (error) {
      throw new Error("Error al obtener productos: " + error.message);
    }
  }

  static async getById(id) {
    try {
      const productDoc = doc(db, "products", id);
      const snapshot = await getDoc(productDoc);

      if (!snapshot.exists()) {
        return null;
      }

      return {
        id: snapshot.id,
        ...snapshot.data(),
      };
    } catch (error) {
      throw new Error("Error al obtener producto: " + error.message);
    }
  }

  static async create(productData) {
    try {
      const newProduct = {
        ...productData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };

      const docRef = await addDoc(productsCollection, newProduct);

      return {
        id: docRef.id,
        ...newProduct,
      };
    } catch (error) {
      throw new Error("Error al crear producto: " + error.message);
    }
  }

  static async update(id, productData) {
    try {
      const productDoc = doc(db, "products", id);

      const snapshot = await getDoc(productDoc);
      if (!snapshot.exists()) {
        return null;
      }

      const updatedData = {
        ...productData,
        updatedAt: serverTimestamp(),
      };

      await updateDoc(productDoc, updatedData);

      return {
        id,
        ...updatedData,
      };
    } catch (error) {
      throw new Error("Error al actualizar producto: " + error.message);
    }
  }

  static async delete(id) {
    try {
      const productDoc = doc(db, "products", id);

      const snapshot = await getDoc(productDoc);
      if (!snapshot.exists()) {
        return null;
      }

      await deleteDoc(productDoc);
      return true;
    } catch (error) {
      throw new Error("Error al eliminar producto: " + error.message);
    }
  }
}

export default Product;
