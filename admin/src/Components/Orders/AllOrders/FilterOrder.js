import React,{useState} from 'react'
import Select from 'react-select'


import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css'; // or 'rsuite/dist/rsuite.min.css'

const FilterOrder = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  

  return (
    <>
      <div className="container-fluid py-1 filterorderpage">
      <form>
          <div className="row">
            <div className="col p-2">
              <div class="form-group">
                <input
                  type="text" 
                  class="form-control"
                  placeholder="Search Catalog"
                />
              </div>
            </div>
            <div className="col p-2">
              <Select options={options} 
              placeholder="Filter by Delivery Status"
              className='aab '
              />
            </div>


            <div className="col p-2">
              <Select options={options} 
              placeholder="Filter by Supplier"
              className='aab'
              />
              
            </div>


           
          </div>
          <div className="row">
          <div className="col p-2">
              <Select options={options} 
              placeholder="Filter by Payment Type"
              className='aab'
              />

            </div>
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
                  placeholder="Search by Order Code"
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

export default FilterOrder
