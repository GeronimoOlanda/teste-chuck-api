import { Buttonn } from './index';
import { render } from '@testing-library/react';
describe('<Button />', () => {
  it('Should render when we click in the button', () => {
    const fn = jest.fn();
    render(<Buttonn text="EXIBIR OUTRA CITAÇÃO" onClick={fn} />);
  });
});
