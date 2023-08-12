import {Link, useLoaderData, Form} from 'react-router-dom'

function Index(props){
    // GET data from loader
    const cheese = useLoaderData()
    console.log(cheese)

    return <div className='indexpage'>
        <div className="newcheeseform">
            <h2>Create one Cheese</h2>
            <Form action="/create" method="post">
                <input type="text" name="name" placeholder="Cheese Name"/>
                <input type="text" name="countryOfOrigin" placeholder="Cheese place of origin"/>
                <input type="text" name="image" placeholder="Cheese's Image"/>
                <input type="submit" value="Create Cheese"/>
            </Form>
        </div>
        <div className="showcheese">
            {cheese.map((cheese, index)=>{
                return <div key={cheese._id} className="cheese">
                    <Link to={`/${cheese._id}`}>
                        <h3>{cheese.name}</h3>
                    </Link>
                    <img src={cheese.image} alt={cheese.name}/>
                </div>
            })}
        </div>
    </div>
}

export default Index