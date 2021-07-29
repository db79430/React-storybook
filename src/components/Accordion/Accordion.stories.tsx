import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {ButtonProps} from "../../stories/Button";
import {Story} from "@storybook/react";


export default {
    title: 'Rating Stories',
    component: Accordion,

};
const callback = action('on or off clicked')
const onClickCallback = action('user should be happy')

/*const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>
export const CollapsedMode = Template.bind({})
const callbacksProps = {
    onChange: callback,
}

CollapsedMode.args = {
    collapsed:true,
    titleValue:'Menu',
    ...callbacksProps




}
export const UnCollapsedMode = Template.bind({})

UnCollapsedMode.args = {
    collapsed: false,
    titleValue:'Users',
    ...callbacksProps


}*/
export const CollapsedMode= () => <Accordion items={[{ title:'Daria', value:1},{title: 'Masha', value:2 },{title:'Sveta', value:3}, {title:'Kate', value: 4}]}
                                             onClick={onClickCallback}
                                             collapsed={true}
                                             titleValue={'Menu'}
                                             onChange={callback}/>
export const UnCollapsedMode = () => <Accordion onClick={onClickCallback}
                                                items={[{ title:'Daria', value:1},{title: 'Masha', value:2 },{title:'Sveta', value:3}, {title:'Kate', value: 4}]}
                                                collapsed={false}
                                                titleValue={'Users'}
                                                onChange={callback}/>


export const ChangeRating: Story<AccordionPropsType> = (args) => {
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    return <Accordion onClick={(value) => {alert(' use ${value} lalalala')}}
                      items={[{ title:'Daria', value:1},{title: 'Masha', value:2 },{title:'Sveta', value:3}, {title:'Kate', value: 4}]}
                      collapsed={accordionCollapsed}
                      titleValue={'Users'}
                      onChange={() => setAccordionCollapsed(!accordionCollapsed)}
    />
}


