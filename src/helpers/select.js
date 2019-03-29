const initSelectedOptions = (options) => {
  options.forEach((item) => {
    item.style.display = 'flex';
  });
};

const getMaxOptions = () => {
  const marginItem = 7;
  const marginContainer = 16;
  const paddingContainer = 32;
  const selectedOptions = document.getElementsByClassName('select__multi-value');
  initSelectedOptions([...selectedOptions]);
  const multiContainerWidth = document.getElementsByClassName('select__value-container--is-multi')[0].offsetWidth + marginContainer - paddingContainer;
  const multiItemWidths = [...selectedOptions].map(item => item.offsetWidth + marginItem);
  let sumWidth = 0;
  let maxOptions = 0;
  multiItemWidths.forEach((width) => {
    sumWidth += width;
    if (sumWidth < (multiContainerWidth - 10)) {
      maxOptions += 1;
    } else {
      return; // eslint-disable-line
    }
  });

  return maxOptions;
};

const toggleOptionSelectedCounter = (totalOptions, maxOptions) => {
  const qtdMoreValues = document.getElementsByClassName('multi-value-qtd-options')[0];

  if (qtdMoreValues && totalOptions > maxOptions) {
    qtdMoreValues.style.display = 'flex';
    qtdMoreValues.innerHTML = `+${totalOptions - maxOptions}`;
  } else if (qtdMoreValues) {
    qtdMoreValues.style.display = 'none';
  }
};

export const formatSelectValues = () => {
  const maxOptions = getMaxOptions();
  const selectedOptions = [...document.getElementsByClassName('select__multi-value')];
  const totalOptions = selectedOptions.length;
  toggleOptionSelectedCounter(totalOptions, maxOptions);

  selectedOptions.forEach((item, index) => {
    if ((index + 1) > maxOptions) {
      item.style.display = 'none';
    } else {
      item.style.display = 'flex';
    }
  });
};
