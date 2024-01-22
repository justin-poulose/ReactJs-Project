import {useParams} from 'react-router-dom';
import useFetch from './fetch';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Postpage = () => {
    const{id} = useParams();
    const {data,error} = useFetch('http://localhost:8000/posts/'+id);
    const history = useHistory();
    
    const deletepoem = () =>{
        fetch('http://localhost:8000/posts/'+id, {
            method: 'DELETE',
        }).then(()=>{
            history.push('/');
        }
        )
    }
    
    return ( 
        <div className="postpage">
            <div className='headerFeed'> 
                { error && <div> {error} </div> }
                { data && (
                    <div>
                    <h2 style={{color:'#1e37c5',marginBottom:'20px'}}>{data.title}</h2>
                    <h3 style={{color:'#1e37c5',marginBottom:'10px'}}>{data.author}</h3>
                    <p style={{marginBottom:'5px',fontSize:'1.3em',fontWeight:'bold'}}>{data.poem}</p>
                    <button onClick={deletepoem}
                    style={{
                        fontSize:'1.1em',
                    color:"white",
                    backgroundColor: "#1e37c5",
                    borderRadius:'50px',
                    border:'none',
                    padding: '5px 25px 5px 25px',
                    marginTop:'20px'
                }}>Delete</button>
                    </div>
                )}
            </div>
        </div>
     );
}
 
export default Postpage;