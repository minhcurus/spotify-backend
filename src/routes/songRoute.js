import { addSong, listSong } from "../controllers/songController.js";
import express from "express";
import upload from "../middleware/multer.js";

const songRouter = express.Router()

songRouter.post('/add', upload.fields([{name:'image', maxCount:1},{name:'audio',maxCount:1}]), addSong)
songRouter.get('/add', listSong)

export default songRouter