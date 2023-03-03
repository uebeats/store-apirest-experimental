import { getConnection } from "./../database/database"

const getProducts = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM products");
    res.json(result);
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM products WHERE id_product = ?", id);
    res.json(result);
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
};

const addProducts = async (req, res) => {
  try {

    const {
      sku,
      slug,
      name_product,
      cat_product,
      stock,
      price_normal,
      price_sale,
      full_image,
      thumb_image
    } = req.body;

    console.log(sku);
    // function hasEmptyValues(products) {
    //   return Object.values(products).some(p => p === "" || p === null || p === undefined);
    // }

    // if (hasEmptyValues(dataProducts)) {
    //   return res.status(400).json({ message: "Data contains empty values" });
    // }

    // const connection = await getConnection();
    // const result = await connection.query(
    //   "INSERT INTO products SET ?", dataProducts
    // );
    // console.log({message: "Producto Añadido"});
    // res.json(result);

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query("DELETE FROM products WHERE id_product = ?", id);
    res.json(result);
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      sku,
      slug,
      name_product,
      cat_product,
      stock,
      price_normal,
      price_sale,
      full_image,
      thumb_image
    } = req.body;

    const dataProducts = {
      sku,
      slug,
      name_product,
      cat_product,
      stock,
      price_normal,
      price_sale,
      full_image,
      thumb_image
    };

    function hasEmptyValues(products) {
      return Object.values(products).some(p => p === "" || p === null || p === undefined);
    }

    if (hasEmptyValues(dataProducts)) {
      return res.status(400).json({ message: "Data contains empty values" });
    }

    const connection = await getConnection();
    const result = await connection.query(
      "UPDATE products SET ? WHERE id_product = ?", [dataProducts, id]
    );

    console.log({ message: "Producto Actualizado" });

    res.json(result);

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
};

export const method = {
  getProducts,
  getProduct,
  addProducts,
  deleteProduct,
  updateProduct
};