
// import React from "react";
//  const Second = (props)=>{

//     console.log("hello")

//     return(
//         <React.Fragment>
//        <h1>{props.key1}</h1>
//         </React.Fragment>
//     )

// }
// export default Second;

import React from "react";

export default React.memo((props)=>{
    console.log("HELLOW")
return(
    <React.Fragment>
        <h1>{props.key1}</h1>
    </React.Fragment>
)


})