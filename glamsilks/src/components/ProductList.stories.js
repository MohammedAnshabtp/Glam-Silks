import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import ProductList from '../components/ProductList';

const MockedProductList = () => {
  React.useEffect(() => {
    store.dispatch({
      type: 'products/fetchProducts/fulfilled',
      payload: [
        { id: 1, name: 'Product 1', description: 'Description 1', price: 10 },
        { id: 2, name: 'Product 2', description: 'Description 2', price: 20 },
      ],
    });
  }, []);

  return (
    <Provider store={store}>
      <ProductList />
    </Provider>
  );
};

export default {
  title: 'Components/ProductList',
  component: MockedProductList,
};

const Template = (args) => <MockedProductList {...args} />;

export const Default = Template.bind({});
Default.args = {};
