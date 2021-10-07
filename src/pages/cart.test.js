import { render, screen } from '@testing-library/react';

import { handleSubTotal } from './Cart';

const basket = [
  {
    title: 'book one',
    price: 25
  },
  {
    title: 'book two',
    price: 30
  },
  {
    title: 'book three',
    price: 35
  },
]

test('handleSubTotal should give the amount of the basket', () => {
  const data = handleSubTotal(basket)
  expect(data).toEqual(90)
})