import Head from 'next/head'
import React from 'react'
import {useEffect} from "react"
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import {Navs} from "./components/Navs";


export default function Home() {

    useEffect(()=>{


    }, [])
    let items = [
        {
            name: "Твори и Создавай",
            description: "Probably the most random thing you have ever seen!",
            buttonNameLeft: "Handmade",
            buttonNameRight: "Творчество",
            img: "/2.jpg"
        },
        {
            name: "Учись и познавай",
            description: "Hello World!",
            buttonNameLeft: "Social",
            buttonNameRight: "Профориентация",
            img: "/1.jpg"
        },
        {
            name: "Предлагай и действуй",
            description: "Hello World!",
            buttonNameLeft: "Молодежная политика",
            buttonNameRight: "Волонтерство",
            img: "/3.jpg"
        }
    ]
  return (
    <div >
        <Navs/>
        <Carousel
            className={'slider_main'}
            autoPlay={false}
            navButtonsAlwaysVisible={true}
            animation={'fade'}
            indicators={false}
        >

            {
                items.map( (item, i) => <Item key={i} item={item} img={item.img} /> )
            }
        </Carousel>



    </div>
  )
}
function Item(props)
{
    return (
        <Paper className={'slider_main_paper'}>
            <div className="img_class">
            <img src={`${props.img}`} alt=""/>

            <div className="slider_blur container-fluid d-flex align-items-center">
                <div className="col-12 align-items-center">
                <div className="row align-middle">
                    <div className="col-12 d-flex justify-content-center">
                        <h2 className={'orange'}>{props.item.name}</h2>
                    </div>
                </div>
                <div className="row align-middle">
                    <div className="col-6 d-flex justify-content-end">
                        <button className={'btn btn-color large '}><i className="fa fa-address-book"
                                                                      aria-hidden="true"></i>{props.item.buttonNameLeft}</button>
                    </div>
                    <div className="col-6 d-flex justify-content-start">
                        <button className={'btn btn-color large'}>{props.item.buttonNameRight}</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </Paper>
    )
}