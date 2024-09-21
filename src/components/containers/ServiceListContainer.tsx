"use client"
import { SearchProvider } from '@/context/searchContext'
import React from 'react'
import ServiceList from '../ServiceList/ServiceList'

const ServiceListContainer = ({services} : {services: ServiceType[]}) => {
  return (
    <>
    <SearchProvider>
        <ServiceList services={services}/>
    </SearchProvider>
    </>
  )
}

export default ServiceListContainer