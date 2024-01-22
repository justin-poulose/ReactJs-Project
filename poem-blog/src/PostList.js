import {Link} from 'react-router-dom';
const postlist = ({posts}) => {

    return ( 
        <div className="postlist">
            {posts.map((posts)=>(
                <div className='post' key={posts.id}>
                    <Link to={'/posts/'+ posts.id}>
                        <h2>{posts.title}</h2>
                        <p>By {posts.author}</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default postlist;