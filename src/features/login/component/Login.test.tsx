import React from 'react';
//import { testRender, makeTestStore } from '../../../store/test-utils';
//import { loadSetsSuccess, setCurrentSet, zoomImage } from '../dataLayer';
import { useDispatch, useSelector } from 'react-redux';
import { Login } from './Login';
import { Action } from 'redux';
import { AuthorizeUserActions } from '../store/action';

import { render, fireEvent } from '@testing-library/react';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}));

const useDispatchMock = useDispatch as jest.Mock;
const useSelectorMock = useSelector as jest.Mock;

const dispatchResultRecorder = {} as any;
const fakeDispatch = (action: AuthorizeUserActions) => {

    console.log( 'Calling Fake Dispatch', action.type);
    dispatchResultRecorder[action.type] = action;
};

useDispatchMock.mockImplementation(() => fakeDispatch);

describe('the Login component', () => {
    it('renders the login page', () => {
        const { asFragment } = render(<Login />);

        expect(asFragment()).toMatchSnapshot();
    });
});
