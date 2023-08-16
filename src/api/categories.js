import { api } from ".";
import { getAccessToken } from "./auth";

const ENDPOINT = {
  CATEGORY: "categories",
};

const getAllCategories = async () => {
  try {
    const results = getAccessToken().then(function (token) {
      const url = `${ENDPOINT.CATEGORY}`;
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

export { getAllCategories };
