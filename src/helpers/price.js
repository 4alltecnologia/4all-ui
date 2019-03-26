/* eslint-disable */
export const getFormattedValue = e =>
  !priceToInt(e.target.value) ? 0 : formatPriceOnKeyPress(e, true);

export const formatPrice = price => {
  if (price.toString().includes('R$')) return price;

  return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

export const formatPriceOnKeyPress = (e, symbol) => {
  const value = e.target.value.replace('R$', '');
  const regex = /^[0-9,.\s]*$/;

  if (!value || !regex.test(value) || value === '.' || value === ',') return '';

  let val = value.replace(/[^\d]/g, '');
  if (val.length === 1) {
    val = val.replace(/(\d{1}).*/g, '0,0$1');
  } else if (val.length < 3) {
    val = val.replace(/([0-9]{2}).*/g, '0,$1');
  } else {
    val = val.replace(/^0/g, '');
    val = val.replace(/([\d]{2})$/g, ',$1');
    val = val.replace(/(\d)(?=(\d{3})+\b)/g, '$1.');
  }

  if (symbol === true) val = `R$ ${val}`;

  return val;
};

export const priceToInt = price => {
  let str;

  if (typeof price === 'number') {
    str = `R$ ${price}`;
    str = str.replace('.', '');
    str = String(str);
  } else if (price === '') {
    str = 'R$ 0,00';
  } else {
    str = String(price);
  }

  let res = str.replace('R$', '');
  res = res.replace('.', '');
  res = res.replace(',', '');
  res = parseInt(res, 10);

  return res;
};
/* eslint-enable */
