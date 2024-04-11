import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { CardProduct } from "../../components/ui/CardProduct";
import { Hero } from "../../components/ui/Hero";
import { getProducts } from "../../service";
import styles from "./Home.module.css";
import { useState } from "react";

const Home = () => {
  const [page, setPage] = useState(1);

  //sentencia de tankQuery, maneja cacheo y paginacion
  // products seria el set y getProducts es la funcion que llama al fetch del redux
  const { data, isLoading, error } = useQuery({
    queryKey: ["products", page],
    queryFn: () => getProducts(page),
    placeholderData: keepPreviousData,
  });
  console.log(data);
  

  // const [products, setProducts] = useState<Product[]>([]);
  // const [error, setError] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   getProducts().then((data) => {
  //     setProducts(data);
  //   }).catch(() => {
  //     setError(true)
  //   }).finally(() => {
  //     setIsLoading(false);
  //   })

  // }, []);

  return (
    <>
      <Hero />
      <Toaster richColors />
      {isLoading && <p>loading....</p>}
      {error && <p>Something went wrong!!</p>}
      <div className={styles.container}>
        {data?.map((product) => (
          <CardProduct key={product.tail} product={product} />
        ))}
      </div>
      <div
        className={styles.paginationContainer}
      >
        <button
          className={styles.paginationButton}
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previos Page
        </button>
        <div
          className={styles.paginationActive}
        >
          <span>{page}</span>
        </div>
        <button
          className={styles.paginationButton}
          onClick={() => setPage(page + 1)}
        >
          Next Page
        </button>
      </div>
    </>
  );
};

export default Home;
