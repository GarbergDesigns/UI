import { render } from '@testing-library/react';
import React from 'react';
import Button from "./Button";

describe('#Button', () => {
    it('should render button correctly', () => {
        const wrapper = render(<Button>Button</Button>);
        expect(wrapper.getByText('Button')).toBeInTheDocument();
        expect(() => wrapper.unmount()).not.toThrow();
    })
})