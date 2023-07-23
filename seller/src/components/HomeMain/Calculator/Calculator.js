import { height } from "@mui/system";
import React from "react";
import Query from "../Query/Query";
import CalculatorDropdown from "./CalculatorDropdown";
import RangeSlider from "./RangeSlider";

const Calculator = () => {
  return (
    <div className="calculator">
      <div className="calculatore_top">
        <Query paragraph="Calculator" heading="Pricing Calculator" />
        <p className="text-center " style={{lineHeight:"1.5rem"}}>
          Please, fill in the details to get <b>Approximate calculation</b> of
          your sale on flippy 7
        </p>
      </div>
      <div className="calculatore_bottom">
        <div className="calculatore_left">
          <div className="calculatore_left_top">
            <div className="left">
              <div className="productCategory">
                <h4>Product category</h4>
                <CalculatorDropdown />
              </div>
            </div>
            <div className="right">
              <div className="sellingPrice">
                <h4 style={{fontWeight:"bold"}}>Selling price</h4>
                <input type="text" className="input_Price" placeholder="₹800" />
              </div>
            </div>
          </div>
          <div className="calculatore_left_bottom">
            <div className="left_bottom_content">
              <RangeSlider title="Length" />
              <RangeSlider title="Breadth" />
              <RangeSlider title="Height" />
              <RangeSlider title="weight" />
            </div>
          </div>
        </div>
        <div className="calculatore_right">
          <div className="calculator_right_content">
            <div className="card p-4">
            <div className="top">
              <div className="top_content">
                <h4>How much you make</h4>
                <h1>₹360.00</h1>
              </div>
            </div>
            <div className="bottom">
              <div className="sellingPrice">
                <div className="sellingPrice_top">
                  <h4>Selling Price</h4>
                  <h4>₹400</h4>
                </div>
                <div className="sellingPrice_bottom">
                  <h4>Shipping Fee</h4>
                  <h4>-₹85</h4>
                </div>
              </div>
              <div className="commissionFee">
                <div className="commissionFee_top">
                  <h4>Commission Fee</h4>
                  <h4>-₹12</h4>
                </div>
                <div className="commissionFee_bottom">
                  <h4>GSTIN</h4>
                  <h4>-₹48.52</h4>
                </div>
              </div>
              <div className="collectionFee">
                <div className="collectionFee_top">
                <h4>Collection Fee</h4>
                  <h4>-₹8</h4>
                </div>
                <div className="collectionFee_bottom"></div>
              </div>
            </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
