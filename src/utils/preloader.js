import React from 'react'

export default function Preloader() {
    let [data,setData]  =React.useState(false)
    let animation=[]
    for(let i=0; i<72; i++) {
        animation.push(<div key={i}><div className="bar"></div></div>)
    }
  
    return (
        <div className= 'preloader'>
        <div className= 'wrapperLoader'>
            {animation}
        </div>
        </div>
    )


   
}



