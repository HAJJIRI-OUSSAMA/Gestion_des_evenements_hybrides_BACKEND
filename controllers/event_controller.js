import {
  createEvent,
  deleteEvent,
  getAllEvents,
  getEventById,
  updateEvent,
} from "../services/event_Service.js";

export async function AllEvents(req, res) {
  try {
    const events = await getAllEvents();
    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
}

export async function EventById(req, res) {
  try {
    const event = await getEventById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.json(event);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
}

export async function AddEvent(event) {
  try {
    const response = await createEvent(API, event);
    console.log("Event added:", response); // Log the response to check the result
    return response;
  } catch (error) {
    console.error("Error adding event:", error.message);
    return null;
  }
}

export async function UpdateEvent(req, res) {
  try {
    const updatedEvent = await updateEvent(req.params.id, req.body);
    if (!updatedEvent)
      return res.status(404).json({ message: "Event not found" });
    res.json(updatedEvent);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
}

export async function DeleteEvent(req, res) {
  try {
    const deletedEvent = await deleteEvent(req.params.id);
    if (!deletedEvent)
      return res.status(404).json({ message: "Event not found" });
    res.json({ message: "Event whit id " + req.params.id + " deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
}
