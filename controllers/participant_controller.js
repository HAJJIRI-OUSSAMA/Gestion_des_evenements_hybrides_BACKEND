import {
  createParticipant,
  deleteParticipant,
  getAllParticipants,
  getParticipantById,
  updateParticipant,
} from "../services/participant_Service.js";

export async function AllParticipants(req, res) {
  try {
    const participants = await getAllParticipants();
    res.status(200).json(participants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function AddParticipant(req, res) {
  try {
    const newParticipant = await createParticipant(req.body);
    res.status(201).json(newParticipant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function ParticipantById(req, res) {
  try {
    const participant = await getParticipantById(req.params.id);
    res.status(200).json(participant);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export async function UpdateParticipant(req, res) {
  try {
    const updatedParticipant = await updateParticipant(req.params.id, req.body);
    res.status(200).json(updatedParticipant);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export async function DeleteParticipant(req, res) {
  try {
    const participant = await deleteParticipant(req.params.id);
    res.status(204).json(participant + " deleted successfully ");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
