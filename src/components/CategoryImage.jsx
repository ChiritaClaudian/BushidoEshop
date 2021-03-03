import React, {useState} from 'react'
import {Button, Container, Row, Col} from 'react-bootstrap'
import 'bootstrap'
import {classes} from '../modules/CategoryImage.module.css'
function CategoryImage(props)
{
    const containerNoOpacity={
      
        width:'375px',
        height:'375px',
        backgroundImage: `url(${props.image})`, 
        zIndex:'0',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        poisiton: 'absolute'

        }

    const containerWithOpacity={
        
        width:'375px',
        height:'375px',
        filter: 'blur(7px)',
        backgroundImage: `url(${props.image})`, 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        zIndex: '0',
        position:'absolute'
       
    }

    const itemsVisible={
        display: 'none',
        position: 'absolute',
        zIndex: '3'
        
    }

    const itemsInvisible={
        display: 'inline',
        position: 'absolute',
        zIndex: '3',
        margin: '150px'
    }

    
    const [isHovered, setHover] = useState(false);
    return(
        <div style={{margin:"10%"}}>
            <div style={isHovered ? containerWithOpacity : containerNoOpacity} 
                onMouseEnter={()=>setHover(true)} 
                onMouseLeave={()=>setHover(false)}>
            </div>
            
                    <div onMouseEnter={()=>setHover(true)} 
                        onMouseLeave={()=>setHover(false)} 
                        style={isHovered ? itemsInvisible : itemsVisible}>
                         

                        <h3 style={{color:'white'}}>
                            {props.header}
                        </h3>

                        <Button style={{marginLeft:'15%'}} variant='outline-light'> Shop </Button>{' '}
                    </div>
            
            
        </div>
    );
}

export default CategoryImage;