
const users = ['Bashir','Hamza','Okasha']

export default function new3 () {
    return(
        <ul className="flex flex-row-reverse gap-x-2">
            {
                users.map((item, i) => {
                    return(
                        <li key={i} className="bg-red-50 m-4 p-4 border flex *:">{i} {item}</li>
                    )
                })
            }
        </ul>
    )
}