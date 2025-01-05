const person ={
    name: 'osama',
    address: 'Riyadh'
}

export default function LearningJavaScript(){
    return(
        <>
            <div>Learning Java Script</div>
            <div>{person.name}</div>
            <div>{person.address}</div>
        </>
    )
}