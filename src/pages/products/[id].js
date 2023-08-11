import { getAllProducts, getProduct } from "@/api/products";
import Layout from "@/components/layouts";
import BreadCrumbs from "@/components/sections/breadcrumbs";
import DetailProduct from "@/components/sections/detailProduct";

export default function ProductDetail(data) {
  return (
    <Layout>
      <BreadCrumbs />
      <DetailProduct data={data} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const products = await getAllProducts();
  const dataProducts = await products.data;
  // console.log(products);
  const paths = dataProducts.map((value) => {
    return {
      params: { id: value.id.toString() },
    };
  });

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const productId = params.id;
  const selectedProduct = await getProduct(parseInt(productId));

  return {
    props: {
      data: selectedProduct.data,
    },
    revalidate: 10,
  };
}
