import React from 'react'

export default function TacoLogNav() {
    return (
        <div className="TacoLog__nav">
             <div className="TacoLog__nav-home">
                 <i className="fas fa-home fa-3x"></i>
             </div>
             <div className="TacoLog__nav-log">
                <button>Log a Taco</button>
                <img src="http://unsplash.it/50/50" alt=""/>
             </div>
        </div>
    )
}
