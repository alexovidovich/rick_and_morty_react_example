
function EachCharacter(props) {
    let back= props.gender== 'Male' ? {backgroundColor: '#94f2ef', border: '1px solid black'}: {backgroundColor: 'pink' , border: '1px solid red'}
    return (
        <div className='c-card' >
            <div className= 'card-content'>
                <img src={props.image} height= '300px' width= '300px'> 

                </img>
                <div className='description'>
                    <h1>
                        {props.name}
                    </h1>
                    <h3>

                        Gender: {props.gender}
                    </h3>
                    <h3>
                        Status: {
                            props.status
                        }
                    </h3>
                    <h3>
                        Species: {props.species}

                    </h3>
                </div>
            </div>
        </div>

    );
}

export default EachCharacter;
