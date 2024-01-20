
const postlist = ({posts}) => {

    return ( 
        <div className="postlist">
            {posts.map((post)=>(
                <div className='post' key={post.id}>
                    <h2>{post.title}</h2>
                    <p>By {post.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default postlist;