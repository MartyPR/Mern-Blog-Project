import React from "react";
import { useQuery } from "@tanstack/react-query";
import { listPost } from "../../APIServices/posts/postsAPI";
import { Link } from "react-router-dom";

const PostsList = () => {
  const { data, isError, isLoading, isSuccess, error } = useQuery({
    queryFn: listPost,
    queryKey: ["Post-lists"],
  });

  return (
    <section className="overflow-hidden bg-gray-50">
      <div className="container px-4 mx-auto">
        <h1 className="text-4xl lg:text-6xl font-bold  text-gray-900 mb-12 mt-16 text-center">
          Blog
        </h1>
        {/*Featured Post */}
        <h2 className="text-3xl lg:text-4x1 font-bold text-gray-800 mb-10">
          Lates articles
        </h2>
        {/*Post Category */}

        <div className="flex flex-wrap mb-16 -mx-4">
          {/*Posts */}
          {data?.posts.map((post) => (
            <div key={post._id} className="w-full md:w-1/2 lg:w-1/3 p-4">
              <Link to={`/postDetails/${post._id}`}>
                <div className="bg-white border border-gray-200 hover:shadow-lg transition duration-300 rounded-xl h-full p-5">
                  <div className="relative mb-5" style={{ height: 240 }}>
                    <img
                      className="absolute inset-0 w-full h-full object-cover rounded-xl"
                      src="https://th.bing.com/th/id/R.abb5e2f3a89fe5f1871d9e13555a4cfb?rik=Gw6033iUygmZPQ&riu=http%3a%2f%2fcdn.marketing4ecommerce.net%2fwp-content%2fuploads%2f2017%2f01%2f02204956%2fqu%c3%a9-es-una-imagen-vectorial.jpg&ehk=HTmTsIAUN71R1e1kAp3MB6q0dm57GQVLk2TwmRfmuds%3d&risl=&pid=ImgRaw&r=0"
                      alt=""
                    />
                  </div>
                  <div className="pt-4 pb-2">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {post?.title}
                    </h3>
                    <div
                      className=" text-gray-700 text-sm mb-4"
                      dangerouslySetInnerHTML={{ __html: post?.description }}
                    />
                    <div className="flex items-center text-gray-500 text-sm">
                      <p>{new Date(post?.createdAt).toLocaleDateString()}</p>
                      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={4}
                      height={4}
                      viewBox="0 0 4 4"
                      fill="none"
                      className="mx-2"
                      >
                        <circle cx={2} cy={2} r={2} fill=" #888888" />  
                      </svg>
                      <span className="py-1 px-2 bg-gray-100 rounded-full text-xs font-medium">
                        {/* {post.cateogry.categoryName} */}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
    // <div>
    //   {isLoading && <p>Loading....</p>}
    //   {isError && <p>{error.message}</p>}
    //   {isSuccess && <p>Successfull</p>}
    //   {data?.posts.map((post) => {
    //     return (
    //       <div key={post._id}>
    //         {/* <h2>{post?.title}</h2>
    //         <p>{post?.description}</p> */}
    //         <div
    //         dangerouslySetInnerHTML={{__html:post?.description}}></div>
    //         <Link to={`/postDetails/${post._id}`} >more...</Link>
    //       </div>
    //     );
    //   })}
    // </div>
  );
};

export default PostsList;
