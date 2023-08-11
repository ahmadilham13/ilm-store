import api from ".";

const ENDPOINT = {
  PRODUCT: "products",
  CATEGORY: "category",
};

const getAllProducts = async () => {
  try {
    const response = await api.get(ENDPOINT.PRODUCT);
    return response;
  } catch (err) {
    throw Error(err);
  }
};

const getProduct = async (id) => {
  try {
    const response = await api.get(`${ENDPOINT.PRODUCT}/${parseInt(id)}`);
    return response;
  } catch (err) {
    throw Error(err);
  }
};

const getProductByCat = async (cat) => {
  try {
    const response = await api.get(
      `${ENDPOINT.PRODUCT}/${ENDPOINT.CATEGORY}/${cat}`
    );
    return response;
  } catch (err) {
    throw Error(err);
  }
};

export { getAllProducts, getProduct, getProductByCat };
