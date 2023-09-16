import { getAllCategories } from "@/api/categories";
import { getAllProducts } from "@/api/products";
import Layout from "@/components/layouts";
import BreadCrumbs from "@/components/sections/breadcrumbs";
import ProductSection from "@/components/sections/product";
import axios from "axios";
import { withIronSessionSsr } from "iron-session/next";


export default function Product() {
  return (
    <Layout>
      <BreadCrumbs />
      <ProductSection/>
    </Layout>
  );
}

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    const user = req.session.user;

    // generate token if not exist in session
    if(!user?.token) {
      const data = {
        username: process.env.NEXT_PUBLIC_USERNAME,
        password: process.env.NEXT_PUBLIC_PASSWORD
      }
      const response = await axios.post(`${process.env.NEXT_PUBLIC_APP_URL}api/${process.env.NEXT_PUBLIC_API_VERSION}/getAccessToken`, data)
      req.session.user = {
        token: response.data.data.access_token
      }
      await req.session.save()
    }
    
    return {
      props: {
        token: req.session.user.token,
      },
    };
  },
  {
    cookieName: process.env.NEXT_PUBLIC_COOKIE_KEY,
    password: process.env.NEXT_PUBLIC_COOKIE_PASSWORD,
    ttl: process.env.NEXT_PUBLIC_COOKIE_EXPIRED,
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  },
);
