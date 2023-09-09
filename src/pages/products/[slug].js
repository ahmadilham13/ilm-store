import { getAllProducts, getProduct } from "@/api/products";
import Layout from "@/components/layouts";
import BreadCrumbs from "@/components/sections/breadcrumbs";
import DetailProduct from "@/components/sections/detailProduct";

export default function ProductDetail(data) {
  const productDetail = data.data.data.data 
  
  return (
    <Layout>
      <BreadCrumbs />
      <DetailProduct data={productDetail} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const products = await getAllProducts();

  const paths = products.data.data.data.map((value) => {
    return {
      params: {slug: value.slug}
    }
  })

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const productSlug = params.slug;
  const selectedProduct = await getProduct(productSlug);

  return {
    props: {
      data: selectedProduct.data,
    },
    revalidate: 10,
  };
}
