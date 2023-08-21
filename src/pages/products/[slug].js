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
  // console.log(products);
  const dataProducts = await products;
  const paths = [
    {
      params: { slug: "fdfdf" },
    },
  ];
  // const paths = dataProducts.map((value) => {
  //   return {
  //     params: { slug: "testing" },
  //   };
  // });

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
