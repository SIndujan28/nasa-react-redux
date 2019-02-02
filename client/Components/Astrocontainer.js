import React,{Component} from 'react'
import AstronomyCard from './Astrocard'
import axios from 'axios'

class AstroContainer extends Component
{
    constructor()
    {
        super();
        this.state={
            astronomy:[]
        }
    }

    componentDidMount()
    {
        const API_KEY='3y3xHeatBFbDgrKJsE1JkfSSebxouD3pZFZV16bh'
        const END_POINT='https://api.nasa.gov/planetary/apod?api_key='

        axios.get(END_POINT+API_KEY)
        .then((response)=>
        {
                this.setState({
                    astronomy:response.data
                })
        })
        .catch((err)=>{
            console.log(err)
        })

    }

    render()
    {
        const {astronomy}=this.state;

        return(
            <AstronomyCard data={astronomy}/>
        )
    }
}

export default AstroContainer