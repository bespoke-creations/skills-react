import React from 'react';
import axios from "axios";
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import { BASE_URL, formSubmit } from "./utils";
import ContactUs from './ContactUs';

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Contact Us Form', () => {
  it("should render the basic fields", () => {
    render(<ContactUs />);
    expect(
      screen.getByRole("heading", { name: "Contact Us" })
    ).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /email/i })).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /body/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
  });
});

describe("Contact form submission", () => {
  describe("when API call is successful", () => {
    it("should return success message", async () => {
      const expectedResult: string = "success";
      const formData = {
        email: 'email@domain.com',
        subject: 'Subject goes here',
        body: 'bodyText'
        }
      mockedAxios.post.mockResolvedValueOnce( expectedResult);
        // when
        const result = await formSubmit(formData);

       // then 
      expect(axios.post).toHaveBeenCalledWith(BASE_URL, formData);
      expect(result).toEqual(expectedResult);
    });
  });
});