export default function new5  ()  {
    const student = [
        {
            name: "Khurram",
            rollNo: 25
        },
        {
            name: "Kareem",
            rollNo: 26
        },
        {
            name: "Zohaib",
            rollNo: 27
        },
        {
            name: "Adil",
            rollNo: 28
        }
    ]

    return(
        <ul className="mx-3 flex gap-x-4">
        {student.map((item,i) => {
            return(
                    <li>Name : {item.name} Rollno: {item.rollNo}</li>
                
            )
        })}</ul>

    )
}