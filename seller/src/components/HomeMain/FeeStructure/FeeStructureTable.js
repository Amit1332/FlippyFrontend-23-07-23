import React from "react";
import FeeStructureData from "./FeeStructureData";

const FeeStructureTable = () => {
  return (
    <div className="Table">
      <table >
        <tr className="trheading" >
          <th>Selling Price</th>
          <th>Selling Price</th>
          <th>Charges</th>
          <th>Selling Price</th>
        </tr>

        {FeeStructureData.map((element, index) => {
          return (
            <>
              <tr key={index} className="tableData" >
                <td>{element.selling_Price}</td>
                <td>{element.selling_Price2}</td>
                <td>{element.charges}</td>
                <td>{element.selling_Price3}</td>
              </tr>
            </>
          );
        })}
      </table>
    </div>
  );
};

export default FeeStructureTable;
