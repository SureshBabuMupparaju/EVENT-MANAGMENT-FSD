

import React, { useState } from 'react';
import axios from 'axios';

function CreateEvent({ onCreate }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  const handleCreateEvent = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/events', { title, description, date, location });
      onCreate(response.data.event);
      setTitle('');
      setDescription('');
      setDate('');
      setLocation('');
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Create Event</h2>
      <form onSubmit={handleCreateEvent}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <input type="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
        <button type="submit">Create Event</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default CreateEvent;
