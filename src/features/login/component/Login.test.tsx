import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import { AuthorizeUserActions } from '../store/action';
import { act } from 'react-dom/test-utils';
import { render, screen, wait, waitForElement } from '@testing-library/react';
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
            const { asFragment } = render(<Login />);
            const input = await screen.findByTitle('eMail');
            const password = await screen.findByTitle('password');
            fireEvent.ionChange(input, 'test@home.com');
            fireEvent.ionChange(password, '12345');

            await wait();

            expect(asFragment()).toMatchSnapshot();
        } catch (err) {
            expect(err).toBeUndefined();
        }
    });

    it('Should fail login with incorrect email and password values', async () => {
        try {
            const { asFragment, getByText } = render(<Login />);
            const input = await screen.findByTitle('eMail');
            const password = await screen.findByTitle('password');
            const submitButton = await screen.findByText('Login');
            fireEvent.ionChange(input, 'test@home.com');
            fireEvent.ionChange(password, '12345123');

            fireEvent.click(submitButton);
            const rst = await getByText('Invalid Credentials');
            console.log( 'rst', rst);
            await wait();
            waitForElement(() => getByText('Invalid Credentials')).then((el) => {
                expect(el).toBeDefined();
                //expect(el.value).toEqual('test@test.de');
                console.log('EL', el);
            });
            expect(asFragment()).toMatchSnapshot();



            expect(getByText('Invalid Credentials')).toBeDefined();
        } catch (err) {
            expect(err).toBeUndefined();
        }
    });

    /*it('Should attempt to login', async () => {
        try {
            const { asFragment, findByTitle, findByText } = await act(() => render(<Login />));

            const input = await screen.findByTitle('eMail');
            const password = await screen.findByTitle('password');
            const submitButton = await screen.findByText('Login');
            fireEvent.ionChange(input, 'test@home.com');
            fireEvent.ionChange(password, '12345');

            fireEvent.click(submitButton);

            expect(asFragment()).toMatchSnapshot();
        } catch (err) {
            expect(err).toBeUndefined();
        }
    });*/
});
