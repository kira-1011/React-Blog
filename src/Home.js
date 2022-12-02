import { useState } from 'react';
import BlogList from './BlogList';
import bouncyLoadingIcon from './bouncy-loading-icon.png';
import useFetch from './useFetch';

let changeHandler = null;

const Home = () => {
   
    const [filter, setFilter] = useState("");
    let {data:blogs, isPending, error, setData} = useFetch("http://localhost:8000/blogs");

    changeHandler = (e) => {
        (e.target.value)? setFilter(e.target.value) :  setFilter("");
    }

    const filterBlogs = (blogs) => {
        blogs = blogs.filter((blog) => {
            return (blog.author.indexOf(filter) > -1)? true : false;
        });
        
        return blogs;
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            blogs = blogs.filter((blog) => blog.id !== id);
            setData(blogs);
        })
    };

    return (
        <div className="home">
            { error && <div>{ error }</div> }

            {isPending && <img id='loadingIcon' src={bouncyLoadingIcon} alt="Loading"></img>}

            { blogs && <BlogList blogs={ filterBlogs(blogs) } title={ "All Blogs" } handleDelete = { handleDelete } /> }
        </div>
    );
}

export default Home;
export { changeHandler };