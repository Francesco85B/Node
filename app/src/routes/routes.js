import express from "express";
import { addFavourite, deleteFavourite, getFavourites, updateFavourite } from "../controllers/favourite-controller.js";

const router = express.Router();

router.get(`/favouritesOfUser/:userId`, getFavourites);
router.post(`/favourite`, addFavourite);
router.patch(`/favourite/:id`, updateFavourite);
router.delete(`/favourite/:id`, deleteFavourite);

export default router;
