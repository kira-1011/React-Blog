import useFetch from "./useFetch";
import bouncyLoadingIcon from './bouncy-loading-icon.png';
import { useParams } from "react-router-dom";

const BlogDetails = () => {

    const { id } = useParams();
    const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs/" + id);
    return ( 
        <>
            { error && <div>{ error }</div> }

            {isPending && <img id='loadingIcon' src={bouncyLoadingIcon} alt="Loading"></img>}

            { blogs &&  
                <div className="blog-details">
                    <h1> { blogs.title }</h1>
                    <p>{ blogs.body }</p>
                    <span>Author : { blogs.author }</span>
                </div>
            }   
        </>
       
        
    );
}
 
export default BlogDetails;