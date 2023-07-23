import React from "react";
import PaymentInvoiceTable from "./PaymentInvoiceTable";
import SubTotalPrice from "./SubTotalPrice";

const InvoiceLabel = () => {
  return (
    <>
      <div className="container-fluid  d-flex align-items-center">
        <div className="row d-flex align-items-center justify-content-center w-100">
          <div className="card" style={{ maxWidth: "60%" }}>
            <div className="card-body px-2">
              <div className="row">
                <div className="col d-flex justify-content-start align-items-start flex-column">
                  <div className="col">
                    <div className="invoicePhoto">
                      <img
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col mt-2">
                    <h5>
                      {" "}
                      <span
                        class="badge text-success rounded-pill fw-normal"
                        style={{ backgroundColor: "#ECFDF3" }}
                      >
                        Paid
                      </span>
                    </h5>
                  </div>

                  <div className="col text-nowrap mt-2">
                    <div className="col" id="invoicenumber">
                      <h6 className="fw-bold">AJX Clothing</h6>
                      <div className="row">
                        <div className="col">
                          <p>INVOICE NUMBER:</p>
                        </div>
                        <div className="col d-flex justify-content-end">
                          {" "}
                          <p>INV-2002</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <p>INVOICE DATE:</p>
                        </div>
                        <div className="col  d-flex justify-content-end">
                          {" "}
                          <p>02 jan 2023</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <p>DUE:</p>
                        </div>
                        <div className="col d-flex justify-content-end">
                          {" "}
                          <p>02 Jan 2023</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col mt-4 d-flex flex-end justify-content-end flex-column align-items-end">
                  <div className="col" id="invoice">
                    <h5>INVOICE</h5>
                    <p className="fw-bold">Flippy7</p>
                    <p>REG:5432567356375636</p>
                    <p>Flippy7@gmail.com | +378673465736</p>
                  </div>
                </div>
              </div>


                <div className="row">


                <PaymentInvoiceTable/>
                <SubTotalPrice/>
                </div>



            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceLabel;
