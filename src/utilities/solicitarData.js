import data from "../data/data.json";

export const solicitarData = () => {
  //solicita datos del json
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
};

export const solicitarItemPorId = (id) => {
  //busca productos via id en el json
  return new Promise((resolve, reject) => {
    const item = data.find((datos) => datos.id === id);

    if (item) {
      resolve(item);
    } else {
      reject({
        error: "No se encontró el producto",
      });
    }
  });
};
