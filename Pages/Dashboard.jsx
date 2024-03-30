// frontend/src/pages/Dashboard.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventList from '../Components/Events/Eventlist';
import CreateEvent from '../Components/Events/CreateEvent';

function Dashboard() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await axios.get('/api/events');
        setEvents(response.data);
      } catch (error) {
        setError(error.response.data.message);
      }
    }

    fetchEvents();
  }, []);

  const handleCreateEvent = async (eventData) => {
    try {
      const response = await axios.post('/api/events', eventData);
      setEvents([...events, response.data.event]);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Create Event</h2>
      <CreateEvent onCreate={handleCreateEvent} />
      <h2>Events</h2>
      {error && <p>{error}</p>}
      <EventList events={events} />
    </div>
  );
}

export default Dashboard;
