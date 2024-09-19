"use client"
import React from 'react'
import Image from 'next/image'
import './companyCard.css'

type CompanyCardParams = {
  service: ServiceType,
}
const CompanyCard = ({service} : CompanyCardParams) => {
    const imageName = service.name.toLowerCase().replace(/ /g, "");
  return (
    <span id="card-information">
        <div>
            <Image src={`/${imageName}.png`} alt={service.name} width={800} height={600}/>
            <p>{service.name}</p>
        </div>
        <button type="button">Seleccionar</button>
    </span>
  )
}

export default CompanyCard