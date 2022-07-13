import React from 'react'
import "./serviceList.css"
import Service from "../service/Service"
import { services } from '../../data'

export const ServiceList = () => {
  return (
    <div className="sl">
        <div className="sl-texts">
            <h1 className="sl-title"> Make & Amaze.</h1>
            <p className="sl-desc">
                I've been waiting to make your dream come digital!
                Stunning pages built on React, Web3 MERN applications, Django backend, Telegram/Discord bots &
                whole lot more!
            </p>
        </div>
        <div className="sl-list">
           {services.map(item=>(
             <Service key={item.id} img={item.img} link={item.link} />
           ))}
        </div>
    </div>
  )
}
