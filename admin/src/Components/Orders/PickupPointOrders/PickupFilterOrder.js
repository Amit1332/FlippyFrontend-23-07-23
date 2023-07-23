import React,{useState} from 'react'
import Select from 'react-select'


import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css'; // or 'rsuite/dist/rsuite.min.css'


const PickupFilterOrder = () => {
    const options = [
        { value: 'jai prakash', label: 'jai prakash' },
        { value: 'Sonu enterprise', label: 'Sonu enterprise' },
        { value: 'Jai Enerprise', label: 'Jai Enerprise' }
      ]
  return (
<>
<div className="container-fluid py-1 filterorderpage">
      <form>
         
          <div className="row">
          <div className="col p-2">
           <DateRangePicker
            className='outline-0 shadow-none w-100'
            placeholder="Filter by date"
            
           />
            </div>
           
           

            <div className="col p-2">
              <div class="form-group">
                <input
                  type="text"
                  class="aab form-control"
                  placeholder="Type Order Code & hit Enter"
                />
              </div>
            </div>

            <div className="col p-2">
            <div className="row filteerbtn">
                <div className="col">
                  <button type="submit" class="btn text-capitalize shadow-none rounded-pill border" style={{ width: "100%" }}>
                    Clear
                  </button>
                </div>
                <div className="col">
                  <button
                    type="submit"
                    class="btn text-capitalize gap-2 d-flex align-items-center justify-content-center rounded-pill"
                    style={{
                      backgroundColor: "#E7F4FC",
                      width: "100%",
                      color: "#103A81",
                      fontWeight: "bold",
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

export default PickupFilterOrder