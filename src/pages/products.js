import { getAllCategories } from "@/api/categories";
import { getAllProducts } from "@/api/products";
import Layout from "@/components/layouts";
import BreadCrumbs from "@/components/sections/breadcrumbs";
import ProductSection from "@/components/sections/product";

export default function Product(data) {
  return (
    <Layout>
      <BreadCrumbs />
      <ProductSection apiData={data}/>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          name: 'next.js',
        },
      }, // See the "paths" section below
    ],
    fallback: true, // false or "blocking"
  }
}

export async function getStaticProps({params}) {
  const products = await getAllProducts();
  const categories = await getAllCategories()
  return {
    props: {
      products: products.data.data,
      categories: categories.data.data
    },
    revalidate: 10,
  }
}
