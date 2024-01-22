import PostList from './PostList';
import useFetch from './fetch';
import { useState } from 'react';

const Homes = () => {
    const {data: posts, error} = useFetch("http://localhost:8000/posts");
    const [searchtext,setsearchtext] = useState('search poem');
   

    return (  
        <div className="home">
            <div className='headerFeed'>
                <h2 style={{color:'#1e37c5'}}>Home Feed</h2>
                <input type="textbox" value={searchtext} 
                onChange={(e)=> setsearchtext(e.target.value)}></input>
            </div>
            {error && <div className='error'>{error}</div>}
            {posts && <PostList posts={posts}/>}
        </div>
    );
}
 
export default Homes;