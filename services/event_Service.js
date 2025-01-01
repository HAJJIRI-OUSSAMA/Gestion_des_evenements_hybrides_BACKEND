import EventModel from "../models/event.js";

export async function getAllEvents() {
  return await EventModel.find();
}

export async function getEventById(id) {
  return await EventModel.findById(id);
}

export async function createEvent(event) {
  return await EventModel.create(event);
}

export async function updateEvent(id, event) {
  return await EventModel.findByIdAndUpdate(id, event);
}

export async function deleteEvent(id) {
  return await EventModel.findByIdAndDelete(id);
}
