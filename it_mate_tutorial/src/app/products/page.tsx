import Link from "next/link"

export default async function Products () {
    const fetchData = await fetch ("https://jsonplaceholder.typicode.com/posts")// here you have fetch data through json place holder api

    const resp = await fetchData.json() // here you have converted the data in json format
    console.log(resp) //now you can check the data is appearing in console
    return(
        <>
        <h3> Product List </h3>
        <ol>
            {resp.map((item:any, i: number)=>{
                return (
                    <li><Link href={`./products/${item.id}`}>{item.title}</Link></li>
                )
            })}
        </ol>
        </>
    )
}
