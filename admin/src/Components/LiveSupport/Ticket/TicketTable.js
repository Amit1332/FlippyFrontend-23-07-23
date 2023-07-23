import React from 'react'
import TicketTableData from './TicketTableData'

const TicketTable = () => {
  return (
    <>

<div className="row p-2" >
            <div className="card p-0">
            <div class="table-responsive producscroller_responsive">
  <table class="table css-serial text-nowrap startcontentleft">
    <thead style={{backgroundColor:"#F9FAFB", color:"#667085"}}>
                  <tr>
                    <th scope="col">Ticket Id</th>
                    <th scope="col">User Type</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Ticket Status</th>
                    <th scope="col">Date</th>
                    <th scope="col">Action</th>
                    <th scope="col">Type</th>
                  </tr>
                </thead>
                <tbody>
                  <TicketTableData />
                  <TicketTableData />
                  <TicketTableData />
                  <TicketTableData />
                  <TicketTableData />
                  <TicketTableData />
                  <TicketTableData />
                  <TicketTableData />
                  <TicketTableData />
                  <TicketTableData />
                  <TicketTableData />
                  <TicketTableData />
                  <TicketTableData />
                  <TicketTableData />
                  <TicketTableData />
                  <TicketTableData />
                  <TicketTableData />

                </tbody>
              </table>
            </div>

            </div>
            </div>
    </>
  )
}

export default TicketTable
