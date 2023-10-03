import { useParams ,useHistory} from "react-router-dom";
import useFetch from "./useFetch";


const Blogdetails = () => {
    const {id}= useParams();
    const {data:blog,error,isPending}= useFetch('http://localhost:8000/blogs/'+id);
    const history = useHistory();

    const handleClick=()=>{
        fetch('http://localhost:8000/blogs/' +blog.id,{
            method:'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }
    return ( 
        <div className="blogdetails">
            
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>DELETE</button>
                </article>
            )}
        </div>
     );
}
 
export default Blogdetails;