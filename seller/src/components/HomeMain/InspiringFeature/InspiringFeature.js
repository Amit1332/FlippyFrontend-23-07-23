import React from "react";
import infeateure from "./infeature";
const InspiringFeature = () => {
  return (
    <>
      <div className="container-fluid">
        <div class="row d-flex align-items-center justify-content-center">
          {infeateure.map((element, index) => {
            return (
              <>
                <div class="col-4 d-flex align-items-center justify-content-center insfeat">
                  <div class="card" style={{ width: "23rem" }}>
                    <div className="heart_icon">
                      <i class="lar la-heart"></i>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">{element.title}</h5>
                      <p class="card-text">{element.descryption}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default InspiringFeature;
