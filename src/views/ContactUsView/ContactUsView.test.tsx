import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactUsView from '.';
import axios from "axios";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Contact Us', () => {
  it('validates model on button click', () => {
    const handleSubmit = jest.fn(e => e.preventDefault());

    const { getByRole } = render(
      <ContactUsView onSubmit={handleSubmit} />
    );

    mockedAxios.post.mockImplementation(() => Promise.resolve({ success: true }));
    userEvent.click(getByRole('button'));
    expect(handleSubmit).toHaveBeenCalled();
  });
});
