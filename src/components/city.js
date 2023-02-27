import React from "react";

export default function CityInfo(props){
    return (
        <div>
            {
                props.data.map(city=><div {...city} key={city.id}>{city.id} {city.name}</div>)
            }
        </div>
    )


}