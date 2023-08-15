import { api } from ".";
import { getToken } from "./auth";
import { getCookie } from "cookies-next";

const ENDPOINT = {
  CATEGORY: "categories",
};

const getAllCategories = async () => {
  try {
    // for check token
    getToken();

    const url = `${ENDPOINT.CATEGORY}`;
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

export { getAllCategories };
