import express from "express";
const router = express.Router();

import Propietario from "../models/propietarios.js";

router.post("/nuevo", async (req, res) => {
	const body = req.body;
	try {
		const propietarioDB = await Propietario.create(body);
		res.status(200).json(propietarioDB);
	} catch (error) {
		return res.status(500).json({
			mensaje: "Ocurrio un error",
			error,
		});
	}
});

router.post("/nueva-mascota/", async (req, res) => {
	const body = req.body;
	try {
		const propietario = await Propietario.findOne({ _id: body._id });
		propietario.mascotas.push(body.mascota);
		propietario.save();
		res.status(200).json(propietario);
    console.log(propietario)
	} catch (error) {
		return res.status(500).json({
			mensaje: "Ocurrio un error",
			error,
		});
	}
});

router.get("/", async (req, res) => {
	try {
		const propietarios = await Propietario.find();
		res.json(propietarios);
	} catch (error) {
		return res.status(400).json({
			mensaje: "Ocurrio un error",
			error,
		});
	}
});
router.get("/:id", async (req, res) => {
	const _id = req.params.id;
	try {
		const propietarioDB = await Propietario.findOne({ _id });
		res.json(propietarioDB);
	} catch (error) {
		return res.status(400).json({
			mensaje: "Ocurrio un error",
			error,
		});
	}
});


export default router;
