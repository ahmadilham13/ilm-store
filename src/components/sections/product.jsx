import { getAllCategories } from "@/api/categories";
import { getAllProducts, getProductByCat } from "@/api/products";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductSection() {
  // set format price
  const formatter = new Intl.NumberFormat("rupiah", {
    style: "currency",
    currency: "IDR",
  });

  // all product
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      getAllProducts().then(function (result) {
        const { data: res } = result;
        setProduct(res.data);
      });
    };
    getProducts();
  }, []);

  // all categories
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      getAllCategories().then(function (result) {
        const { data: res } = result;
        setCategory(res.data);
      });
    };
    getCategories();
  }, []);

  // event select category
  const chooseCategory = (e) => {
    const sortPerpage = document.getElementById("sortData").value;
    if (e.target.value === "") {
      getAllProducts(sortPerpage).then(function (result) {
        const { data: res } = result;
        setProduct(res.data);
      });
    } else {
      getProductByCat(e.target.value, sortPerpage).then(function (result) {
        const { data: res } = result;
        setProduct(res.data);
      });
    }
  };

  // event sort data product
  const sortProductData = (e) => {
    const category = document.getElementById("category").value;
    if (category) {
      getProductByCat(category, e.target.value).then(function (result) {
        const { data: res } = result;
        setProduct(res.data);
      });
    } else {
      getAllProducts(e.target.value).then(function (result) {
        const { data: res } = result;
        setProduct(res.data);
      });
    }
  };

  return (
    <div className="bg-white mt-5">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex gap-2 justify-between ">
          <div className="text-black relative h-10 w-72 min-w-[200px]">
            <select
              onChange={(e) => {
                chooseCategory(e);
              }}
              className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500 focus:border-2 focus:border-gray-800 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              id="category"
            >
              <option value="">All</option>
              {category.map((value, index) => {
                return (
                  <option key={index} value={value.slug}>
                    {value.title}
                  </option>
                );
              })}
            </select>
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-800 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-800 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-800 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Select a Category
            </label>
          </div>
          <div className="text-black relative h-10 w-25 min-w-[200px]">
            <select
              onChange={(e) => {
                sortProductData(e);
              }}
              className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500 focus:border-2 focus:border-gray-800 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              id="sortData"
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-800 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-800 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-800 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Sort
            </label>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {product.map((value, index) => {
            return (
              <div
                key={index}
                className="bg-white border border-white group relative px-2 rounded-md dark:bg-gray-800 dark:border-gray-800"
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL_IMAGE}${value.image}`}
                    alt="Front of men&#039;s Basic Tee in black."
                    className="w-full h-full mb-5 object-center lg:h-auto lg:w-auto"
                    width={300}
                    height={300}
                    priority={true}
                  />
                </div>
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700 dark:text-white">
                      <span aria-hidden="true" className="inset-0"></span>
                      {/* {value.title} */}
                      {value.title.length >= 20
                        ? value.title.substring(0, 20) + "..."
                        : value.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-white">
                      Category: {value.category}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {formatter.format(value.price)}
                  </p>
                </div>
                <div className="grid">
                  <Link
                    href={`/products/${value.slug}`}
                    className="text-center mt-3 mb-3 bg-gray-700 py-3 px-3 rounded-md dark:hover:bg-gray-500"
                  >
                    Details
                  </Link>
                  <button className="mt-3 mb-3  bg-indigo-600 py-3 px-3 rounded-md hover:bg-indigo-700">
                    Add To Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
