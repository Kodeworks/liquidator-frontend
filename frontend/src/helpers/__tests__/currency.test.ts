import { currencyFormat } from '../currency';

test('Formats a number with more than 3 digits with " " as thousands separator and two decimal places', () => {
  const number1 = 120000;
  const number2 = 22000.56;
  const number3 = -1000000.42;
  const formattedNumber1 = '120 000';
  const formattedNumber2 = '22 001';
  const formattedNumber3 = '-1 000 000';

  expect(currencyFormat(number1)).toEqual(formattedNumber1);
  expect(currencyFormat(number2)).toEqual(formattedNumber2);
  expect(currencyFormat(number3)).toEqual(formattedNumber3);
});

test('Formats a number with less than 3 digits without " " and with two decimal places.', () => {
  const number1 = 125.6;
  const number2 = -125.6;
  const formattedNumber1 = '126';
  const formattedNumber2 = '-126';

  expect(currencyFormat(number1)).toEqual(formattedNumber1);
  expect(currencyFormat(number2)).toEqual(formattedNumber2);
});
