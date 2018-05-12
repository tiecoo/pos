import { ProfilePic } from "./profilepic";
import { ProfileDesc } from "./profiledesc";
import React from 'react';

export const Portfolio = (props) => {
    return (
      <div>
        <ProfilePic data={props.data.pic}/>
        <ProfileDesc name={props.data.name} age={props.data.age} job={props.data.job}/>
      </div>
    )
  }