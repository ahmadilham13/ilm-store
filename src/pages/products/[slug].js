import { getAllProducts, getProduct } from "@/api/products";
import Layout from "@/components/layouts";
import BreadCrumbs from "@/components/sections/breadcrumbs";
import DetailProduct from "@/components/sections/detailProduct";
export default function ProductDetail({data}) {
  const productDetail = data
  
  return (
    <Layout>
      <BreadCrumbs />
      <DetailProduct productData={productDetail} />
    </Layout>
  );
}

export async function getStaticPaths() {
  // const products = await getAllProducts();

  if(process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }

  const products = await getAllProducts();

  const paths = products.data.data.data.map((value) => {
    return {
      params: {slug: value.slug}
    }
  })

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  console.log(params.slug)
  // console.log(params)
  const productSlug = params.slug;
  const selectedProduct = await getProduct(productSlug);
  const productData = JSON.parse(JSON.stringify(selectedProduct.data.data.data))
  return {
    props: {
      data: productData,
    },
    revalidate: 10,
  };
}