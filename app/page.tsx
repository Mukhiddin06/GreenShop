"use client"
import BlogPost from "@/components/BlogPosts/BlogPost";
import FindMore from "@/components/FindMore/FindMore";
import Footer from "@/components/Footer/Footer";
import SwiperDemo from "@/components/Swiper";
import { Context } from "@/context/Context";
import Categories from "@/services/Categories";
import Products from "@/services/Products";
import { useContext, useState } from "react";

interface TagTypes {
  tagName: string
  path: string | null
}

export default function Home() {
  const {setTags} = useContext(Context)
  const [isActive, setIsActive] = useState("")
  const [sortBy, setSortBy] = useState("Default sorting");

  const tags: TagTypes[] = [
    {
      tagName: "All Plants",
      path: null
    },
    {
      tagName: "New Arrivals",
      path: "new-arrivals"
    },
    {
      tagName: "Sale",
      path: "sale"
    }
  ]

  function handleClickAll(name:string, path:string | null){
    setIsActive(name)
    setTags(path)
  }

  return (
    <>
      <SwiperDemo />
      <div className="w-[1200px] flex space-x-[50px] mx-auto mt-[46px]">
        <div className="w-[25%]">
          <Categories />
        </div>
        <div className="w-[75%]">
          <div className="flex items-center justify-between mb-[20px]">
            <ul className="flex space-x-[37px]">{tags.map((item: TagTypes, index: number) => <li onClick={() => handleClickAll(item.tagName, item.path)} className={`text-[#3D3D3D] text-[15px] leading-[16px] ${isActive == item.tagName ? "tag-name text-[#46A358] font-bold" : ""}`} key={index}>{item.tagName}</li>)}</ul>
            <div className="flex items-center space-x-[8px]">
              <p>Short by:</p>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="outline-none">
              <option value="Default sorting">Default sorting</option>
              <option value="Price">Price</option>
            </select>
            </div>
          </div>
          <Products sortBy={sortBy}/>
        </div>
      </div>
      <div>
        <FindMore/>
      </div>
      <div className="mb-[100px]">
        <BlogPost/>
      </div>
      <footer><Footer/></footer>
    </>
  );
}
