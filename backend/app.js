
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/event_management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const eventSchema = new mongoose.Schema({
  name: String,
  description: String,
  location: String,
  date: Date,
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attendee' }],
});

const attendeeSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const taskSchema = new mongoose.Schema({
  name: String,
  deadline: Date,
  status: { type: String, enum: ['Pending', 'Completed'], default: 'Pending' },
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
  assignedAttendee: { type: mongoose.Schema.Types.ObjectId, ref: 'Attendee' },
});

const Event = mongoose.model('Event', eventSchema);
const Attendee = mongoose.model('Attendee', attendeeSchema);
const Task = mongoose.model('Task', taskSchema);

// Event Routes
app.post('/events', async (req, res) => {
  const event = new Event(req.body);
  await event.save();
  res.status(201).send(event);
});

app.get('/events', async (req, res) => {
  const events = await Event.find().populate('attendees');
  res.send(events);
});

app.put('/events/:id', async (req, res) => {
  const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(event);
});

app.delete('/events/:id', async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.send({ message: 'Event deleted' });
});

// Attendee Routes
app.post('/attendees', async (req, res) => {
  const attendee = new Attendee(req.body);
  await attendee.save();
  res.status(201).send(attendee);
});

app.get('/attendees', async (req, res) => {
  const attendees = await Attendee.find();
  res.send(attendees);
});

app.delete('/attendees/:id', async (req, res) => {
  await Attendee.findByIdAndDelete(req.params.id);
  res.send({ message: 'Attendee deleted' });
});

// Task Routes
app.post('/tasks', async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.status(201).send(task);
});

app.get('/tasks/:eventId', async (req, res) => {
  const tasks = await Task.find({ event: req.params.eventId }).populate('assignedAttendee');
  res.send(tasks);
});

app.put('/tasks/:id', async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(task);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
