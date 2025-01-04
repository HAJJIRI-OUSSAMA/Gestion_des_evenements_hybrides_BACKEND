import express from "express";
import {
  AddParticipant,
  AllParticipants,
  DeleteParticipant,
  ParticipantById,
  UpdateParticipant,
} from "../controllers/participant_controller.js";

const router = express.Router();

router.route("/").get(AllParticipants).post(AddParticipant);

router
  .route("/:id")
  .get(ParticipantById)
  .delete(DeleteParticipant)
  .patch(UpdateParticipant);

export default router;
