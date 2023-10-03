import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    
    const [title,setTitle]= useState('');
    const [body,setBody]= useState('');
    const [author,setauthor]=useState('Aman');
    const history = useHistory();

    const handleSubmit=(e) => {
        e.preventDefault();
        const blog ={title,body,author};
        fetch('http://localhost:8000/blogs/',{
            method : 'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            history.push('/');
        })
    }
    return ( 
        <div className="Create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input type="text" required value={title}
                onChange={(e)=> setTitle(e.target.value)}/>
                
                <label>Blog Body</label>
                <textarea required value={body} onChange={(e)=> setBody(e.target.value)}></textarea>
                <label>Blog Author:</label>

                <select value={author}
                onChange={(e)=> setauthor(e.target.value)}>
                    <option value="Aman">Aman</option>
                    <option value="Nehal">Nehal</option>
                    <option value="Vit duki students">Vit k duki students</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;