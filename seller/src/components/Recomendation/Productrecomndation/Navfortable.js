import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Tableformycategory from './Tableformycategory'

const Navfortable = () => {
  const ordertabs = [
    {tabname:"My Category",
    tabId : "1",
    icon1:"las la-cube",
},
{tabname:"Other Category",
tabId : "2",
icon1:"las la-cube",
orCount:"5"
},
{tabname:"Shortlisted",
tabId : "3",
icon1:"ri-heart-line",
orCount:"5"
},
{tabname:"Uploaded",
tabId : "4",
icon1:"ri-upload-2-line",
}
]
const [tebs, settabs] = useState('1');
  return (
    <>

<div className='tablistaddpro rounded-3 w-100' style={{backgroundColor:"white",overflow:'auto'}}>
            <ul className="nav nav-tabs w-100" id="ex2" role="tablist" style={{marginBottom:'-20px'}}>
          {
            ordertabs.map((elem)=>{
                return (
                    <>
                      <li className="p-1" role="presentation">
                    <Link
                        className={tebs === `${elem.tabId}` ? `nav-link text-capitalize  p-2 py-3 active` : `text-capitalize nav-link  p-2 py-3`}
                        id="ex3-tab-2"
                        data-mdb-toggle="tab"
                        href="#ex1-tabs-2"
                        role="tab"
                        style={tebs === `${elem.tabId}` ? (
                            {fontWeight: '600',backgroundColor:"transparent",fontSize: '16px',lineHeight: '24px',color: '#164C96'}
                            ):(
                            {fontWeight: '600',backgroundColor:"transparent",fontSize: '16px',lineHeight: '24px',color: '#667085'}
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

            <div className="tab-content w-100" id="ex2-content">
                {tebs === '1' ? (
                    <div className='overflow-auto container-fluid px-0 ttscrollbar'>
                       <Tableformycategory/>

                       
                    </div>
                ) : ""}
                {tebs === '2' ? (
                    <div>
                  fdsfsdsdsdfsfdssdsfdsdfs

                </div>
                ) : console.log(tebs)}
                {tebs === '3' ? (
                    <div>
                  fdsfsdsdsdfsfdssdsfdsdfs

                </div>
                ) : ""}
                {
                    tebs === '4' ? (
                        <div>
                  fdsfsdsdsdfsfdssdsfdsdfs
                </div>
                    ) : ""}
                {
                    tebs === '5' ? (
                        <div>
                        fdsfsdsdsdfsfdssdsfdsdfs
                      </div>
                    ) : ""
                }



{
                    tebs === '6' ? (
                        <div>
                       6666666
                      </div>
                    ) : ""
                }
            </div>
        </div>
 
           
    </>
  )
}

export default Navfortable