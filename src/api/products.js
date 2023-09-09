// import { api } from ".";
import { apiCustom } from "@/utils/api";
import { getAccessToken } from "./auth";
import axios from "axios";

const ENDPOINT = {
  PRODUCTS: "products",
  PRODUCT: "product",
  SLUG: "slug",
  CATEGORY: "category",
};

const getAllProducts = async (perpage = 10) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_APP_URL}api/${process.env.NEXT_PUBLIC_API_VERSION}/${ENDPOINT.PRODUCTS}`).then(function(results) {
      return results;
    })
    return response
  } catch (err) {
    throw Error(err)
  }
}

const getProduct = async (slug) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_APP_URL}api/${process.env.NEXT_PUBLIC_API_VERSION}/${ENDPOINT.PRODUCT}`, {params: {slug: slug}}).then(function(results) {
      return results
    }) 
    
    return response;
  } catch (err) {
    throw Error(err);
  }
};

const getProductByCat = async (cat, perpage = 10) => {
  try {
    const results = getAccessToken().then(function (token) {
      const url = `${ENDPOINT.PRODUCT}/${ENDPOINT.CATEGORY}/${cat}?perpage=${perpage}`;
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
