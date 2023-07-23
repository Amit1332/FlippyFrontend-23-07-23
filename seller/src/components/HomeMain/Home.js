import React from "react";
import {Link} from "react-router-dom"
import InspiringFeature from "./InspiringFeature/InspiringFeature.js";
import Navbar from "./Navbar/Navbar";
import Query from "./Query/Query";
import Procedure from "./WorkProcedure/Procedure.js";
import FeeStructureTable from "./FeeStructure/FeeStructureTable.js";
import Note from "./Note/Note.js";
import Calculator from "./Calculator/Calculator.js";
import BecomeSupplier from "./BecomeSupplier.js";
import Footer from "../Footer/Footer";

import "./Home.css"
const Home = () => {
  return (
    <>
      <div className="homemain">
        <Navbar />
        <div className="container-fluid p-0">
          <div className="childcontainer_xx px-3 py-2">
            <div className="leftsection_xx">
              <div className="leftsection_child_xx">
                <h1>Become a supplier</h1>
                <h1>
                  on <span id="Flippy">Flippy</span>{" "}
                  <span id="Seven">Seven</span>{" "}
                </h1>
              </div>
              <div className="leftsection_child_xx" id="leftsection_child_second">
                <h4 className="mt-4">
                  Sell on flippy Seven and get a chance for long-term growth.{" "}
                  <br />
                  Register now and get 1-Click Launch Support at no <br />
                  additional cost
                </h4>
                <div className="start_selling_parent">
                  <div className="start_selling_parent_left">
                    <i class="las la-phone"></i>
                    <input placeholder="Enter Mobile number"></input>
                  </div>
                  <div className="start_selling_parent_right text-nowrap">
                    <Link to ="/signup" style={{height:"100%"}}>Start Selling</Link>
                  </div>
                </div>
              </div>
              <div className="leftsection_child_xx" id="leftsection_child_third">
                <div className="left" id="left1"></div>
                <div className="left" id="left2"></div>
                <div className="left" id="left3"></div>
                <div className="right">
                  <h3>10'000 +</h3>
                  <br />
                  <h4>Happy Suppliers</h4>
                </div>
              </div>
            </div>
            <div className="rightsection_xx"> </div>
          </div>
        </div>
        <div className="query">
          <Query paragraph="Why Supplier sell on flippy 7" heading="Why Choose Flippy7 to sell your Products" />
        </div>
        <div className="inspiring_Feature">
          <InspiringFeature />
        </div>
      
        <div className="PROCEDURE">
          <Procedure/>
        </div>
        <div className="query">
          <Query paragraph="Fee Structure" heading="Flippy 7 Marketplace Fee Structure" />
        </div>
        <div className="Fee_Table">
          <FeeStructureTable/>
        </div>
        <div className="Note">
          <Note/>
        </div>
        <div className="calculator">
          <Calculator/>
        </div>
        <div >
        <BecomeSupplier/>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
