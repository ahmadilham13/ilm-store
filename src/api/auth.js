import { getCookie, setCookie } from "cookies-next";
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
      return res.data.data.token;
    });

    const addCookie = () => {
      setCookie(process.env.NEXT_PUBLIC_COOKIE_TOKEN, token, {
        path: "/",
      });
    };
    addCookie();
    return token;
  } catch (err) {
    throw Error(err);
  }
};

const checkAccessToken = async (token) => {
  try {
    const url = `${ENDPOINT.CHECKTOKEN}/token/${token}`;

    const data = await auth.get(url).then((res) => {
      return res.data.code;
    });

    if (data === "EXPIRED") return getAccessToken();

    if (data === "READY")
      return getCookie(process.env.NEXT_PUBLIC_COOKIE_TOKEN);
  } catch (err) {
    throw Error(err);
  }
};

const getToken = async () => {
  const token = getCookie(process.env.NEXT_PUBLIC_COOKIE_TOKEN);

  if (!token) {
    const setNewToken = getAccessToken();
    return setNewToken;
  } else {
    const newToken = checkAccessToken(token);
    return newToken;
  }
};

export { getAccessToken, getToken };
