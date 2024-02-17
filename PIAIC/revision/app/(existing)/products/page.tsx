import Link from "next/link";

export default async function products() {
  
    const fetchdata = await fetch("https://jsonplaceholder.typicode.com/posts")
    const res = await fetchdata.json() 
    console.log(res)

    return(
        <div>
            <h1>Product List</h1>
            <ol>
                {
                    res.map((item: any, i:any)=>{
                        return(
                            <li>
                                <Link href={`/products/${item.id}`}>{item.title}</Link></li>
                        )

                    })
                }
            </ol>
        </div>
    )
  
}
