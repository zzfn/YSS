import React from 'react';

interface CardProp {
    val: number
}

const Card: React.FC<CardProp> = ({val}) => {
    return (
        <>
            <input onChange={v => console.log(v)} type="range" value={val}
                   min="0" max="1600"/>
        </>
    );
}

export default Card;
