import React from 'react'

const PaymentFilter = () => {
  return (
    <>
    <div className="container-fluid px-0" >
      <div className="container-fluid rounded bg-light p-2" >
      <div className="nav container-fluid p-0 d-flex align-items-center justify-content-between">
              <div className="leftpronav rounded-2 overflow-hidden p-1 d-flex gap-2 px-2 align-items-center border border-secondary-subtle">
                  <i className="las la-search" style={{fontSize:`1.5rem`, transform:'rotate(270deg)', color:"gray"}}></i>
              <form className="d-flex w-100" role="search">
                  <input  style={{border:`none`, outline:`none`, width:"100%", fontSize:"14px"}} type="search" placeholder="Search" aria-label="Search" />
              </form>
              </div>
              <div className="rightpronav d-flex align-items-center justify-content-between gap-2">
                  <div className="rounded p-1 px-2 border border-secondary-subtle d-flex gap-2 align-items-center">
                  <i class="ri-calendar-line" style={{fontSize:"17px"}}></i>
                  <p style={{marginBottom: `0px`, fontSize: `14px`}}>Jan 6, 2022-Jan 13, 2022</p>
                  </div>
                  <div className="rounded p-1 px-2 border border-secondary-subtle d-flex gap-2 align-items-center" style={{width:"fit-content"}}>
                  <i class="ri-filter-3-fill" style={{fontSize:"17px"}}></i>
                  <p style={{marginBottom: `0px`, fontSize: `14px`}}>Filters</p>
                  </div>
              </div>
          </div>

          </div>
          </div>
      
    </>
  )
}

export default PaymentFilter
