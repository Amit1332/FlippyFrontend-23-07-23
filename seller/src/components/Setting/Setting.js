import React from 'react'
import { Link } from 'react-router-dom'
import Navforallproduct from './NavforSetting'
import "./Styleforsetting.css"
import WhatsAppLogo from "./Whatsapplogo.svg"
export default function Setting() {
  return (
    <div className='settingpage p-2 px-3  overflow-hidden'>
      <div class="row gap-0" >
  <div class="p-0 mx-0 col-3 navsetting text-nowrap">
    <div class="nav flex-column nav-pills navsidesetting" id="v-pills-tab" role="tablist" style={{fontSize:".8rem"}} aria-orientation="vertical">
      <a class="nav-link d-flex mx-0 bg-dark-subtittle active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"><div className="d-flex" style={{width:'fit-content', height:'fit-content', alignItems:'center', gap:'10px'}}><i class="las la-lock fs-6"></i><span className='text-capitalize'> Change Password</span></div></a>
      <a class="nav-link d-flex mx-0 bg-dark-subtittle" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"><div className="d-flex" style={{width:'fit-content', height:'fit-content', alignItems:'center', gap:'10px'}}><i class="lab la-whatsapp  fs-6"></i><span className='text-capitalize'>Whatsapp Notification</span></div></a>
      <a class="nav-link d-flex mx-0 bg-dark-subtittle" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false"><div className="d-flex" style={{width:'fit-content', height:'fit-content', alignItems:'center', gap:'10px'}}><i class="las la-file-alt fs-6"></i><span className='text-capitalize'>Legal and Policies</span></div></a>
      
    </div>
  </div>
  <div class="col pt-2 p-0 mx-0  ">
    <div class="tab-content " id="v-pills-tabContent">

      <div class="tab-pane p-4 text-start fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
        <h1 className='fs-2'>Change Password</h1>
        <input className='border fs-6 d-block my-4' style={{borderRadius:'3px'}} type="text" placeholder='Current Password'/>
        <input className='border fs-6 d-block my-4' style={{borderRadius:'3px'}} type="text" placeholder='New Password'/>

        <div className="conditions">
            <ul style={{fontSize:".8rem"}}>
                <li>&nbsp;&nbsp;Minimum 8 characters</li>
                <li>&nbsp;&nbsp;1 Capital letter (A-Z)</li>
                <li>&nbsp;&nbsp;1 Special Characters (@#$%^&*)</li>
                <li>&nbsp;&nbsp;1 Number</li>
            </ul>
        </div>
        <input className='border fs-6 d-block my-4' style={{borderRadius:'3px'}} type="text" placeholder='Re-type New Password'/>
        <div className="p-2 px-3 mt-4 btn2 mx-0" style={{width:'fit-content', border:'1px solid #164C96', color:'#164C96'}}>
            Change Password
        </div>
      </div>
      <div class="tab-pane fade p-4" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
        <h1 className='fs-3'>WhatsApp Notification</h1>
        <div className="d-flex mt-4 dflexnone">
            <img src={WhatsAppLogo} style={{height:'2rem'}} alt="" />
            <p style={{fontSize:"1rem"}}>You are subscribed to Whatsapp notification on this number:8719042819</p>
        </div>
        <div className="p-2 px-3 mt-4 btn2" style={{width:'fit-content', border:'1px solid #164C96', color:'#164C96'}}>
            Change Number
        </div>
        <hr className='mt-4 p-0' />
        <p>Don't need Whatsapp notifications any longer ? <span style={{color:"#164C96"}}>&nbsp; Unsubscribe</span></p>
      </div>
      <div class="tab-pane fade p-4" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
        <h1 className='fs-3 mb-4 text-start'>Legal and Policies</h1>
        <div className="ruleslegal" style={{color:'#164C96'}}>

        <div className="d-flex gap-2 my-2">
        <i class="las la-angle-right fs-6"></i>
        <p style={{margin:'0px'}} className='fs-6'>Anti Phishing Policy</p>
        </div>
       
        <div className="d-flex gap-2 my-2">
        <i class="las la-angle-right fs-6"></i>
        <p style={{margin:'0px'}} className='fs-6'>Anti Phishing Policy</p>
        </div>
        <div className="d-flex gap-2 my-2">
        <i class="las la-angle-right fs-6"></i>
        <p style={{margin:'0px'}} className='fs-6'>Anti Phishing Policy</p>
        </div>
        <div className="d-flex gap-2 my-2">
        <i class="las la-angle-right fs-6"></i>
        <p style={{margin:'0px'}} className='fs-6'>Anti Phishing Policy</p>
        </div>
        <div className="d-flex gap-2 my-2">
        <i class="las la-angle-right fs-6"></i>
        <p style={{margin:'0px'}} className='fs-6'>Anti Phishing Policy</p>
        </div>
        <div className="d-flex gap-2 my-2">
        <i class="las la-angle-right fs-6"></i>
        <p style={{margin:'0px'}} className='fs-6'>Anti Phishing Policy</p>
        </div>



        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
