


import Trainersbox from './Trainers_box';
import axios from 'axios';
import React,  { useState,useEffect } from 'react';
const Trainers = (props) => {
    const [arr, setarr] = useState([])
    const GetData = () => {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log('respose', res)
                setarr(res.data)
            })
            .catch()
    }


    useEffect(() => {
        GetData()
      },[]);
    return (
        <div className="bg-light">
            <div className="container bg-light py-1">

                <h2 className="m-heading text-center py-1">Expert <span className="text-pink">Trainers</span></h2>


                {/* bta3 kol elsection */}
                <div className="row">
                        {arr.map((item,index) => {
                            return (
                                <React.Fragment  >
                                    {index<9?
                                    <Trainersbox title={item.title} body={item.body}></Trainersbox>
                                    :''}
                                </React.Fragment>
                               
                            )
                        })}





                </div>
            </div>






        </div>






    )
}
export default Trainers;