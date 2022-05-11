import React from 'react'
import vid from '../media/vid.mp4'
import {Link} from 'react-router-dom'

function Start() {
     //////////////RENDER///////////////
    return (
        <div>
            <video className= 'vid' autoPlay loop muted >
                <source src= {vid} type= 'video/mp4'>
                </source>
            </video>
            <div className= 'startText'>
                <Link to= {{pathname: '/menu'}}>
                    <div className= 'btn'>
                        <p>
                            Rick and Morty
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    )
}



export default Start

