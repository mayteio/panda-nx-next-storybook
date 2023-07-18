import { render } from '@testing-library/react';

import StyledSystem from './styled-system';

describe('StyledSystem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StyledSystem />);
    expect(baseElement).toBeTruthy();
  });
});
