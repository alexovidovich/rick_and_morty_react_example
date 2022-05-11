function EachLocation(props) {
    
    return (
        <div className='c-card t-card' >

            <div className= 'card-content'>
               
                <div className='description'>
                    <h1>
                        {props.name}
                    </h1>
                    <h3>

                        Type: {props.type}
                    </h3>
                    <h3>
                    Dimension: {
                            props.dimension
                        }
                    </h3>
                  
                </div>
            </div>
        </div>

    );
}

export default EachLocation;
