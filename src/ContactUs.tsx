import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import {formSubmit} from './utils';

const ContactUs: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [bodyText, setBodyText] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);
  const subject = "skills-react Submission";

  const handleFormSubmit = (e:React.SyntheticEvent) => {
    e.preventDefault();
    formSubmit({
      email: email,
      subject: subject,
      body: bodyText
      }).then(
      (response) => {
        if (response) {
          setSuccess(true);
          setEmail('');
          setBodyText('');
        }
      },
      (error) => {
        if (error.response) {
          setSuccess(false);
        }
      },
    );
  };

  return (
    <Container className="ContactUs">
      <h1>Contact Us</h1>
        <Form className="ContactForm" noValidate onSubmit={(event) => handleFormSubmit(event)}>
          {success && <Alert variant="success">Form successfully submitted!</Alert>}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              value={email} 
              placeholder="Enter email" 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="subject" placeholder="Enter Subject" value={subject} readOnly/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>body</Form.Label>
            <Form.Control 
              as="textarea" 
              value={bodyText} 
              placeholder="Leave a message here" 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBodyText(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form> 
    </Container>
  );
}

export default ContactUs;
