import { Helmet } from "react-helmet";

const Blog = () => {
    return (
        <div className='my-10'>
             <Helmet>
                <title>Kids Store Blog</title>
            </Helmet>
            <h2 className='text-3xl text-center font-bold mb-12 text-[#FF69B4]'>Blog Page</h2>
            <div className='w-3/4 mx-auto flex items-center justify-center'>

                <div className='space-y-5 text-justify'>
                    <p className='text-2xl font-bold'>a. What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                    <p className='text-lg font-bold'>Refresh tokens allow you to balance your users access needs with your organization&apos;s security practices. Access tokens help users get the resources they need to complete their tasks, but such tokens can also expose your organization to data compromise or other malicious actions if a hacker is able to steal them. <br />Access tokens are used in token-based authentication to allow an application to access an API. The application receives an access token after a user successfully authenticates and authorizes access, then passes the access token as a credential when it calls the target API.</p>
                    <p className='text-2xl font-bold'>b. Compare SQL and NoSQL databases?</p>
                    <p className='text-lg font-bold'>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                    <p className='text-2xl font-bold'>c. What is express js? What is Nest JS?</p>
                    <p className='text-lg font-bold'>Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js. <br />Nest. js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.</p>
                    <p className='text-2xl font-bold'>d. What is MongoDB aggregate and how does it work ?</p>
                    <p className='text-lg font-bold'>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;