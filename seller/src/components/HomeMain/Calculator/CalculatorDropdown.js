import React from "react";

const CalculatorDropdown = () => {
  return (
    <div>
      <select  class="form-select" aria-label="Default select example">
        <option selected>Select product category</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  );
};

export default CalculatorDropdown;
