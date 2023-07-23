import React from 'react'
import SecondNavProduct from '../Include/SecondNavProduct'
import AddNewTicket from './AddNewTicket'
import Navforallproduct from './NavforAllProduct'
import Tableforallproduct from './Tableforallproduct'
const SupportTicket = () => {

    return (
        <>

<SecondNavProduct  Name={{name:"All Ticket", directory:"Home > Ticket"}} Btn={[{name:"Add New",style: "bluebtn", icon:'las la-plus-circle',databstoggle:'offcanvas',databstarget:'#offcanvasRight',ariacont:'offcanvasRight'}]}/>

            <div className='container-fluid p-0'>

                <Navforallproduct />
                <AddNewTicket />
            </div>
        </>
    )
}

export default SupportTicket