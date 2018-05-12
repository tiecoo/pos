import React from 'react';


export const Profile = (props) => {
    console.log(JSON.stringify(props))
    return (
        <div>
            <h1>{props.data.login}</h1>
            <img src={props.data.avatar_url} alt={props.data.login} />
        </div>
    )
}