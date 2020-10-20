import React from "react";

function quotes ({simpsons}){
    return(
        <div>
            <h3>{simpsons.quote}</h3>
            <h4>{simpsons.character}</h4>
            <img src="{simpsons.image}" alt="{simpsons.character}"></img>
        </div>
    )
}

export default quotes;