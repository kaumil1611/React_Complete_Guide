import React from 'react'

function demo1(props) {
    return (
        <div>
            {props.name}
            <br/>
            {props.children}
        </div>
    )
}

export default demo1
