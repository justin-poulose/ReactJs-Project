import PostList from './PostList';
import useFetch from './fetch';
import { useState } from 'react';

const Homes = () => {
    const {data: posts, error} = useFetch("http://localhost:8000/posts");
    const [searchtext,setsearchtext] = useState('');
   
    const filteredPosts = posts ? posts.filter(post =>
        post.title.toLowerCase().includes(searchtext.toLowerCase()) ||
        post.poem.toLowerCase().includes(searchtext.toLowerCase()) ||
        post.author.toLowerCase().includes(searchtext.toLowerCase())
    ) : [];

    return (  
        <div className="home">
            <div className='headerFeed'>
                <h2 style={{color:'#1e37c5'}}>Home Feed</h2>
                <input type="textbox" value={searchtext} 
                onChange={(e)=> setsearchtext(e.target.value)} placeholder='Search Verse'></input>
            </div>
            {error && <div className='error'>{error}</div>}
            {filteredPosts && <PostList posts={filteredPosts} />}
        </div>
    );
}
 
export default Homes;