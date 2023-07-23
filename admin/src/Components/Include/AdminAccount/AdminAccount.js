import React from 'react'

import { useSelector } from "react-redux";
import "./Profile.css"

const AdminAccount = () => {
  const {isAuthenticatedAdmin,admin} = useSelector((state)=> state.admin)
  console.log(admin)

  return (
    <>




              <div className="adminAccount">
                
              <div class="profile_card">
        <div class="cover-photo">
            <img src="https://i.imgur.com/KykRUCV.jpeg" class="profile"/>
        </div>
        <h3 class="profile-name">{admin.name}</h3>
        <div className="credadm">
        <p class="about"><span>Email : </span> {admin.email}<br/><span>Phone : </span> {admin.phone}</p>

        </div>
        <button class="btn">Role</button>
        <button class="btn">{admin.role}</button>
       
    </div>











              </div>




    </>
  )
}

export default AdminAccount
