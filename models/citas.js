import mongoose, { Schema } from 'mongoose';

const citaSchema = new Schema({
  propietario : {type: mongoose.Schema.Types.ObjectId, ref:'Propietario', required: true},  
  mascota: {type: String, required:[true, 'dato obligatorio']},
  fecha:{type: Date, default: Date.now},
  descripcion: {type: String},
  createdAt: {type: Date, default: Date.now()}
})

const Cita = mongoose.model('Cita', citaSchema);

export default Cita;
