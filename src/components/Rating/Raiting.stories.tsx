import React, {useState} from 'react';
import {Rating, RatingValueType} from "./Rating";


export default {
    title: 'Rating Stories',
    component: Rating,

};

export const EmptyRating = () => <Rating value={1} onClick={x=>x}/>
export const EmptyRating1 = () => <Rating value={2} onClick={x=>x}/>
export const EmptyRating3 = () => <Rating value={3} onClick={x=>x}/>

export const ChangeRating = () => {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(3)
    return <Rating value={ratingValue} onClick={setRatingValue}/>
}




