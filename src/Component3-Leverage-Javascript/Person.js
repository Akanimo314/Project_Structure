import React from 'react'

// Javascript Leverage

const Person = ({name, nickName='No Nick', images}) => {
  // const img = images && images[0] && images[0].small &&
  // images[0].small.url

  // NOTE: create Avatar and use
  
  // const img = images?. [0]?. small?. url || Avatar
          // OR nullish coalescing operator
      const img = images?. [0]?. small?. url ?? Avatar

  return (
    <article>
        <img src={img} alt={name} style={{width: '50px'}} />
        <h3>{name}</h3>
        <h3>nickName: {nickName}</h3>
                        {/* OR */}
        {/* <h3>nickName: {nickName || 'No Nick'}</h3> */}
        {/* <h3>nickName: {nickName? nickName: 'No NIck'}</h3> */}
    </article>
  )
}

export default Person