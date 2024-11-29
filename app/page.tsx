import SwiperDemo from "@/components/Swiper";
import Categories from "@/services/Categories";
import Products from "@/services/Products";

export default function Home() {
  return (
    <>
    <SwiperDemo/>
    <div className="w-[1200px] flex space-x-[50px] mx-auto mt-[46px]">
      <div className="w-[25%]">
        <Categories/>
      </div>
      <div className="w-[75%]">
        <Products/>
      </div>
    </div>
    </>
  );
}
