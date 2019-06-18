import React from 'react'

export const ItemDetail = ({item}) => {
    return (
        <div>
            <p>Name: {item.name}</p>
            <p>Happiness: {item.happiness}</p>
            <p>Price: {item.price}</p>
        </div>
    )

}
