import React,{useState} from 'react'
import "../Customers/Customerlist.css"
import CustomerlistTable from './CustomerlistTable'

function Customerlist() {
    const custtabs = [
        { tabname: "Bank Details", tabId: "1" },
        { tabname: "Payment Details", tabId: "2" },
        { tabname: "All Referals", tabId: "3" },
        { tabname: "Wallet History", tabId: "4" },
        
    
      ];
      const [tebs, settabs] = useState("0");




      
    return (
        <>           
        <div className="container-fluid allproducts">
        <div className="innerallproducts">
          <div className="productheading">
            <div className="productheadingtop">
              <h3 class="mb-0 my-2 h6 text-center">All Customers</h3>
            </div>
            <div className="productsfilter p-0">
              <div className="searfilterproduct">
                <div className="col">
                  <div
                    className="containefff w-100"
                  >
                    <ul
                      className="nav nav-tabs  gap-2 text-nowrap d-flex align-items-center justify-content-center flex-wrap pb-1"
                      id="ex2"
                      role="tablist"
                    >
                      {custtabs.map((elem) => {
                        return (
                          <>
                            <li
                              className="px-1 d-flex flex-wrap"
                              style={{ flexShrink: "0" }}
                              role="presentation"
                            >
                              <button
                                className={
                                  tebs === `${elem.tabId}`
                                    ? `  text-capitalize text-success btn rounded-pill shadow-none`
                                    : `text-capitalize  btn rounded-pill shadow-none`
                                }
                                
                              
                                id="ex3-tab-2"
                                data-mdb-toggle="tab"
                                // href="#ex1-tabs-2"
                                role="tab"
                                onClick={() => {
                                  settabs(`${elem.tabId}`);
                                }}
                                aria-controls="ex3-tabs-2"
                                style={{backgroundColor: "#E7F4FC",color: "#103A81",fontWeight: "bold"}}
                              >
                                {elem.tabname}
                                
                              </button>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>









              <div className="tab-content mt-3" id="ex2-content">
              {tebs === '0' ? (
                    <div className='container-fluid p-0'>
                             <CustomerlistTable/>
                       
                    </div>
                ) : ""}
                {tebs === '1' ? (
                    <div className='container-fluid p-0'>
                             <CustomerlistTable/>

                       
                    </div>
                ) : ""}
                {tebs === '2' ? (
                    <div>
                             <CustomerlistTable/>

                </div>
                ) : ""}
                {tebs === '3' ? (
                <div>
                             <CustomerlistTable/>


                </div>
                ) : ""}
                {
                    tebs === '4' ? (
                        <div>
                             <CustomerlistTable/>

                </div>
                    ) : ""}
                
               


            </div>
            </div>
          </div>


      


        </div>
      </div>
        </>
    )
}

export default Customerlist
