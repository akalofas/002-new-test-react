import React from 'react'
import {variables} from '../../../../variables'
import fetchData from '../../../../components/fetchData'

const resource = fetchData('https://jsonplaceholder.typicode.com/todos/1')

const Test_bl = () => {
    const customerBalance = resource.read()


  return (
        <div>
            <p>koukou <span>{customerBalance}</span></p>
        </div>
    ) 
}


export default Test_bl;