import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { sendMessage } from "./services/contact-us";
import ContactUs from "./Pages/Contact-us";

jest.mock('./services/contact-us')

test("Contact us page", async () => {


  const { findByTestId } = render(<ContactUs />);

  const email = await findByTestId("email");
  const message = await findByTestId("message");
  const submit = await findByTestId("submit");

  fireEvent.change(email, { target: { value: "test@test.com" } });
  fireEvent.change(message, { target: { value: "testing" } });

  fireEvent.click(submit);
  expect(sendMessage).toBeCalledTimes(1)
});
