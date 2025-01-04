import express from "express";
import {
  AddEvent,
  AllEvents,
  DeleteEvent,
  EventById,
  UpdateEvent,
} from "../controllers/event_controller.js";

const router = express.Router();

router.route("/").get(AllEvents).post(AddEvent);

router.route("/:id").get(EventById).delete(DeleteEvent).put(UpdateEvent);

export default router;
