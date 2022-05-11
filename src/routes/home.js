import {
    Link
} from "react-router-dom";
function Home() {
     //////////////RENDER///////////////
    return (
        <div>
        <div className='blacklane1'>

        </div>
        <div className= 'fill'>
            
            
            
            <Link className='eachFill' to="/characters"><div>Characters</div></Link>
            
            
            <Link  className='eachFill' to="/locations"><div>Locations</div></Link>
                
            
            <Link  className='eachFill' to="/episodes"><div>Episodes</div></Link>
            
            
        
        </div>
        <div className='blacklane2'>
            
        </div>
    </div>
    )
}
export default Home