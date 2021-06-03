import mongoose from "mongoose";

const propietarioSchema = mongoose.Schema({
	nombre: { type: String, required: [true, "Nombre obligatorio"] },
	dni: { type: String, required: [true, "dni obligatorio"] },
	telefono: { type: String, required: [true, "telefono obligatorio"] },
	mascotas: [
		{
			nombre: String,
			edad: Number,
		},
	],
	createdAt: { type: Date, default: Date.now() },
});

export default mongoose.model("Propietario", propietarioSchema);
