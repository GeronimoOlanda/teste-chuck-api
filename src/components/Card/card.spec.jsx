import { render, screen } from '@testing-library/react';
import { Card } from '.';

describe('<Card />', () => {
  it('Should be render when load the page', () => {
    expect(screen.queryByRole('paragraph')).toBeCalledTimes(1);
  });
});
