import supabase from "@/supabase/supabase";
import { useEffect, useState } from "react";
import type { Tables } from '@/supabase/database.types';

// 1. email 상태 설정해주세요 uesState

// type Product = Database['public']['Tables']['products']['Insert'];
type Product = Omit<Tables<'products'>,'created_at'>

function useProducts(){
  
  const [products,setProducts] = useState<Product[]|null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchProducts = async () => {
      const {data, error} = await supabase
      .from('products')
      .select('id, name, price, image_url, description, sale');

      if(data){
        setProducts(data);
        setLoading(false)
      }

      if(error){
        console.error('상품 가져오기 실패');
        return null;
      }
    }
    fetchProducts();

  },[])

  return {products, loading}

}



export default useProducts;