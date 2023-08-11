import api from ".";

const ENDPOINT = {
  PRODUCT: "products",
  CATEGORY: "categories",
};

const getAllCategories = async () => {
  try {
    const response = await api.get(`${ENDPOINT.PRODUCT}/${ENDPOINT.CATEGORY}`);
    return response;
  } catch (err) {
    throw Error(err);
  }
};

export { getAllCategories };
