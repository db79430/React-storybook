import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/Onoff";
import {UnAccordion} from "./components/Accordion/AccordionSelfControled";
import {UncontrolledRating} from "./components/Rating/unRating";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnoff";



function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(3)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchONOff] = useState<boolean>(false)
    return (
        <div className="App">
            <input/>
            <input value={'yo'} type={'password'}/> //ключ значения
            {/*<Rating value={1}/>
        <Rating value={2}/>*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating onChange={setRatingValue} defaultValue={ratingValue}/>
            <Accordion onClick={setAccordionCollapsed}
                       items={[{ title:'Daria', value:1},{title: 'Masha', value:2 },{title:'Sveta', value:3}, {title:'Kate', value: 4}]}
                       collapsed={accordionCollapsed} titleValue={"Меню"}
                       onChange={() => {setAccordionCollapsed(!accordionCollapsed)}} />
            <UnAccordion titleValue={"Список пользователей"}/>
            <PageTitle title={'Оценки'}/>
            <OnOff onChange={(on) => {setSwitchONOff(on)}} on={switchOn}/>
            <UncontrolledOnOff defaultValue={switchOn} on={true} onChange={setSwitchONOff}/>

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>

    )
}


export default App;
