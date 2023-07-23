import React from 'react'
import { Link } from "react-router-dom";


const AlreadyMember = () => {
  return (
    <>
     <div className="userSinUpMain">
            <div className="userSinUp">
              <Link to="/login">Alredy have a member?</Link>
              <Link to="/login">
                <button>
                  <i className="las la-user"></i>Sign in
                </button>
              </Link>
            </div>
          </div>
      
    </>
  )
}

export default AlreadyMember
