import React, {useState} from 'react'
import {Button} from 'react-bootstrap'
import {useMediaQuery} from 'react-responsive'
import {useHistory} from 'react-router-dom'
import 'bootstrap'

function CategoryImage(props)
{
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    

    const containerWithOpacity={
        filter: 'blur(4px)'
    }

   

    const itemsVisible={
        top:'50%',
        transform:'translate(-50%, -50%)',
        left:'50%',
        display: 'block',
        position: 'absolute'

    }
    const history = useHistory();

    const [isHovered, setHover] = useState(false);
    return(
        <div style={{position:"relative"}} >
            <div style={{margin:"10%", position:'relative'}} onMouseEnter={()=>setHover(true)} 
                    onMouseLeave={()=>setHover(false)} >
                <div style={isHovered || isTabletOrMobile ? containerWithOpacity : {}} 
                    >
                    <img src={props.image} style={{width:'100%'}} alt="imagine cu categoria"/>
                </div>
                
                <div style={isHovered || isTabletOrMobile ? itemsVisible:{display:'none'}} className="d-flex flex-column ">
    
                    <h3 style={{color:'white'}}>
                        {props.header}
                    </h3>
                    <Button variant='outline-light' onClick={()=>{history.push("/Market/" +props.category);}}> Shop </Button>{' '}
                </div>
                
            </div>
        </div>
    );
}

export default CategoryImage;