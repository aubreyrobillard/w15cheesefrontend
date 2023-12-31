import {baseUrl} from './baseUrl'

export const cheeseLoader = async () => {
    //make a call to backend index route
    const response = await fetch(`${baseUrl}/cheese`)
    //convert the response in a js object
    const cheese = await response.json()
    // return the cheese
    return cheese
}

export const oneCheeseLoader = async ({params}) => {
    // get the id params for the params object
    const id = params.id
    // make a call to backend show route
    const response = await fetch(`${baseUrl}/cheese/${id}`)
    // convert the response into a js object
    const cheese = await response.json()
    // return the person
    return cheese

}