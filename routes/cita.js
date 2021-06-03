import express from "express";
const router = express.Router();

import Cita from "../models/citas.js";

router.post("/nuevo", async (req, res) => {
	const body = req.body;
	try {
		const citaDB = await Cita.create(body);
		res.status(200).json(citaDB);
	} catch (error) {
		return res.status(500).json({
			mensaje: "Ocurrio un error",
			error,
		});
	}
});

router.get("/:id", async (req, res) => {
	const _id = req.params.id;
	try {
		const citaDB = await Cita.findOne({ _id });
		res.json(citaDB);
	} catch (error) {
		return res.status(400).json({
			mensaje: "Ocurrio un error",
			error,
		});
	}
});

router.get("/", async (req, res) => {
	try {
		const citaDB = await Cita.find().populate("propietario");
		res.json(citaDB);
	} catch (error) {
		return res.status(400).json({
			mensaje: "Ocurrio un error",
			error,
		});
	}
});

module.exports = router;
