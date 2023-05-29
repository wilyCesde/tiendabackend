const mongoose = require('mongoose');

const Cliente = mongoose.model('Cliente',
  new mongoose.Schema({ nombre: String, apellidos: String })
);

const Articulo = mongoose.model('Articulo',
  new mongoose.Schema({ nombre: String, precio: Number })
);

const User = mongoose.model('User',
  new mongoose.Schema({ username: String, password: String, name: String, role: String })
);

const Car = mongoose.model('Car',
  new mongoose.Schema({ plateNumber: String, brand: String, state: String, dailyValue: Number })
);

const Rent = mongoose.model('Rent',
  new mongoose.Schema({
    rentNumber: String,
    username: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    plateNumber: { type: mongoose.Schema.Types.ObjectId, ref: 'Car' },
    initialDate: Date,
    finalDate: Date,
    status: String,
  })
);

const ReturnCar = mongoose.model('ReturnCar',
  new mongoose.Schema({
    returnNumber: String,
    rentNumber: { type: mongoose.Schema.Types.ObjectId, ref: 'Rent' },
    returnDate: Date,
  })
);

module.exports = {
  Cliente,
  Articulo,
  User,
  Car,
  Rent,
  ReturnCar
};
