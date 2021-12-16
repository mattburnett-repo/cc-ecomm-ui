// import mockResponse from '../../__mocks__/productDetail_response.json'
import { render } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import Product from '../../features/product/product';

describe('ProductDetail', () => {
    const mockResponse = jest.mock('../../__mocks__/productDetail_response.json');
    fetchMock.enableMocks();

    it('gets a mock data record THIS LOOKS INCOMPLETE', async () => { // TODO: this looks incomplete... Look at axios.
        fetch.once(JSON.stringify(mockResponse));
        // expect(fetch).toHaveBeenCalledWith('http://localhost:4000/api/v1/product/2')
    });
    it('calls a ProductDetail display component', () => {
        render(<Product />)
    })

})
