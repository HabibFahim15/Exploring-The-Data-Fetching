import { getPosts } from "@/services/postApi";
import Link from "next/link";

export const metadata = {
  title: {
    absolute : "Post"
  },
  description: "See Our Posts",
};

const PostPage = async () => {
  const postData = await getPosts()
  return (
    <div >
      <h6>All posts</h6>
      <div className='grid grid-cols-4 gap-6'>
          {
            postData?.slice(0,20).map(({id,title, body}) =>(
              <div key={id} className='border-2 p-6'>
                <h5 className='py-4 text-lg font-semibold'>Title : {title}</h5>
                <h6 className=''>Description : {body}</h6>
                <button className='bg-red-400  px-4 py-2'><Link href={`/posts/${id}`}>See Details</Link></button>
              </div>
            ))
          }
      </div>
    </div>
  );
};

export default PostPage;