import React from 'react'

function Logo(props) {
    return (
        <div>
            <img src={props.setContent} alt={props.alt} className={props.className} href={props.href} />
        </div>
    )
}

export default Logo;