import React from 'react';
//import { testRender, makeTestStore } from '../../../store/test-utils';
//import { loadSetsSuccess, setCurrentSet, zoomImage } from '../dataLayer';
import { useDispatch, useSelector } from 'react-redux';
import { Login } from './Login';
import { AuthorizeUserActions } from '../store/action';

import { render } from '@testing-library/react';
import { ionFireEvent as fireEvent } from '@ionic/react-test-utils';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}));

const useDispatchMock = useDispatch as jest.Mock;
const useSelectorMock = useSelector as jest.Mock;

const dispatchResultRecorder = {} as any;
const fakeDispatch = (action: AuthorizeUserActions) => {
    console.log('Calling Fake Dispatch', action.type);
    dispatchResultRecorder[action.type] = action;
};

useDispatchMock.mockImplementation(() => fakeDispatch);

describe('the Login component', () => {
    it('renders the empty login page', () => {
        const { asFragment } = render(<Login />);

        expect(asFragment()).toMatchSnapshot();
    });

    it('Should set email and password values', async () => {
        try {
            const { asFragment, findByTitle } = render(<Login />);

            const input = await findByTitle('eMail');
            const password = await findByTitle('password');
            fireEvent.ionChange(input, 'test@home.com');
            fireEvent.ionChange(password, '12345');

            expect(asFragment()).toMatchSnapshot();
        } catch (err) {
            expect(err).toBeUndefined();
        }
    });

    it('Should attempt to login', async () => {
        try {
            const { asFragment, findByTitle } = render(<Login />);

            const input = await findByTitle('eMail');
            const password = await findByTitle('password');
            fireEvent.ionChange(input, 'test@home.com');
            fireEvent.ionChange(password, '12345');

            expect(asFragment()).toMatchSnapshot();
        } catch (err) {
            expect(err).toBeUndefined();
        }
    });
});
