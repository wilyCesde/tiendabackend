const { Cliente, Articulo, User, Car, Rent, ReturnCar } = require("./models.js");


// ------- CLIENTES

exports.readClientes = (req, res) =>
    Cliente.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.readCliente = (req, res) =>
    Cliente.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.deleteCliente = (req, res) =>
    Cliente.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.updateCliente = (req, res) =>
    Cliente.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, apellidos: req.body.apellidos } },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );


exports.createCliente = (req, res) =>
    new Cliente({ nombre: req.body.nombre, apellidos: req.body.apellidos })
        .save((err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });



// ------ ARTÍCULOS

exports.readArticulos = (req, res) =>
    Articulo.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.readArticulo = (req, res) =>
    Articulo.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.deleteArticulo = (req, res) =>
    Articulo.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });



exports.updateArticulo = (req, res) =>
    Articulo.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, precio: req.body.precio } },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );


exports.createArticulo = (req, res) =>
    new Articulo({ nombre: req.body.nombre, precio: req.body.precio })
        .save((err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });

// ------- USERS

exports.readUsers = (req, res) =>
    User.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.readUser = (req, res) =>
    User.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.deleteUser = (req, res) =>
    User.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.updateUser = (req, res) =>
    User.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { username: req.body.username, password: req.body.password, name: req.body.name, role: req.body.role } },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );


exports.createUser = (req, res) =>
    new User({ username: req.body.username, password: req.body.password, name: req.body.name, role: req.body.role })
        .save((err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });

// ------- CARS

exports.readCars = (req, res) =>
    Car.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.readCar = (req, res) =>
    Car.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.deleteCar = (req, res) =>
    Car.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.updateCar = (req, res) =>
    Car.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { plateNumber: req.body.plateNumber, brand: req.body.brand, state: req.body.state, dailyValue: req.body.dailyValue } },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );


exports.createCar = (req, res) =>
    new Car({ plateNumber: req.body.plateNumber, brand: req.body.brand, state: req.body.state, dailyValue: req.body.dailyValue })
        .save((err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });

// ------- RENTS

exports.readRents = (req, res) =>
    Rent.find({}).populate('username').populate('plateNumber').exec((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.readRent = (req, res) =>
    Rent.findOne({ _id: req.params.id }).populate('username').populate('plateNumber').exec((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.deleteRent = (req, res) =>
    Rent.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.updateRent = (req, res) =>
    Rent.findOneAndUpdate(
        { _id: req.params.id },
        {
            $set: {
                rentNumber: req.body.rentNumber,
                username: req.body.username,
                plateNumber: req.body.plateNumber,
                initialDate: req.body.initialDate,
                finalDate: req.body.finalDate,
                status: req.body.status
            }
        },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );


exports.createRent = (req, res) =>
    new Rent({
        rentNumber: req.body.rentNumber,
        username: req.body.username,
        plateNumber: req.body.plateNumber,
        initialDate: req.body.initialDate,
        finalDate: req.body.finalDate,
        status: req.body.status
    })
        .save((err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });
// ------- RETURN CARS

exports.readReturnCars = (req, res) =>
    ReturnCar.find({}).populate('rentNumber').exec((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.readReturnCar = (req, res) =>
    ReturnCar.findOne({ _id: req.params.id }).populate('rentNumber').exec((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.deleteReturnCar = (req, res) =>
    ReturnCar.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.updateReturnCar = (req, res) =>
    ReturnCar.findOneAndUpdate(
        { _id: req.params.id },
        {
            $set: {
                returnNumber: req.body.returnNumber,
                rentNumber: req.body.rentNumber,
                returnDate: req.body.returnDate
            }
        },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );


exports.createReturnCar = (req, res) =>
    new ReturnCar({
        returnNumber: req.body.returnNumber,
        rentNumber: req.body.rentNumber,
        returnDate: req.body.returnDate
    })
        .save((err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });

// login
exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Verificar las credenciales del usuario
        const user = await User.findOne({ username, password });

        if (user) {
            // Credenciales válidas
            res.json({ success: true, message: "Inicio de sesión exitoso", role: user.role });
        } else {
            // Credenciales inválidas
            res.status(401).json({ success: false, message: "Credenciales incorrectas" });
        }
    } catch (error) {
        // Error al procesar la solicitud
        res.status(500).json({ success: false, message: "Error en el servidor" });
    }

    const registerCar = async (req, res) => {
        try {
          // Lógica para registrar un automóvil en la base de datos
          // ...
          
          // Envía una respuesta de éxito si el registro es exitoso
          res.json({ success: true, message: "Registro exitoso del automóvil" });
        } catch (error) {
          // Manejo de errores si ocurre algún problema durante el registro
          res.status(500).json({ success: false, message: "Error al registrar el automóvil" });
        }
      };
      
      module.exports = { registerCar };
      
};

