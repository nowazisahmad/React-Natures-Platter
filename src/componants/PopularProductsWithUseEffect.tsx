import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import type { IPopularProduct } from "../type";
import PopularProductCard from "./PopularProductCard";

interface IPopularProductsWithUseEffectProps {
  cart: IPopularProduct[];
  setCart: Dispatch<SetStateAction<IPopularProduct[]>>;
}

const PopularProductsWithUseEffect = ({
  cart,
  setCart,
}: IPopularProductsWithUseEffectProps) => {
  // useEffect(Fn, dependenceArray)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    console.log("Use effect triggered");

    fetch("/popular-products.json")
      .then((res) => res.json())
      .then((data) => {
        setPopularProducts(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setError(e);
      });
  }, []);

  console.log(popularProducts, "popular products");

  return (
    <div className="my-[80px] container mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-[#179800]">
        Popular Products with useEffect
      </h2>

      {loading ? (
        <h2 className="font-bold text-5xl text-center">Loading....</h2>
      ) : error ? (
        "SOmething is wrong "
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {popularProducts.map((product: IPopularProduct) => {
            //   console.log(product, "product");
            return (
              <PopularProductCard
                key={product.title}
                product={product}
                cart={cart}
                setCart={setCart}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PopularProductsWithUseEffect;