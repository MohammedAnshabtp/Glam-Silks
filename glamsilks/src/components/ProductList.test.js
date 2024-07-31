import {render,screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import {store} from '../store';
import ProductList from './ProductList';
import { expect } from 'chai';


test('render products',async () =>{
    render(
        <Provider store={store}>
            <ProductList/>
        </Provider>
    );

    const products = await screen.findAllByText(/Product/i);
    expect(products).toHaveLength(2);
})