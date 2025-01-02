import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: [true, "Le nom de l'événement est requis"],
  },
  description: {
    type: String,
    required: [true, "La description de l'événement est requise"],
  },
  date: {
    type: Date,
    required: [true, "La date de l'événement est requise"],
    validate: {
      validator: function (value) {
        return !isNaN(new Date(value).getTime());
      },
      message: (props) => `${props.value} is not a valid date!`,
    },
  },
  mode: {
    type: String,
    enum: ["online", "in-person"],
    required: [true, "Le mode de l'événement est requis"],
  },
  lien: {
    type: String,
    default: function () {
      return this.mode === "In-Person" ? "" : null;
    },
  },
  listeParticipants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Participant",
    },
  ],
});

const EventModel = mongoose.model("Event", eventSchema);

export default EventModel;
