import React, {useState} from "react";
 export type RatingPropsType = {
    value: RatingValueType
     onClick: (value: RatingValueType) => void

}

 export type RatingValueType = 1|2|3;

export function Rating(props: RatingPropsType) {


    return (
        <div>
            <Star selected={props.value > 1} onClick={props.onClick} value={1}/>

            <Star selected={props.value > 2} onClick={props.onClick} value={2}/>

            <Star selected={props.value > 3} onClick={props.onClick} value={3}/>

           {/* <Star selected={true}/>
            <Star selected={true}/>*/}
        </div>
    )
}

 type StarPropsType = {
    selected: boolean
     onClick: (value: RatingValueType) => void
     value: RatingValueType
}
function Star (props: StarPropsType) {
   /* if(props.selected === true) {
        return <span> <b>star</b> </span>
    } else {
       return <span>star</span>
    }*/


    return (
        <span onClick={() => {props.onClick(props.value)}}>
            {props.selected ? <b>star</b>: "star"}

        </span>






    )
}