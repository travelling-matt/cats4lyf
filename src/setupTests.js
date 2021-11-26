// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock'

//using mock data for test fetch
//package.json also needs "jest": {
//     "resetMocks": false
// },
fetchMock.enableMocks()