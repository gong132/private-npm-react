import * as React from 'react'

const Title = (props:any) => {
    
    return (
        <div style={{display: 'flex', alignItems:'center'}}>
            <h5>{props.label}</h5>:
            <span>{props.value}</span>
        </div>
    )
}

export default Title