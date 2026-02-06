import React, { useState, useEffect } from 'react';
import './blog.css';
import BlogCard from '@/component/BlogCard';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const res = await fetch('/data/blogData.json'); // Use relative path or env variable
                if (!res.ok) {
                    throw new Error('Failed to fetch blog data');
                }
                const data = await res.json();
                setBlogs(data);
            } catch (e) {
                setError(e.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading blogs...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section id="blogs" className='blogs'>
            <div className="container-fluid">
                <div className="row">
                    <h4 className="section-title">Our Blog</h4>
                </div>
                <div className="row mt-5">
                    {blogs.length > 0 ? (
                        blogs.map(blog => <BlogCard key={blog._id} blog={blog} />)
                    ) : (
                        <p>No blogs found</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Blog;



// import React, {useState, useEffect} from 'react';
// import './blog.css';
// import BlogCard from '@/component/BlogCard';

// const Blog = () => {
//     const [blogs, setBlogs] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//           try {
//           setIsLoading(true);
//           const res = await fetch('/data/blogData.json'); // Use relative path or env variable
//           const data = await res.json();
//           setBlogs(data);
//           } catch (e) {
//           setError(e.message);
//           } finally {
//           setIsLoading(false);
//           }
//         };
//         fetchData();
//         }, []);
//   return (
//     <section id="blogs" className='blogs'>
//         <div className="container-fluid">
//             <div className="row">
//                 <h4 className="section-title">Our Blog</h4>
//             </div>
//             <div className="row mt-5">
//                 {blogs && 
//                 blogs.length>0 && 
//                 blogs.map(blog=> <BlogCard key={blog._id} blog={blog}/>)}
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Blog
