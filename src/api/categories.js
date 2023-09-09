import axios from "axios";

const ENDPOINT = {
  CATEGORY: "categories",
};

const getAllCategories = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_APP_URL}api/${process.env.NEXT_PUBLIC_API_VERSION}/${ENDPOINT.CATEGORY}`).then(function(results) {
      return results;
    })
    return response 
  } catch (err) {
    throw Error(err)
  }
}

export { getAllCategories };
