import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Data from "./Dataforlist";
import "./Styleforallcoupon.css"
import React, { useEffect } from 'react'
import {useAlert} from "react-alert"




export default function Tableforallproduct({coupons}) {
    const Alert = useAlert();
    const reformatDate = (dateStr)=>
    {
      var dArr = dateStr.split("-");  // ex input: "2010-01-18"
      return dArr[2]+ "-" +dArr[1]+ "-" +dArr[0]; //ex output: "18/01/10"
    }

    const datenow = ()=>{
        let date = new Date(Date.now())
let date2 = date.toLocaleString()
let date3 = date2.split(',')[0]
let date4 = date3.split('/')
let date5=''
date4.forEach((ele)=>{date5=ele+'-'+date5})
return date5;
    }
    const datecompare = (datecom)=>{
        return (new Date(datecom) > new Date(Date.now()))
       } 
       const copytocilp = (Id)=> {

        // Get the text field
        var copyText = document.getElementById(Id);
      
        // Select the text field
      
         // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.textContent);
      
        // Alert the copied text
        Alert.success("Coupon Code Copied")
      }


    return (
        <table className="table table-content-coupon text-center w-100" style={{ overflow: 'auto', fontSize: `12px`, fontWeight: `600`, fontSize: `14px`, lineHeight: `20px`, color: `#667085` }}>
            <thead>
                <tr className='text-dark' style={{ background:'#F5F7F9'}} >
                    <th scope="col" className='m-0 text-center p-1'>#</th>
                    <th className='m-0 px-2 text-center pb-0 pt-0' style={{ margin: `0px`, }}>
                        <div className="d-flex pt-0">
                            <p style={{ marginBottom: `0px` }}>Coupon Id</p>
                            <div className="d-flex flex-column mx-1" ><ArrowDropUpIcon fontSize='10px' /><ArrowDropDownIcon fontSize='10px' style={{ marginTop: '-10px' }} /></div>
                        </div>
                    </th>
                    <th scope="col" className='m-0 text-center p-1'>Coupon Code</th>
                    <th scope="col" className='m-0 text-center p-1'>Type</th>
                    <th scope="col" className='m-0 text-center p-1'>Start Date</th>
                    <th scope="col" className='m-0 text-center p-1'>End Date</th>
                    <th scope="col" className='m-0 text-center p-1'>Discount</th>
                    <th scope="col" className='m-0 text-center p-1'>Action</th>
                </tr>
            </thead>
            <tbody>
                {coupons && coupons.map((data) => {
                    if(datecompare(data.ending_date)){

                    return (
                        <tr className='border m-0 p-0'>
                            <th scope='row' className='text-center'> <input style={{ fontSize: `10px` }} type="checkbox" className='mt-2' /></th>
                            <th scope='row' className='mt-0 px-1 text-center productcol1' style={{fontWeight: '600',fontSize: `14px`,lineHeight: `20px`,color:`#344054`}}>
                                {data.coupon_id}
                            </th>
                            <td className='text-center'><span id={`${data._id}copy`}>{data.coupon_code}</span> <i class="las la-copy fs-5" style={{ color: '#164C96' }} onClick={(e)=> copytocilp(`${data._id}copy`)}></i></td>

                            {/* <td className='text-center'>{data.coupon_code} <i class="las la-copy fs-5" style={{color:'#164C96'}}></i></td> */}
                            <td className='text-center'>{data.coupon_type}</td>
                            <td className='text-center'>{reformatDate(data.start_date.substring(0, 10))}</td>
                            <td className='text-center'>{reformatDate(data.ending_date.substring(0, 10))}</td>
                            <td className='text-success text-center'>{data.discount_constant}</td>
                            <td style={{fontWeight: '600',fontSize: `14px`,lineHeight: `20px`,color:`#344054`}} className='text-center'>
                                <div className="d-flex gap-1" style={{width:'fit-content', margin:'0 auto'}}>
                                <p>Active</p>
                                <div class="form-check form-switch">
                                    {data.status_coupon ? (
                                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked />
                                        ) : (
                                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                            )}

                                </div>
                                <p>Deactivate</p>
                                </div>
                            </td>
                            
                        </tr>
                    )
                }
                })}
            </tbody>
        </table>
    )
}
