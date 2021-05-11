import React from 'react';
import { render } from '@testing-library/react';
import Input from './Input';

describe('Input component', () => {
  let sut;
  let props;

  it('should match Snapshot', () => {
    sut = render(<Input {...props} />);

    expect(sut).toMatchSnapshot();
  });
});
