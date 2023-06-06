const cors = require('cors');
const express = require("express");
const controller = require("./controllers.js");

const router = express.Router();

// --------------- API REST CRUD

router.get("/clientes", cors(), controller.readClientes);
router.get("/clientes/:id", cors(), controller.readCliente);
router.delete("/clientes/:id", cors(), controller.deleteCliente);
router.put("/clientes/:id", cors(), controller.updateCliente);
router.post("/clientes", cors(), controller.createCliente);

router.get("/articulos", cors(), controller.readArticulos);
router.get("/articulos/:id", cors(), controller.readArticulo);
router.delete("/articulos/:id", cors(), controller.deleteArticulo);
router.put("/articulos/:id", cors(), controller.updateArticulo);
router.post("/articulos", cors(), controller.createArticulo);

router.get("/users", cors(), controller.readUsers);
router.get("/users/:id", cors(), controller.readUser);
router.delete("/users/:id", cors(), controller.deleteUser);
router.put("/users/:id", cors(), controller.updateUser);
router.post("/users", cors(), controller.createUser);

router.get("/cars", cors(), controller.readCars);
router.get("/cars/:id", cors(), controller.readCar);
router.delete("/cars/:id", cors(), controller.deleteCar);

router.post("/cars", cors(), controller.createCar);

router.get("/rents", cors(), controller.readRents);
router.get("/rents/:id", cors(), controller.readRent);
router.delete("/rents/:id", cors(), controller.deleteRent);
router.put("/rents/:id", cors(), controller.updateRent);
router.post("/rents", cors(), controller.createRent);

router.get("/returnCars/:id", cors(), controller.readReturnCar);
router.delete("/returnCars/:id", cors(), controller.deleteReturnCar);
router.get("/returnCars", cors(), controller.readReturnCars);
router.post("/returnCars/:id", cors(), controller.createReturnCar);




router.post("/login", cors(), controller.login);

module.exports = router;
