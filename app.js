import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import propietario from "./routes/propietario";
import cita from "./routes/cita";

const app = express();
// Middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/citas", cita);
app.use("/api/propietarios", propietario);


// Middleware para Vue.js router modo history
const history = require("connect-history-api-fallback");
app.use(history());
app.use(express.static(path.join(__dirname, "public")));

app.set("puerto", process.env.PORT || 3000);
app.listen(app.get("puerto"), () => {
	console.log("Example app listening on port " + app.get("puerto"));
});

// Conexión base de datos

// const uri = "mongodb://localhost:27017/myapp"; //devUri
const uri = process.env.MONGODB_URI;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

// Or using promises
mongoose.connect(uri, options).then(
	() => {
		console.log("Conectado a DB");
	},
	(err) => {
		console.log(err);
	}
);

