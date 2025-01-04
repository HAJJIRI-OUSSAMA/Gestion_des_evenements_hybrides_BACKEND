import EventModel from "../models/Event.js";

export async function getAllEvents() {
  return await EventModel.find();
}

export async function getEventById(id) {
  return await EventModel.findById(id);
}

export async function createEvent(event) {
  return await EventModel.create(event);
}

export async function UpdEvent(id, event) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid Event ID");
  }
  return await EventModel.findByIdAndUpdate(id, event, { new: true });
}
export async function deleteEvent(id) {
  return await EventModel.findByIdAndDelete(id);
}
