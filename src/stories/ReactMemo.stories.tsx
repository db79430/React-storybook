import React, {useState} from "react";


export default {
    title: 'React.memo demo'
}

const NewMessagesCounter = (props:{count: number}) => {
    return <div>{props.count}</div>
}

const TableSecret = (props:{users: Array<string>}) => {
    return <div>
        {props.users.map((u,i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(TableSecret)
export  const Example1 =() => {
    let [counter, setCounter] = useState(0)
    let [users, setUsers] = useState(['Anna','Kate','Dasha'])
    const addUsers = () => {
        const newUsers = [...users,'Sveta' + new Date().getTime()]
        setUsers(newUsers)

    }
    return <>
        <button onClick={()=> setCounter(counter+1)}>+</button>
        <button onClick={addUsers}></button>
        <NewMessagesCounter count={10}/>
        <Users users={users}/>

    </>


}