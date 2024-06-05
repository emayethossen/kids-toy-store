import { Helmet } from "react-helmet";

const Blog = () => {
    return (
        <div className='my-10'>
             <Helmet>
                <title>Kids Store Blog</title>
            </Helmet>
            <h2 className='text-3xl text-center font-bold mb-12 text-[#FF69B4]'>Blog Page</h2>
            <div className='w-3/4 mx-auto flex items-center justify-center'>

               This is our blog page
            </div>
        </div>
    );
};

export default Blog;