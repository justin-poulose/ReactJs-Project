import { useState, useEffect } from 'react';
import PostList from './PostList';
import useFetch from './fetch';

const Homes = () => {
    const {data: posts, error} = useFetch("http://localhost:8000/posts");
    
   

    return (  
        <div className="home">
            <div className='headerFeed'>
                <h2 style={{color:'#1e37c5'}}>HomeFeed</h2>
                <input type="textbox" value="search Poem" ></input>
            </div>
            {error && <div className='error'>{error}</div>}
            {posts && <PostList posts={posts}/>}
        </div>
    );
}
 
export default Homes;