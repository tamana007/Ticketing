import React from 'react'
import { Breadcrumb } from 'react-bootstrap'

function BreadCrupm({page}) {
  return (
    <Breadcrumb>
    <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
    <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
      TicketTables
    </Breadcrumb.Item>
    <Breadcrumb.Item active>{page}</Breadcrumb.Item>
  </Breadcrumb>

  )
}

export default BreadCrupm