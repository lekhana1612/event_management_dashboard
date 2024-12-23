# event_management_dashboard
Event Management Dashboard

Overview

The Event Management Dashboard is a web-based application designed to simplify event management. It allows users to create, manage, and track events, attendees, and tasks through an intuitive interface.

Features

Event Management: Add, update, view, and delete events.

Attendee Management: Add attendees, assign them to events, and manage their tasks.

Task Tracking: Monitor task progress with status updates (Pending/Completed).

Responsive Design: Fully responsive UI for both desktop and mobile.

Form Validation: Ensures all fields are correctly filled.


Tech Stack

1.Frontend: React.js

2.Backend: Node.js, Express.js

3.Database: MongoDB

4.APIs: RESTful APIs


Installation Guide

1. Prerequisites

Node.js: Version 14 or higher

MongoDB: Local or Atlas instance

npm: Installed with Node.js


2. Clone the Repository

git clone https://github.com/username/Event-Management-Dashboard.git
cd Event-Management-Dashboard

3. Backend Setup

cd backend
npm install
node server.js

The backend runs at: http://localhost:5000.


4. Frontend Setup

cd ../frontend
npm install
npm start

The frontend runs at: http://localhost:3000.


Project Structure

Event-Management-Dashboard/
├── backend/
│   ├── models/        # MongoDB Schemas
│   ├── routes/        # API Endpoints
│   ├── server.js      # Main Backend Server
├── frontend/
│   ├── src/           # React Components
│   ├── public/        # Static Files
│   ├── App.js         # Main React App
├── README.md          # Project Documentation



API Endpoints

Event Management

POST /events: Create a new event.

GET /events: Get a list of all events.

PUT /events/:id: Update an event.

DELETE /events/:id: Delete an event.


Attendee Management

POST /attendees: Add a new attendee.

GET /attendees: Get all attendees.

DELETE /attendees/:id: Remove an attendee.


Task Management

POST /tasks: Add a new task.

GET /tasks/:eventId: Get tasks for a specific event.

PUT /tasks/:id: Update task status.
