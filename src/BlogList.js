import { Link } from 'react-router-dom';
import avatar from './avatar.svg';
import trash from './trash.png';

const BlogList = ({blogs, title, handleDelete, setData}) => {

    return (  
           <>
                <h2 className="blogs">{ title }</h2>

                <div className="blog-list">
                {
                    blogs.map((blog) => (
                        <div className="blog-list-item" key={blog.id}>
                            <Link to={ "/blogs/" + blog.id }>
                                <img id='profileImg' src={avatar} alt="profile"></img>
                                <p>Author : {blog.author}</p>
                                <h2>{blog.title}</h2>
                            </Link>
                            <img src={ trash } className='delete' onClick={ () => handleDelete(blog.id) }  alt="delete" ></img>
                        </div>
                    ))
                }
                </div>  
           </>
    );
}

export default BlogList;