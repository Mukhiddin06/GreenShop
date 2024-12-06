import React from 'react'
import BlogCard from './BlogCard'

export interface BlogType {
    id:number;
    img:string;
    data:string;
    title:string;
    text:string;
}

const BlogPost = () => {

    const blog:BlogType[] = [
        {
            id:1,
            img:"/01.png",
            data:"September 12  I Read in 6 minutes",
            title:"Cactus & Succulent Care Tips",
            text:"Cacti are succulents are easy care plants for any home or patio."
        },
        {
            id:2,
            img:"/02.png",
            data:"September 12  I Read in 2 minut",
            title:"Top 10 Succulents for Your Home",
            text:"Best in hanging baskets. Prefers medium to high light."
        },
        {
            id:3,
            img:"/03.png",
            data:"September 12  I Read in 3 minutes",
            title:"Cacti & Succulent Care Tips",
            text:"Cacti and succulents thrive in containers and because most are.."
        },
        {
            id:4,
            img:"/04.png",
            data:"September 12  I Read in 2 minutes",
            title:"Best Houseplants Room by Room",
            text:"The benefits of houseplants are endless. In addition to.."
        }
    ]


  return (
    <div className='w-[1200px] mx-auto '>
        <h3 className='font-bold text-[30px] leading-[16px] text-center'>Our Blog Posts</h3>
        <p className='text-[14px] leading-[24px] text-[#727272] mt-[15px] mb-[35px] text-center'>We are an online plant shop offering a wide range of cheap and trendy plants. </p>
        <div className='flex items-center justify-between'>{blog.map(item => <BlogCard key={item.id} item={item}/>)}</div>
    </div>
  )
}

export default BlogPost