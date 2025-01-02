import mongoose from "mongoose";

const participantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Le nom du participant est requis"],
  },
  email: {
    type: String,
    required: [true, "L'email du participant est requis"],
    unique: true,
    match: [/.+\@.+\..+/, "Veuillez entrer un email valide"],
  },
  modeParticipation: {
    type: String,
    enum: ["online", "in-Person"],
    required: true,
  },
  eventRef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: [true, "La référence de l'événement est requise"],
  },
});

const ParticipantModel = mongoose.model("Participant", participantSchema);

export default ParticipantModel;
