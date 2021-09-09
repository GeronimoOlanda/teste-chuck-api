import { render, screen } from '@testing-library/react';
import { Card } from '.';

describe('<Card />', () => {
  it('Should be render when load the page', () => {
    render(<Card value={/joke/i} />);
  });
});
