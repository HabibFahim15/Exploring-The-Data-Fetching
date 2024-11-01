import { getPosts } from "@/services/postApi";



const PostPage = async () => {
  const postData = await getPosts()
  console.log(postData);
  return (
    <div >
      <h6>All posts</h6>
      <div className='grid grid-cols-4 gap-6'>
          {
            postData?.slice(0,20).map(({id,title, body}) =>(
              <div key={id} className='border-2 p-6'>
                <h5 className='py-4 text-lg font-semibold'>Title : {title}</h5>
                <h6 className=''>Description : {body}</h6>
              </div>
            ))
          }
      </div>
    </div>
  );
};

export default PostPage;