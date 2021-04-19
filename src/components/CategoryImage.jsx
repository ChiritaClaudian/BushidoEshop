import React, {useState} from 'react'
import {Button} from 'react-bootstrap'
import {useMediaQuery} from 'react-responsive'
import 'bootstrap'

function CategoryImage(props)
{
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    const containerNoOpacity={
        zIndex:'1'
    }

    const containerWithOpacity={
        filter: 'blur(4px)',
        zIndex: '1'
    }

    const itemsInvisible={
        top:'50%',
        transform:'translate(-50%, -50%)',
        left:'50%',
        display: 'none',
        position: 'absolute',
        zIndex: '3',
        
        
    }

    const itemsVisible={
        top:'50%',
        transform:'translate(-50%, -50%)',
        left:'50%',
        display: 'block',
        position: 'absolute',
        zIndex: '3',
       
        
    }

    
    const [isHovered, setHover] = useState(false);
    return(
        <div style={{position:"relative"}} >
            <div style={{margin:"10%", position:'relative'}} onMouseEnter={()=>setHover(true)} 
                    onMouseLeave={()=>setHover(false)} >
                <div style={isHovered || isTabletOrMobile ? containerWithOpacity : containerNoOpacity } 
                    >
                    <img src={props.image} style={{width:'100%'}}/>
                </div>
                
                <div style={isHovered || isTabletOrMobile ? itemsVisible : itemsInvisible} className="d-flex flex-column ">
                    
                    <h3 style={{color:'white'}}>
                        {props.header}
                    </h3>

                    <Button variant='outline-light'> Shop </Button>{' '}
                </div>
                
            </div>
        </div>
    );
}

export default CategoryImage;