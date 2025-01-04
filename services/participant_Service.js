import ParticipantModel from "../models/Participant.js";

export async function getAllParticipants() {
  return await ParticipantModel.find();
}

export async function getParticipantById(id) {
  return await ParticipantModel.findById(id);
}

export async function createParticipant(participant) {
  return await ParticipantModel.create(participant);
}

export async function updateParticipant(id, participant) {
  return await ParticipantModel.findByIdAndUpdate(id, participant);
}

export async function deleteParticipant(id) {
  return await ParticipantModel.findByIdAndDelete(id);
}
