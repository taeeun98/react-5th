import { useParams } from "@/router/RouterProvider";
import S from "./ProductDetail.module.css";
import { useEffect, useState } from "react";
import supabase from "@/supabase/supabase";
import type { Tables } from "@/supabase/database.types";

type Product = Tables<'products'>

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<null| Product>(null);
  const [error, setError] = useState<string |null>(null);


  useEffect(() => {
  
    const fectchProduct = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();


        if(error){
            console.log(error);
            setError('해당하는 상품 데이터 없음')
        } else {
            setProduct(data);
        }

    };

    fectchProduct();
  }, [id]);


  console.log(product);
  if(!product) return <p>{error ?? '해당상품이없습니다'}</p>

 const realPrice = product.price - product.price * (product.sale * 0.01);
return (
  <div className={S.container}>
    <img className={S.image} src={product.image_url} alt={product.name} />
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <div>
      <span>{product.price.toLocaleString()}원</span>
      <span>할인율 : {product.sale}%</span>
      <span>{realPrice.toLocaleString()}원</span>
    </div>
  </div>
)

}
export default ProductDetail;
