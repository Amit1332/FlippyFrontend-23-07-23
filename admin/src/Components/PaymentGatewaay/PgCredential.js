import React, { useState } from "react";
import { Link } from "react-router-dom";
import SetPg from "./SetPg";

const PgCredential = () => {
  const pgtabs = [
    { tabname: "Previous Payments", tabId: "1" },
    { tabname: "Commission Tax Invoice", tabId: "2" },
    { tabname: "Compensations & Support Ser.. Chrg..", tabId: "3" },
    { tabname: "Next Payment", tabId: "4" },
    { tabname: "Last Payment", tabId: "5" },
    { tabname: "Total Outstanding Payments", tabId: "6" },
    { tabname: "Add Cost", tabId: "7" },
    { tabname: "Referal Payment", tabId: "8" },
  ];
  const [tebs, settabs] = useState("0");
  return (
    <>
      <div className="container-fluid allproducts">
        <div className="innerallproducts">
          <div className="productheading">
            <div className="productheadingtop">
            <h3 class="mb-0 h6 text-center">Set PG Credentials</h3>
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
                    <SetPg />
                  </div>
                ) : (
                  ""
                )}
                {tebs === "1" ? (
                  <div className="container-fluid p-0">
                    <SetPg />
                  </div>
                ) : (
                  ""
                )}
                {tebs === "2" ? (
                  <div>
                    <SetPg />
                  </div>
                ) : (
                  ""
                )}
                {tebs === "3" ? (
                  <div>
                    <SetPg />
                  </div>
                ) : (
                  ""
                )}
                {tebs === "4" ? (
                  <div>
                    <SetPg />
                  </div>
                ) : (
                  ""
                )}
                {tebs === "5" ? (
                  <div>
                    <SetPg />
                  </div>
                ) : (
                  ""
                )}

                {tebs === "6" ? (
                  <div>
                    <SetPg />
                  </div>
                ) : (
                  ""
                )}
                {tebs === "7" ? (
                  <div>
                    <SetPg />
                  </div>
                ) : (
                  ""
                )}

                {tebs === "8" ? (
                  <div>
                    <SetPg />
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
};

export default PgCredential;
