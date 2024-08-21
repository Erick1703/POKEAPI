import express, { json } from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import typeRoutes from "./routes/type.poke.routes.js";
import regionRoute from "./routes/region.routes.js"
import pokemonRoute from "./routes/pokemon.routes.js"
import cookieParser from "cookie-parser";
const app = express()


app.use(express.json())
app.use(cookieParser())
app.use(morgan('dev'))
app.use("/api",authRoutes)
app.use("/api",typeRoutes)
app.use("/api",regionRoute )
app.use("/api", pokemonRoute)
export default app;