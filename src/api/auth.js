import { auth } from ".";

const ENDPOINT = {
  TOKEN: "getAccessToken",
  CHECKTOKEN: "checkToken",
};

const getAccessToken = async () => {
  try {
    const url = `${ENDPOINT.TOKEN}`;
    const data = {
      username: process.env.NEXT_PUBLIC_USERNAME,
      password: process.env.NEXT_PUBLIC_PASSWORD,
    };
    const token = await auth.post(url, data).then((res) => {
      return res.data.access_token;
    });

    return token;
  } catch (err) {
    throw Error(err);
  }
};

export { getAccessToken };
