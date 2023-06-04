const cors       = require('cors')
const express    = require("express");
const controller = require("./controllers.js");


const router = express.Router();


// --------------- API REST CRUD

router.get    ("/clientes",      cors(), controller.readClientes);   // Read All
router.get    ("/clientes/:id",  cors(), controller.readCliente);    // Read
router.delete ("/clientes/:id",  cors(), controller.deleteCliente);  // Delete
router.put    ("/clientes/:id",  cors(), controller.updateCliente);  // Update
router.post   ("/clientes",      cors(), controller.createCliente);  // Create

router.get    ("/articulos",     cors(), controller.readArticulos);  // Read All
router.get    ("/articulos/:id", cors(), controller.readArticulo);   // Read
router.delete ("/articulos/:id", cors(), controller.deleteArticulo); // Delete
router.put    ("/articulos/:id", cors(), controller.updateArticulo); // Update
router.post   ("/articulos",     cors(), controller.createArticulo); // Create

router.get    ("/users",      cors(), controller.readUsers);   // Read All
router.get    ("/users/:id",  cors(), controller.readUser);    // Read
router.delete ("/users/:id",  cors(), controller.deleteUser);  // Delete
router.put    ("/users/:id",  cors(), controller.updateUser);  // Update
router.post   ("/users",      cors(), controller.createUser);  // Create

router.get    ("/cars",      cors(), controller.readCars);   // Read All
router.get    ("/cars/:id",  cors(), controller.readCar);    // Read
router.delete ("/cars/:id",  cors(), controller.deleteCar);  // Delete
router.put    ("/cars/:id",  cors(), controller.updateCar);  // Update
router.post   ("/cars",      cors(), controller.createCar);  // Create

router.get    ("/rents",      cors(), controller.readRents);   // Read All
router.get    ("/rents/:id",  cors(), controller.readRent);    // Read
router.delete ("/rents/:id",  cors(), controller.deleteRent);  // Delete
router.put    ("/rents/:id",  cors(), controller.updateRent);  // Update
router.post   ("/rents",      cors(), controller.createRent);  // Create

router.get    ("/returnCars",      cors(), controller.readReturnCars);   // Read All
router.get    ("/returnCars/:id",  cors(), controller.readReturnCar);    // Read
router.delete ("/returnCars/:id",  cors(), controller.deleteReturnCar);  // Delete
router.put    ("/returnCars/:id",  cors(), controller.updateReturnCar);  // Update
router.post   ("/returnCars",      cors(), controller.createReturnCar);  // Create

router.post("/login", cors(), controller.login);

router.post('/createReturnCar', cors(), controller.createReturnCar);

module.exports = router;

