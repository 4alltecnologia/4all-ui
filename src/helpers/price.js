/* eslint-disable */
export const getFormattedValue = e =>
  !priceToInt(e.target.value) ? '0' : formatPriceOnKeyPress(e, true);

export const formatPrice = price => {
  if (price.toString().includes('R$')) return price;

  return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

export const formatPriceOnKeyPress = (e, symbol) => {
  const value = e.target.value.replace('R$', '');
  const regex = /^[0-9,.\s]*$/;

  if (!value || !regex.test(value) || value === '.' || value === ',')
    return value.replace(/[a-z,.]/gi, '');

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

  let res = str.replace(/[a-zR$]/gi, '');
  res = res.replace('.', '');
  res = res.replace(',', '');
  res = parseInt(res, 10);

  return res;
};

export const getTargetInputParams = e => {
  return {
    pos: e.target.selectionStart,
    prevValue: e.target.defaultValue,
    selectionReplacement:
      e.target.defaultValue.length === e.target.value.length,
    replacedAll: e.target.value.length === 4,
    backspaceClick: e.target.defaultValue.length > e.target.value.length,
  };
};

export const adjustCaretPosition = (inputParams, formattedValue) => {
  const {
    pos,
    prevValue,
    selectionReplacement,
    backspaceClick,
    replacedAll,
  } = inputParams;
  const {
    dotAddedInValue,
    nextToComma,
    nextToDot,
    currDotPosition,
    dotRemovedFromValue,
    currCommaPosition,
    secondNextToComma,
    sameLength,
  } = formattedInputInformations(inputParams, formattedValue);

  let backspaceInLastPosition = false;
  if (prevValue.length === formattedValue.length) {
    backspaceInLastPosition =
      backspaceClick && pos + 1 === formattedValue.length;
  } else if (prevValue.length > formattedValue.length) {
    backspaceInLastPosition = backspaceClick && pos === formattedValue.length;
  }

  if (dotAddedInValue) {
    if (nextToComma || pos === 4) {
      return pos;
    } else {
      return pos + 1;
    }
  } else if (nextToDot) {
    if (selectionReplacement) {
      return pos;
    } else {
      return currDotPosition;
    }
  } else if (dotRemovedFromValue) {
    return pos - 1;
  } else if (nextToComma) {
    if (selectionReplacement) {
      return pos;
    } else if (backspaceInLastPosition) {
      return formattedValue.length + 1;
    } else {
      return currCommaPosition;
    }
  } else if (backspaceInLastPosition) {
    return prevValue.length;
  } else if (replacedAll) {
    return formattedValue.length;
  } else if (secondNextToComma && sameLength && !selectionReplacement) {
    return pos - 1;
  } else {
    return pos;
  }
};

const formattedInputInformations = (inputParams, formattedValue) => {
  const { pos, prevValue } = inputParams;
  return {
    prevHasDot: prevValue.includes('.'),
    currHasDot: formattedValue.includes('.'),
    dotAddedInValue: !prevValue.includes('.') && formattedValue.includes('.'),
    dotRemovedFromValue:
      prevValue.includes('.') && !formattedValue.includes('.'),
    prevCommaPosition: prevValue.indexOf(','),
    currCommaPosition: formattedValue.indexOf(','),
    prevDotPosition: prevValue.indexOf('.'),
    currDotPosition: formattedValue.indexOf('.'),
    nextToComma: pos - 1 === prevValue.indexOf(',') + 1,
    nextToDot: pos - 1 === prevValue.indexOf('.') + 1,
    secondNextToComma: pos - 2 === prevValue.indexOf(',') + 1,
    sameLength: prevValue.length === formattedValue.length,
  };
};

/* eslint-enable */
