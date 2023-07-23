import React,{useState} from "react";
import TicketTable from "./TicketTable";

function Ticket() {
  const pgtabs = [
    { tabname: "Return/RTO Exchange", tabId: "1" },
    { tabname: "Payments", tabId: "2" },
    { tabname: "Orders & Delivery", tabId: "3" },
    { tabname: "Catalogue", tabId: "4" },
    { tabname: "Pricing Approval", tabId: "5" },
    { tabname: "Others", tabId: "6" },
    { tabname: "Leave Request", tabId: "7" },
  ];
  const [tebs, settabs] = useState("0");
  return (
    <>


      <div className="container-fluid allproducts">
        <div className="innerallproducts">
          <div className="productheading">
            <div className="productheadingtop">
              <h3 class="mb-0 my-2 h6 text-center">All Ticket</h3>

            </div>
            <div className="productsfilter">
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
                      {pgtabs.map((elem) => {
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
                {tebs === "0" ? (
                  <div className="container-fluid p-0">
                   <TicketTable />
                  </div>
                ) : (
                  ""
                )}
                {tebs === "1" ? (
                  <div className="container-fluid p-0">
                   <TicketTable />
                  </div>
                ) : (
                  ""
                )}
                {tebs === "2" ? (
                  <div>
                 <TicketTable />
                  </div>
                ) : (
                  ""
                )}
                {tebs === "3" ? (
                  <div>
               <TicketTable />
                  </div>
                ) : (
                  ""
                )}
                {tebs === "4" ? (
                  <div>
                <TicketTable />
                  </div>
                ) : (
                  ""
                )}
                {tebs === "5" ? (
                  <div>
                  <TicketTable />
                  </div>
                ) : (
                  ""
                )}

                {tebs === "6" ? (
                  <div>
                  <TicketTable />
                  </div>
                ) : (
                  ""
                )}
                {tebs === "7" ? (
                  <div>
                  <TicketTable />
                  </div>
                ) : (
                  ""
                )}

               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ticket;
