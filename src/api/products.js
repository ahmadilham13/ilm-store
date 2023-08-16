import { api } from ".";
import { getAccessToken } from "./auth";

const ENDPOINT = {
  PRODUCTS: "products",
  PRODUCT: "product",
  CATEGORY: "category",
};

const getAllProducts = async () => {
  try {
    const results = getAccessToken().then(function (token) {
      const url = `${ENDPOINT.PRODUCTS}`;
      const response = api.get(url, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      return response;
    });

    return results;
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
    const results = getAccessToken().then(function (token) {
      const url = `${ENDPOINT.PRODUCT}/${ENDPOINT.CATEGORY}/${cat}`;
      const response = api.get(url, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      return response;
    });

    return results;
  } catch (err) {
    throw Error(err);
  }
};

export { getAllProducts, getProduct, getProductByCat };
