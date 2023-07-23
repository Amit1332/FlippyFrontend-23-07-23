import React from "react";
// import InspiringFeature from "../InspiringFeature/InspiringFeature";
const Procedure = () => {
  return (
    <div className="workProcedureParent">
      <div className="left_Procedure">
        <div className="left_Procedure_top">
          <img
            src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="logo"
          />
        </div>
        
        <div className="left_Procedure_bottom">
          <h4 style={{fontWeight:"bold"}}>How selling on Flippy7 work</h4>
        </div>
      </div>
      <div className="right_Procedure">
        <div className="right_Procedure_Top">
          <h4 style={{fontWeight:"bold"}}>How's it Works</h4>
        </div>
        <div className="right_Procedure_Bottom">
       <div className="firststep">
        <div className="ffstepone">
          <div className="ffone">1</div>
          <div class="ffonebr"></div>
        </div>
        <div className="ffsteponeContent">
          <div className="createHeading">
            <h5>List Product</h5>
            <p>All You Need is</p>
            <p>1. GSTIN</p>
            <p>2. Bank Account</p>
          </div>
        </div>
       </div>
       <div className="firststep">
        <div className="ffstepone">
          <div className="ffone">2</div>
          <div className="ffonebr"></div>
        </div>
        <div className="ffsteponeContent">
          <div className="createHeading">
            <h5>Create Your Account</h5>
            <p>All You Need is</p>
            <p>1. GSTIN</p>
            <p>2. Bank Account</p>
          </div>
        </div>
       </div>

       <div className="firststep">
        <div className="ffstepone">
          <div className="ffone">3</div>
          {/* <div className="ffonebr"></div> */}
        </div>
        <div className="ffsteponeContent">
          <div className="createHeading">
            <h5>Get Orders</h5>
            <p>All You Need is</p>
            <p>1. GSTIN</p>
            <p>2. Bank Account</p>
          </div>
        </div>
       </div>


       <div className="firststep">
        <div className="ffstepone">
          <div className="ffone">4</div>
          <div className="ffonebr"></div>
        </div>
        <div className="ffsteponeContent">
          <div className="createHeading">
            <h5>Lowest Cost Shipping</h5>
            <p>All You Need is</p>
            <p>1. GSTIN</p>
            <p>2. Bank Account</p>
          </div>
        </div>
       </div>

       <div className="firststep">
        <div className="ffstepone">
          <div className="ffone">5</div>
        </div>
        <div className="ffsteponeContent">
          <div className="createHeading">
            <h5>Recieve Payments</h5>
            <p>All You Need is</p>
            <p>1. GSTIN</p>
            <p>2. Bank Account</p>
          </div>
        </div>
       </div>
       




        </div>
      </div>
  
    </div>
  );
};

export default Procedure;
