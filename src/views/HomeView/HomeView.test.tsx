import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HomeView from '.';

describe('Home', () => {
  it('should have home page text', () => {
    const { getByText } = render(
      <HomeView />
    );

    expect(getByText('This is Home page.')).toBeInTheDocument();
    // const wrapper = mount(
    //   <ContactUsView onSubmit={handleSubmit}/>
    // );
    // const instance = wrapper.instance();
    // const submitBtn = instance.find('button')
    // submitBtn.simulate('click')
    // expect(handleSubmit).toHaveBeenCalled();
  });
});
