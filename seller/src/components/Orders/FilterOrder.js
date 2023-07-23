import React,{useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const FilterOrder = () => {
  const [startDate, setStartDate] = useState(new Date())
  return (
    <>
      
      <div className="container-fluid py-3 filterorderpage" style={{backgroundColor:"#F7FBFE"}}>
      <form>
          <div className="row">
            <div className="col p-2">
              <div class="form-group">
                <input
                  type="text" 
                  class="form-control border"
                  placeholder="Sku & Id"
                />
              </div>
            </div>
            <div className="col p-2">
              <div class="form-group d-flex align-items-center" style={{position:"relative"}}>
              <DatePicker selected={startDate} 
              className="form-control dateimg border"
                placeholderText="Oder Date Minimum"
               onChange={(date) => setStartDate(date)} />

            <i class="ri-calendar-line" style={{position:"absolute", right:"10px"}}></i>
              </div>
            </div>


            <div className="col p-2">
              <div class="form-group d-flex align-items-center border-0" style={{position:"relative"}}>
              <DatePicker selected={startDate} 
              className="form-control dateimg border"
                placeholderText="Oder Date Maximum"
               onChange={(date) => setStartDate(date)} />

            <i class="ri-calendar-line" style={{position:"absolute", right:"10px"}}></i>
              </div>
            </div>


            <div className="col p-2">
              <div class="form-group">
                <input
                  type="password"
                  class="form-control border"
                  id="exampleInputPassword1"
                  placeholder="Order Number"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col p-2">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control border"
                  placeholder="Product Id"
                />
              </div>
            </div>
            <div className="col p-2">
              <div class="form-group d-flex align-items-center" style={{position:"relative"}}>
              <DatePicker selected={startDate} 
              className="form-control dateimg border"
                placeholderText="Dispatch Date Minimum"
               onChange={(date) => setStartDate(date)} />

            <i class="ri-calendar-line" style={{position:"absolute", right:"10px"}}></i>
              </div>
            </div>


            <div className="col p-2">
              <div class="form-group d-flex align-items-center" style={{position:"relative"}}>
              <DatePicker selected={startDate} 
              className="form-control dateimg border"
                placeholderText="Oder Date Maximum"
               onChange={(date) => setStartDate(date)} />

            <i class="ri-calendar-line" style={{position:"absolute", right:"10px"}}></i>
              </div>
            </div>

            <div className="col p-2">
            <div className="row filteerbtn">
                <div className="col">
                  <button type="submit" class="btn text-capitalize shadow-none  border" style={{ backgroundColor:"white",width: "100%" }}>
                    Clear
                  </button>
                </div>
                <div className="col">
                  <button
                    type="submit"
                    class="btn text-capitalize gap-2 d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: "#164C96",
                      width: "100%",
                      color: "white",
                    }}
                  >
                    <i class="ri-filter-3-line"></i>
                    Filter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>

      </div>
    </>
  )
}

export default FilterOrder
