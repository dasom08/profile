import React from 'react';

//Link를 사용해주면 리로드하지 않는다. 

const Test = (props) => {
      console.log(props)

      return (
            <div className = "APP" >
            <h1>Users</h1>
              {/* <ul>
                
                {this.state.users.map(user =>{
                  <li key = {user.id}>{user.username}</li>
                })}
    
    
              </ul> */}
          </div>
      );
}
export default Test;