export default async function prod ({params}:{params:{product:string}}){
    
    const fetchdata = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.product}`)
    const res = await fetchdata.json() 
    console.log(res)
    
    console.log(params)
    return(
        <div>
        <h1>
            This is {res.title} detail page.
        </h1>
        <h2>{res.title} </h2>
        <h3>{res.body} </h3>
        </div>
    )
}