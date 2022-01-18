import React, { useState } from 'react';
import type { FC } from 'react';
import axios from 'axios';
import { backendUrl } from 'src/config';

interface ContactUsViewProps {
  onSubmit: (event: React.SyntheticEvent, data: Data) => void;
}

interface Data {
  email?: string;
  subject?: string;
  body?: string;
}

const handleSubmit = async (event: React.SyntheticEvent, data: Data) => {
  event.preventDefault();

  try {
    await axios.post(`${backendUrl}`, data);
  } catch (err) {
    console.error(err);
  }
};

const ContactUsView: FC<ContactUsViewProps> = ({ onSubmit = handleSubmit }) => {
  const [data, setData] = useState({
    email: '',
    subject: 'skills-react Submission',
    body: ''
  });

  const handleChange = (field: string, value: string) => {
    setData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <form onSubmit={(e) => onSubmit(e, data)}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          value={data.email}
          onChange={(e) => handleChange('email', e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="subject" className="form-label">Subject</label>
        <input
          type="text"
          className="form-control"
          name="subject"
          id="subject"
          aria-describedby="subject"
          value={data.subject}
          disabled
        />
      </div>
      <div className="mb-3 form-floating">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="body"
          value={data.body}
          onChange={(e) => handleChange('body', e.target.value)}
        />
        <label htmlFor="body">Body</label>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ContactUsView;
