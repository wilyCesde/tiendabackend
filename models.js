const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const clienteSchema = new mongoose.Schema({
  nombre: String,
  apellidos: String
});

const articuloSchema = new mongoose.Schema({
  nombre: String,
  precio: Number
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  name: String,
  role: String
});

const carSchema = new mongoose.Schema({
  plateNumber: String,
  brand: String,
  state: String,
  dailyValue: Number
});

const rentSchema = new mongoose.Schema({
  rentNumber: { type: Number, unique: true },
  username: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  plateNumber: { type: mongoose.Schema.Types.ObjectId, ref: 'Car' },
  initialDate: Date,
  finalDate: Date,
  status: String
});

rentSchema.plugin(autoIncrement.plugin, {
  model: 'Rent',
  field: 'rentNumber',
  startAt: 1,
  incrementBy: 1
});

const returnCarSchema = new mongoose.Schema({
  rentNumber: { type: mongoose.Schema.Types.ObjectId, ref: 'Rent' },
  plateNumber: String,
  username: String,
  returnDate: { type: Date, default: Date.now }
});

const Cliente = mongoose.model('Cliente', clienteSchema);
const Articulo = mongoose.model('Articulo', articuloSchema);
const User = mongoose.model('User', userSchema);
const Car = mongoose.model('Car', carSchema);
const Rent = mongoose.model('Rent', rentSchema);
const ReturnCar = mongoose.model('ReturnCar', returnCarSchema);

module.exports = {
  Cliente,
  Articulo,
  User,
  Car,
  Rent,
  ReturnCar
};
