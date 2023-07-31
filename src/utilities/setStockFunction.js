export const setStockFunction = (event, setStock, setSelected) => {
  setStock(Number(event.target.value));
  if (Number(event.target.value) === 1) {
    setSelected("S");
  } else if (Number(event.target.value) === 2) {
    setSelected("M");
  } else if (Number(event.target.value) === 3) {
    setSelected("L");
  } else if (Number(event.target.value) === 4) {
    setSelected("XL");
  } else if (Number(event.target.value) === 5) {
    setSelected("XXL");
  }
};
