import React from 'react'
import Cardtop from './Cardtop'
import Secondnavproduct from '../../Include/SecondNavProduct'
import Navfortable from './Navfortable'
export default function Productrecomdation() {
    return (
        <div className='mainrecomnedation' style={{background:'#F5F7F9'}}>
            <Secondnavproduct
                Name={{ name: "Product Recommendation", directory: "Home > Product Recommendation" }}
                Btn={[
                    { name: "How it works?", icon: "lab la-youtube text-danger fs-6" },
                ]}
            />
            <div className="down text-nowrap text-start p-3">

                <div className="cardContainer row   px-3" style={{marginBottom:'-10px',gap:"3px",background:'#F5F7F9'}}>
                    <Cardtop heading={"Shortlisted"} number={{ no: '197', icon: "lar la-heart" }} persent={'16.24'} />
                    <Cardtop heading={"Uploads"} number={{ no: '197', icon: "ri-upload-2-line" }} persent={'16.24'} />
                    <Cardtop heading={"Views"} number={{ no: '15,000', icon: "ri-eye-line" }} persent={'16.24'} />
                    <Cardtop heading={"Oreders"} number={{ no: '60', icon: "las la-cube" }} persent={'16.24'} />
                    <Cardtop heading={"Sales"} number={{ no: '₹34,435.00', icon: "ri-pie-chart-line" }} persent={'16.24'} />
                </div> 
                <div className="table mt-4 pt-0 mb-0">
                    <Navfortable />
                </div>
            </div>
        </div>
    )
}
