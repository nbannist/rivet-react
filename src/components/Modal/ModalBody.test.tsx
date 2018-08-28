import { mount } from 'enzyme';
import * as React from 'react';

import Modal from './Modal';
import ModalBody from './ModalBody';

describe('<ModalBody />', () => {
    it('renders without error', () => {
        const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
        const cut = mount(<Modal title="foo"><ModalBody>{ children }</ModalBody></Modal>);
        const body = cut.find('ModalBody');

        expect(body.find('.rvt-modal__body').length).toBe(1);
        expect(body.props().children).toBe(children);
    });
});