import React from 'react'
import "./navfortable.css"
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export default function Tableformycategory() {
    const data = [{
        img:"https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        proname: '350 ml Glass Grocery',
        category:'Cloths',
        quantity:'18',
        shortlisted:'10',
        views:'15,000',
        orders:'10',
        sales:'34,435.00'

    },{
        img:"https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        proname: '350 ml Glass Grocery',
        category:'Cloths',
        quantity:'18',
        shortlisted:'10',
        views:'15,000',
        orders:'10',
        sales:'34,435.00'

    },{
        img:"https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        proname: '350 ml Glass Grocery',
        category:'Cloths',
        quantity:'18',
        shortlisted:'10',
        views:'15,000',
        orders:'10',
        sales:'34,435.00'

    },{
        img:"https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        proname: '350 ml Glass Grocery',
        category:'Cloths',
        quantity:'18',
        shortlisted:'10',
        views:'15,000',
        orders:'10',
        sales:'34,435.00'

    },{
        img:"https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        proname: '350 ml Glass Grocery',
        category:'Cloths',
        quantity:'18',
        shortlisted:'10',
        views:'15,000',
        orders:'10',
        sales:'34,435.00'

    },{
        img:"https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        proname: '350 ml Glass Grocery',
        category:'Cloths',
        quantity:'18',
        shortlisted:'10',
        views:'15,000',
        orders:'10',
        sales:'34,435.00'

    }]
    return (
        <div className='mt-1'>
            <table className=" text-nowrap  table table-content-product-recomendation" style={{ overflow: 'auto', fontSize: `12px`, fontWeight: `600`, fontSize: `14px`, lineHeight: `20px`, color: `#667085` }}>
                <thead className='pb-0 '>
                    <tr className=' pb-0 text-dark '  style={{background:"#F5F7F9"}}>
                        <th className='m-0 pt-2 px-3 pb-2 border-0' style={{ margin: `0px` }}>
                            <div className="d-flex">
                                 <p style={{marginBottom:`0px`}}>Product</p>
                                <div className="d-flex flex-column mx-1" ><ArrowDropUpIcon fontSize='10px' /><ArrowDropDownIcon fontSize='10px' style={{ marginTop: '-10px' }} /></div>
                            </div>
                        </th>
                        <th scope="col" className='m-0 pt-2 px-1 pb-2'><p style={{marginBottom:`0px`}}>Catagory</p></th>
                        <th scope='col' className='m-0 pt-2 px-1 pb-2'><p style={{marginBottom:`0px`}}>Quantity</p></th>
                        <th scope="col" className='m-0 pt-2 px-1 pb-2'><p style={{marginBottom:`0px`}}>Shortlisted</p></th>
                        <th scope="col" className='m-0 pt-2 px-1 pb-2'><p style={{marginBottom:`0px`}}>Views</p></th>
                        <th scope="col" className='m-0 pt-2 px-1 pb-2'><p style={{marginBottom:`0px`}}>Orders</p></th>
                        <th scope="col" className='m-0 pt-2 px-1 pb-2'><p style={{marginBottom:`0px`}}>Sales</p></th>
                        <th scope="col" className='m-0 pt-2 px-1 pb-2'><p style={{marginBottom:`0px`}}>Action</p></th>

                    </tr>
                </thead>
                <tbody>
                    {data.map((ele)=>{
                        return (
                            <tr className='border-top m-0 '>
                            <th scope='row' className='p-2 px-3 productcol1'>
                                <div className='productrecomendationimgtable '>
                                    <img src={ele.img} alt="" />
                                    <p>{ele.proname}</p>
                                </div>
                            </th>
                            <td className='p-2 px-1'><p>{ele.category}</p></td>
                            <td className='p-2 px-1'><p>{ele.quantity}</p></td>
                            <td className='p-2 px-1'><p>{ele.shortlisted}</p></td>
                            <td className='p-2 px-1'><p>{ele.views}</p></td>
                            <td className='p-2 px-1'><p>{ele.orders}</p></td>
                            <td className='p-2 px-1'><p>₹{ele.sales}</p></td>
                            <td className='p-2 px-1 productcollast'><div className="rounded-pill border shadow-none p-1 px-2 btn2" style={{ width: 'fit-content', fontSize: '12px' }}>View Details</div></td>
                        </tr>
                        )
                    })}
                  
                   



                </tbody>
            </table>
          

        </div>
    )
}
