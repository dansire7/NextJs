import Card1 from "../../components/card" // This is imported from export default without curly brackets
import {Card,Card2} from "../../components/card" // This is imported from export with curly brackets

const Home = () => {
  return(
    <div>
        <h2>Hello world</h2>
        <Card1/>
        <Card/>
        <Card2/>
    </div>
  )
}

export default Home