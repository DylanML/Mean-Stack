const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProyectoSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    productDescription: { type: String, required: true },
    price: { type: Number, required: true }
});

module.exports = mongoose.model('requests', ProyectoSchema);