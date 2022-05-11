function EachEpisode(props) {
    let style = props.char?null :'c-card e-card' 
    return (
        <div className={style}>
            <div className= 'card-content'>
               
                <div className='description'>
                    <h1>
                        {props.name}
                    </h1>
                    <h3>

                        Time: {props.time}
                    </h3>
                    <h3>
                        Episode: {
                            props.episode
                        }
                    </h3>
                   
                </div>
            </div>
        </div>

    );
}

export default EachEpisode;
