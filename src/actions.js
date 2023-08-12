// the url for the backend server
import {baseUrl} from './baseUrl';
// function allows us to redirect to other routes
import { redirect } from 'react-router-dom';

export const createAction= async ({request}) => {
    const formData = await request.formData()
    const newCheese={
        name: formData.get('name'),
        countryOfOrigin: formData.get('countryOfOrigin'),
        image: formData.get('image')
    }
    // send to backend API
    await fetch(`${baseUrl}/cheese`, {
        method: 'POST',
        headers: {
            //tells our backend the data is json
            'Content-Type': 'application/json'
        },
        // send the json string
        body: JSON.stringify(newCheese)
    })

    //redirect the user back to the index route
    return redirect('/cheese')
}

export const updateAction = async ({request, params}) => {
    const id = params.id
    const formData = await request.formData()
    
    const updatedCheese = {
        name: formData.get('name'),
        countryOfOrigin: formData.get('countryOfOrigin'),
        image: formData.get('image')
    }
    await fetch(`${baseUrl}/cheese/${id}`, {
        // tell fetch to make a put request
        method: 'PUT',
        headers: {
            "Content-Type" : "application/json"
        },
        // send the json string of the updatedPerson object
        body: JSON.stringify(updatedCheese)
    })
    // redirect back to show page frontend route
    return redirect(`cheese/${id}`)
}

export const deleteAction = async ({params}) => {
    const id = params.id
    // send a delete request to our backend API
    await fetch(`${baseUrl}/cheese/${id}`, {
        // tell fetch to make a delete request
        method: 'DELETE'
    })
    // redirect back to the frontend index route
    return redirect('/cheese')
}