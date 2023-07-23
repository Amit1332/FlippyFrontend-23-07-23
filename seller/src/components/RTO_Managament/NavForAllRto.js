import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import TableForRto from './TableForRto';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./Rto_manage.css";

export default function NavForAllRto() {
  const ordertabs = [
    { tabname:"In Transist",
    tabId : "1",
    icon1:'las la-file-alt'
},
    { tabname:"Delivery Today",
    tabId : "2",
    icon1:'las la-shuttle-van',
    orCount:"24"
},
    { tabname:"Completed",
    tabId : "3",
    icon1:'las la-check-circle',
    orCount:"4"
},
// {tabname:"Expired",
// tabId : "2",
// orCount:"5"
// }
]
const [tebs, settabs] = useState('1');
  return (
    <div className='tablistaddpro rounded-3' style={{backgroundColor:"white",overflow:'auto'}}>
            <div className="d-flex gap-4 tttsc justify-content-between align-items-center text-nowrap p-4 py-5" style={{overflow:"auto", overflowY:"hidden"}}>
            <div className="">

            <ul className="nav nav-tabs w-100 " id="ex2" role="tablist" style={{marginBottom:'-20px', display:`flex`,flexWrap:'nowrap'}}>
          {
            ordertabs.map((elem)=>{
                return (
                    <>
                      <li className='p-1 pb-4' role="presentation">
                    <Link
                        className={tebs === `${elem.tabId}` ? `nav-link text-capitalize  p-2 py-3  active` : `text-capitalize nav-link  p-2 py-3`}
                        id="ex3-tab-2"
                        data-mdb-toggle="tab"
                        href="#ex1-tabs-2"
                        
                        role="tab"
                        style={tebs === `${elem.tabId}` ? (
                            {fontWeight: '600',fontSize: '16px',lineHeight: '18px',color: '#164C96'}
                            ):(
                            {fontWeight: '600',fontSize: '16px',lineHeight: '18px',color: '#667085'}
                            )}
                        onClick={() => { settabs(`${elem.tabId}`) }}
                        aria-controls="ex3-tabs-2"
                    >
                        <span style={{fontWeight:'100'}}>

                          <i className={`${elem.icon1}`} style={{fontSize:'18px', marginRight:'5px'}}></i>
                        </span>
                        {elem.tabname}
                        <span class="badge rounded-pill" style={{backgroundColor:"#FEF4E9",color:"#D94A27"}}>{elem.orCount}</span>
                        </Link>
                    
                </li>
                    </>
                )
            })
          }
              
            </ul>
            </div>
            <div className="rto-nav-button"><i class="las la-download"></i>Download</div>

</div>
            <div className="tab-content w-100 mt-3 text-nowrap" id="ex2-content">
                {tebs === '1' ? (
                  <div>
                    <div className=' container-fluid   ttscrollbar w-100' style={{}}>
                    <div className="row nav_uppp py-3" style={{backgroundColor:"#F9FAFB"}}>
                           <div className="col uppp">
                                 <form className='searchbtn m-0' action="">
                                     <button style={{color:"#667085",backgroundColor:"transparent"}} type="submit"><i style={{color:"#667085",backgroundColor:"transparent"}} class="las la-search"></i></button>
                                     <input type="text" placeholder="Search by order id and product id" />
                                 </form>
                            </div>
                         <div className="col d-flex ddduppp gap-1">
                                
                                 <div className=" p-2 border d-flex col gap-2 btnttt rounded-3"  style={{fontSize:'10px',alignItems:'center', margin:'0px'}}>
                                            <i class="las la-calendar-minus" style={{marginBottom:'0px'}}></i>
                                            <h5 style={{fontSize:'12px', marginBottom:'0px', paddingBottom:'0px'}}>01 Jan, 2023 to 31 Jan, 2023 </h5>
                                 </div>
                                 <div className=" p-2 border d-flex col gap-2 btnttt rounded-3"  style={{fontSize:'10px',alignItems:'center', margin:'0px'}}>
                                            <h5 style={{fontSize:'10px',marginBottom:'0px', paddingBottom:'0px'}}>Paid</h5>
                                      <i class="las la-angle-down" style={{marginBottom:'0px'}}></i>
                                 </div>
                                 <div className=" p-2 border d-flex col gap-2 btnttt rounded-3"  style={{fontSize:'10px',alignItems:'center', margin:'0px'}} >
                                            <h5 style={{fontSize:'10px',marginBottom:'0px', paddingBottom:'0px'}}>Courier Paid</h5>
                                      <i class="las la-angle-down" style={{marginBottom:'0px'}}></i>
                                 </div>
                                 <div className=" p-2 border d-flex col gap-2 btnttt rounded-3"  style={{fontSize:'10px',alignItems:'center', margin:'0px'}} >
                                            <h5 style={{fontSize:'10px',marginBottom:'0px', paddingBottom:'0px'}}>Return Paid</h5>
                                            <i class="las la-angle-down" style={{marginBottom:'0px'}}></i>
                                 </div>
                                 <div className=" p-2 border d-flex col gap-2 btnttt rounded-3"  style={{fontSize:'10px', alignItems:'center', margin:'0px'}}>
                                            <i class="las la-calendar-minus"></i>
                                            <h5 style={{fontSize:'10px',marginBottom:'0px', paddingBottom:'0px'}}>Filters </h5>
                                 </div>
                         </div>
                    </div>
                    </div>
                    <div className='tttsc' style={{overflow:'auto'}}>
                    <TableForRto/> 
                    </div>
                    </div>
                ) : ""}
                {tebs === '2' ? (
                     <div className='overflow-auto container-fluid px-0 ttscrollbar'>

                     
                  </div>
                ) : ""
               }
            
        </div>
        </div>  

  )
}