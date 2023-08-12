import {Link, useLoaderData, Form} from 'react-router-dom'

function Index(props){
    // GET data from loader
    const cheese = useLoaderData()
    console.log(cheese)

    return <div>
        <h2>Create one Cheese</h2>
        <Form action="/create" method="post">
            <input type="text" name="name" placeholder="Cheese Name"/>
            <input type="text" name="countryOfOrigin" placeholder="Cheese place of origin"/>
            <input type="text" name="image" placeholder="Cheese's Image"/>
            <input type="submit" value="Create Cheese"/>
        </Form>
        {cheese.map((cheese, index)=>{
            return <div key={cheese._id} className="cheese">
                <Link to={`/${cheese._id}`}>
                    <h1>{cheese.name}</h1>
                </Link>
                <img src={cheese.image} alt={cheese.name}/>
                <h3>{cheese.name}</h3>
            </div>
        })}
    </div>
}

export default Index