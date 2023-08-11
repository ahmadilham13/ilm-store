import Layout from "@/components/layouts";
import BreadCrumbs from "@/components/sections/breadcrumbs";
import ProductSection from "@/components/sections/product";

export default function Product() {
  return (
    <Layout>
      <BreadCrumbs />
      <ProductSection />
    </Layout>
  );
}
