import React from 'react'
import LatestBlogCards from './LatestBlogCards'

function LatestBlog() {
    return (
        <div className='my-8 bg-gradient-to-b from-[#a0d7fe] to-[#f6fbff] py-12 px-4'>
            <div className="flex items-center gap-4 justify-center">
                <div className="h-px bg-[#317EFE] w-12 md:w-20"></div>
                <span className="text-[#317EFE] font-semibold whitespace-nowrap">LATEST BLOG</span>
                <div className="h-px bg-[#317EFE] w-12 md:w-20"></div>

            </div>
            <h2 className="text-center my-6 md:text-5xl">Recent articles and News <br />
                from our blog </h2>

            <div className="md:px-12">
                <LatestBlogCards />
            </div>
        </div>
    )
}

export default LatestBlog