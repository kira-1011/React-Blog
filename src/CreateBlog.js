import { useState } from "react";
import bouncyLoadingIcon from './bouncy-loading-icon.png';
import { useHistory } from "react-router-dom";

const CreateBlog = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");

    const history = useHistory();

    const [isPending, setPending] = useState(false);

    const submitHandler = (e) => {

        e.preventDefault();

        setPending(true);

        const data = {
            title,
            body,
            author
        }

        setTimeout(() => {
            fetch("http://localhost:8000/blogs", {
            method:"POST",
            headers:{ "Content-Type": "application/json" },
            body: JSON.stringify(data)
            })
            .then(() => {
                setPending(false);
                history.push("/");
            })
        }, 1000);

    }

    return ( 
        <div className="create-blog-container">

            <h1>Create a new blog</h1>

            <div className="form-container">
                <form  className="create-form" onSubmit={ submitHandler }>
                    <label htmlFor="title">Blog title</label>
                    <input type="text" id="title" value = { title } onChange={ (e) => setTitle(e.target.value) } name="title" required/>

                    <label htmlFor="body">Blog body</label>
                    <textarea  id="body" rows="5" cols="35" value={ body }  onChange={ (e) => setBody(e.target.value) } name="body" required/>

                    <label htmlFor="author">Blog author</label>
                    <input type="text"  id="author"  value={ author }  onChange={ (e) => setAuthor(e.target.value) } name="author" required/>

                    { !isPending && <button type="submit" id="submit" >Add Blog</button> }
                    { isPending &&  <img id='loadingIcon' src={bouncyLoadingIcon} alt="Loading"></img> } 
                </form>
            </div>
        </div>
     );
}
 
export default CreateBlog;