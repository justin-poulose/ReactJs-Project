import { useState, useEffect } from 'react';
import PostList from './PostList';
const Homes = () => {
    const [posts, setPost] = useState(
        [
            {id:1,title:'Whispers of the Breeze',poem:"In twilight's tender grasp they rise<br>The whispers of the breeze<br>Dancing leaves in moonlit skies<br>A secret told with ease.",author:'Emily Rivers'},
            {id:2,title:'Echoes of Silence',poem:"In stillness, silence softly weaves <br> Echoes linger in tranquil eaves <br> Unspoken words in quiet strife <br> A symphony of muted life.",author:'Liam Serenade'},
            {id:3,title:'Serenade of the Stars',poem:"Midnight's curtain gently draws <br> Celestial serenade without flaws <br> Stars compose in silent light <br> A cosmic ballad in the night.",author:'Luna Evernight'}
        ]
    )
    
   useEffect(() => {

   },[]    
   );

    return (  
        <div className="home">
            <div className='headerFeed'>
                <h2 style={{color:'#1e37c5'}}>HomeFeed</h2>
                <input type="textbox" value="search Poem" ></input>
            </div>
            <PostList posts={posts.filter((posts) => true)}/>
        </div>
    );
}
 
export default Homes;