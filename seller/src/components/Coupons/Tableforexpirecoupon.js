import React,{useEffect} from 'react'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Data from "./Dataforlistexpire.js"
import {useAlert} from "react-alert"
import { deleteCoupon, getCouponSeller } from '../../Actions/couponAction.js';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate} from "react-router-dom";
import { DELETE_COUPON_RESET } from '../../Constants/couponConstants.js';
export default function Tableforexpirecoupon() {

    const Alert = useAlert();
    const dispatch = useDispatch();
    const Navigate = useNavigate()

   const {isDeleted,error} =useSelector((state)=>state.coupondelete)
  
   const {coupons } = useSelector(
    (state) => state.coupons
  );
 
    const reformatDate = (dateStr) => {
        var dArr = dateStr.split("-");  // ex input: "2010-01-18"
        return dArr[2] + "-" + dArr[1] + "-" + dArr[0]; //ex output: "18/01/10"
    }
    const datecompare = (datecom) => {
        return (new Date(datecom) < new Date(Date.now()))
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



    //   delete coupon code
    const deletdeCouponCode = (id)=>{
        dispatch(deleteCoupon(id))

    }

    useEffect(() => {
        dispatch({type:DELETE_COUPON_RESET})
        if(isDeleted){
            Alert.success("Coupon Deleted Sucessfully")
           Navigate("/coupon")
        }
        if(error){
            Alert.error(
                error
            )
        }

        dispatch(getCouponSeller())
    }, [dispatch,isDeleted,Navigate, Alert ,error])
    
   
    
    return (
        <table class="table table-content-coupon  w-100" style={{ overflow: 'auto', fontSize: `12px`, fontWeight: `600`, fontSize: `14px`, lineHeight: `20px`, color: `#667085` }}>
            <thead >
                <tr className='text-dark' style={{ background: '#F5F7F9' }} >
                    <th scope="col" className='m-0 p-1 text-center'>#</th>
                    <th className='m-0 px-2 pb-0 pt-0' style={{ margin: `0px` }}>
                        <div className="d-flex pt-0" style={{ margin: '0 auto', width: 'fit-content' }}>
                            <p style={{ marginBottom: `0px` }}>Coupon Id</p>
                            <div className="d-flex flex-column mx-1" ><ArrowDropUpIcon fontSize='10px' /><ArrowDropDownIcon fontSize='10px' style={{ marginTop: '-10px' }} /></div>
                        </div>
                    </th>
                    <th scope="col" className='m-0 p-1 text-center'>Coupon Code</th>
                    <th scope="col" className='m-0 p-1 text-center'>Type</th>
                    <th scope="col" className='m-0 p-1 text-center'>Start Date</th>
                    <th scope="col" className='m-0 p-1 text-center'>End Date</th>
                    <th scope="col" className='m-0 p-1 text-center'>Discount</th>
                    <th scope="col" className='m-0 p-1 text-center'>Action</th>
                </tr>
            </thead>
            <tbody>
                {coupons && coupons.map((data) => {

                    if (datecompare(data.ending_date)) {

                        return (
                            <tr className='border m-0 p-0'>
                                <th scope='row'> <input style={{ fontSize: `10px`, margin: '0 auto', width: 'fit-content' }} type="checkbox" className='mt-2' /></th>
                                <th scope='row' className='mt-0 px-1 productcol1 text-center' style={{ fontWeight: '600', fontSize: `14px`, lineHeight: `20px`, color: `#344054` }}>
                                    {data.coupon_id}
                                </th>

                                <td className='text-center'><span id={`${data._id}copy`}>{data.coupon_code}</span> <i class="las la-copy fs-5" style={{ color: '#164C96' }} onClick={(e)=> copytocilp(`${data._id}copy`)}></i></td>
                                <td className='text-center'>{data.coupon_type}</td>
                                <td className='text-center'>{reformatDate(data.start_date)}</td>
                                <td className='text-center'>{reformatDate(data.ending_date)}</td>
                                <td className='text-success text-center'>{data.discount_constant}</td>
                                <td style={{ fontWeight: '600', fontSize: `14px`, lineHeight: `20px`, color: `#344054` }}>
                                    <div onClick={()=>deletdeCouponCode(data._id)} className="btn shadow-none d-flex align-items-center border border-danger gap-1 p-1 px-3 rounded-pill" style={{ width: 'fit-content', color: '#B42318', margin: '0 auto' }}><i class="las la-trash-alt fs-5" ></i><p className='pb-0 mb-0' style={{ width: 'fit-content' }}>Delete</p></div>
                                </td>

                            </tr>
                        )
                    }
                })}
            </tbody>
        </table>
    )
}
