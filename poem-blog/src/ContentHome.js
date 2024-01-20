import { useState, useEffect } from 'react';
import PostList from './PostList';
const Homes = () => {
    const [posts, setPost] = useState(null)
    
   useEffect(() => {
    fetch('http://localhost:8000/posts')
    .then(res => {
        return res.json()
    })
    .then(data => {
        setPost(data);
        console.log(posts);
    })
   },[]    
   );

    return (  
        <div className="home">
            <div className='headerFeed'>
                <h2 style={{color:'#1e37c5'}}>HomeFeed</h2>
                <input type="textbox" value="search Poem" ></input>
            </div>
            {posts && <PostList posts={posts}/>}
        </div>
    );
}
 
export default Homes;