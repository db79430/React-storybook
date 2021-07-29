import React, {useState} from "react";
export type RatingValueType = 1|2|3;

type RatingPropsType = {
    defaultValue?: RatingValueType
    onChange: (defaultValue: RatingValueType ) => void
}

export function UncontrolledRating(props: RatingPropsType) {
    const [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue: 1)

    return (

            <div>

                <Star value={value}  selected={value > 1} setValue={() => {{setValue(1)}; {props.onChange(1)}}}/>

                <Star value={value} selected={value === 2} setValue={() => {{setValue(2)}; {props.onChange(2)}}}/>

                <Star value={value} selected={value === 3} setValue={() => {{setValue(3)}; {props.onChange(3)}}}/>



            </div>




    )
}

 type StarPropsType = {
    selected: boolean
     value: 1|2|3
     setValue: (value: 1|2|3) => void
}
function Star (props: StarPropsType) {


    return (
       <span onClick={() => (props.setValue(props.value))}>
           <span>
               {props.selected ? <b>star</b> : "star"}
           </span>
       </span>
    )
}