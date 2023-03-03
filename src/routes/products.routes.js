import { Router } from "express";
import { method as productsController} from "./../controllers/products.controller"

const routesProducts = Router();

routesProducts.get('/', productsController.getProducts);
routesProducts.get('/:id', productsController.getProduct);
routesProducts.post('/', productsController.addProducts);
routesProducts.delete('/:id', productsController.deleteProduct);
routesProducts.put('/:id', productsController.updateProduct);


export default routesProducts;
