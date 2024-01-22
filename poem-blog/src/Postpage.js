import {useParams} from 'react-router-dom';
import useFetch from './fetch';
const Postpage = () => {
    const{id} = useParams();
    const {data,error} = useFetch('http://localhost:8000/posts/'+id);
    return ( 
        <div className="home">
            <div className='headerFeed'> 
                { error && <div> {error} </div> }
                { data && (
                    <div>
                    <h2 style={{color:'#1e37c5',marginBottom:'20px'}}>{data.title}</h2>
                    <h3 style={{color:'#1e37c5',marginBottom:'10px'}}>{data.author}</h3>
                    <p>{data.poem.map((poem)=>(
                        <p style={{marginBottom:'5px',fontSize:'1.3em',fontWeight:'bold'}}>{poem}</p>
                        ))}
                    </p>
                    </div>
                )}
            </div>
        </div>
     );
}
 
export default Postpage;