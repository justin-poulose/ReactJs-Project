import {useState} from 'react'
const CreatePost = () => {
    const [title,settitle] = useState('');
    const [author,setauthor] = useState('');
    const [poem,setpoem] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        const post= {title,author,poem};
        
    }

    return ( 
        <div className="home">
            <div className='headerFeed'>
                <h2 style={{color:'#1e37c5'}}>Create Post</h2>
            </div>
            <div className="poemform">
                <form onSubmit={handleSubmit}>
                    <lable>Poem Title</lable><br></br>
                    <input 
                    type="text" required value={title}
                    onChange={(e)=> settitle(e.target.value)}
                    ></input><br></br>
                    <lable>Author's Name</lable><br></br>
                    <input type="text" required value={author}
                    onChange={(e)=> setauthor(e.target.value)}></input><br></br>
                    <lable>write your Poem here</lable><br></br>
                    <textarea required value={poem}
                    onChange={(e)=> setpoem(e.target.value)}>
                    </textarea><br></br>
                    <button type="submit" style={{
                        fontSize:'1.1em',
                    color:"white",
                    backgroundColor: "#1e37c5",
                    borderRadius:'50px',
                    border:'none',
                    padding: '5px 25px 5px 25px',
                }}>Publish</button>
                </form>
            </div>
        </div>
     );
}
 
export default CreatePost;