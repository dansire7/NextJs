async function  Details ({params}:{params: {product:string}}) {
    const fetchData = await fetch (`https://jsonplaceholder.typicode.com/posts/${params.product}`)// here you have fetch data through json place holder api
    const resp = await fetchData.json() // here you have converted the data in json format
    console.log(resp) //now you can check the data is appearing in console
    return (
        <>
        <h3> Products Details </h3>
        <p> {resp.title}</p>
        <p> {resp.body}</p>
        </>
    )
}

export default Details