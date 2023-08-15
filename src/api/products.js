import { api } from ".";
import { getToken } from "./auth";
import { getCookie } from "cookies-next";

const ENDPOINT = {
  PRODUCTS: "products",
  PRODUCT: "product",
  CATEGORY: "category",
};

const getAllProducts = async () => {
  try {
    // for check token
    getToken();

    const url = `${ENDPOINT.PRODUCTS}`;
    const response = await api.get(url, {
      headers: {
        Authorization:
          "Bearer " + getCookie(process.env.NEXT_PUBLIC_COOKIE_TOKEN),
      },
    });
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
    // for check token
    getToken();

    const url = `${ENDPOINT.PRODUCT}/${ENDPOINT.CATEGORY}/${cat}`;
    const response = await api.get(url, {
      headers: {
        Authorization:
          "Bearer " + getCookie(process.env.NEXT_PUBLIC_COOKIE_TOKEN),
      },
    });
    return response;
  } catch (err) {
    throw Error(err);
  }
};

export { getAllProducts, getProduct, getProductByCat };
