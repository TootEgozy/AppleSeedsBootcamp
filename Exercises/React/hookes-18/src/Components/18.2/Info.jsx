import Task from './Task';


const data = [
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
    ];
    

export default function Info() {
    return (
        <div>
            {data.map(item=> {
                return (
                    <Task key={item.name} name={item.name} isCompeleted={item.completed}/>
                )
            })}
        </div>
    )
}
