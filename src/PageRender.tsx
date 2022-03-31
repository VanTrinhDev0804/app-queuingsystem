import React from 'react'
import { useParams } from "react-router-dom"
import { IParams } from './types/index'


const generatePage = (name: string) => {
    const page = () => require(`./pages/${name}`).default;


    try {
        return React.createElement(page());
    } catch (error) {
        return <h2> Not Found</h2>
    }

}


const PageRender = () => {
    const { page, control }: IParams = useParams();

    let name = '';
    if (page) {
        name = control ? `${page}/[control]` : `${page}`;
    }

    return generatePage(name)
}


export default PageRender