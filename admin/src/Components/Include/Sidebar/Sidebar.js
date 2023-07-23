import * as React from "react";
import {Routes, Route,Link } from "react-router-dom";

import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./Sidebar.css"
import Dashboard from "../../Dashboard/Dashboard";
import AllProduct from "../../Products/AllProduct/AllProduct";
import ProductDetails from "../../Products/ProductDetails/ProductDetails";
import BulkExport from "../../Products/BulkExport/BulkExport";
import Category from "../../Products/Category/Category";
import SingleCategory from "../../Products/Category/SingleCategory";
import EditCategory from "../../Products/Category/EditCategory";


import AddNewCategory from "../../Products/Category/AddNewCategory";
import Brand from "../../Products/Brand/Brand";
import EditBrand from "../../Products/Brand/EditBrand";
import Attributes from "../../Products/Attribute/Attriute";
import AdminAccount from "../AdminAccount/AdminAccount";
import AllOrders from "../../Orders/AllOrders/AllOrders";
import SupplierOrder from "../../Orders/SupplierOrders/SupplierOrder";
import PickupPointOrders from "../../Orders/PickupPointOrders/PickupPointOrders";
import PgCredential from "../../PaymentGatewaay/PgCredential";
import OtpConfiguration from "../../OtpSystem/OtpConfiguration";
import SmsTempelate from "../../OtpSystem/SmsTempelate";
import SetOtpCredentials from "../../OtpSystem/SetOtpCredentials";


import AllSupplier  from "../../Supplier/AllSupplier/AllSupplier";
import SupplierView from "../../Supplier/AllSupplier/SupplierView";
import SupplierCommission from "../../Supplier/SupllierCommission/SupplierCommission";
import Payout from "../../Supplier/Payout/Payout";
import Ticket from "../../LiveSupport/Ticket/Ticket";
import UploadFile from "../../Uploadfiles/Uploadfile";
import Customerlist from "../../Customers/Customerlist";
import AllPost from "../../Blogs/AllPost/AllPost";
import Bolginfo from "../../Blogs/AllPost/Bolginfo";
import BlogCategory from "../../Blogs/BlogCategory/BlogCategory";
import BlogCategorEdt from "../../Blogs/BlogCategory/BlogCategorEdt";
import Header from "../../WebsiteSetup/Header/Header";
import Footer from "../../WebsiteSetup/Footer/Footer";
import WebsitePages from "../../WebsiteSetup/WebsitePages/WebsitePages";
import WebstePagesEdit from "../../WebsiteSetup/WebsitePages/WebsiteEditPages";
import WebsiteAddPages from "../../WebsiteSetup/WebsitePages/WebsiteAddPages";
import Apperance from "../../WebsiteSetup/Apperances/Apperance";
import AllStaff from "../../Staff/AllStaff/AllStaff";
import AddNewStaff from "../../Staff/AllStaff/AddNewStaff";
import StaffPermission from "../../Staff/StaffPermision/StaffPermission";
import AddNewRole from "../../Staff/StaffPermision/AddNewRole";
import EditRole from "../../Staff/StaffPermision/EditRole";
import EditStaff from "../../Staff/AllStaff/EditStaff";
import Refund_configration from "../../Refund/Refund_configration/Refund_configration";
import Refund_request from "../../Refund/Refund_request/Refund_Request";
import Refund_Approved from "../../Refund/Refund_approved/Refund_Aproved";
import Refund_Rejected from "../../Refund/Refund_rejected/Refund_Rejected";
import Supplier_product_sale from "../../Reports/Suppler_product_sale/Supplier_product_sale";
import Product_stock from "../../Reports/Product_stock/Product_stock";

import User_Search_Report from "../../Reports/User_Search_Report/User_Search_Report";
import Wish_stock from "../../Reports/Wish_stock/Wish_stock";
import AddBlogCategory from "../../Blogs/BlogCategory/AddBlogCategory";
import Flash_Deal from "../../Marketing/Flask_Deals/Flash_Deal";
import Flash_Deals_Create_new from "../../Marketing/Flask_Deals/Flash_Deals_Create_new";
import News_Letters from "../../Marketing/News_Letters/News_Letters";
import Bulk_Sms from "../../Marketing/Bulk_Sms/Bulk_Sms";




import ProductQueries from "../../LiveSupport/Queries/ProductQueries";


import FormControl from '@mui/material/FormControl';
import Subscribers from "../../Marketing/Subscrbers/Subscribers";
import Coupons from "../../Marketing/Coupons/Coupons";
import Create_New_Coupon from "../../Marketing/Coupons/Create_New_Coupon";












const drawerWidth = 200;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }} >
      <CssBaseline />
      <AppBar position="fixed" open={open}  >
        <Toolbar style={{backgroundColor:"white"}}>
          <IconButton
            color="black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>

          <div className="navbox" style={{width:'94%', position: "absolute", display: 'flex', justifyContent: "space-between", color: "black" }}>
            <div className="search-box d-flex align-items-center ">
              <i class="las la-search"></i>
              <input type="search" placeholder="Search Keyword here...." />
            </div>


            <div className="d-flex align-items-center gap-4 notifi">
          <i
            class="ri-notification-3-line  p-1 px-2 border rounded-circle"
            style={{ position: "relative" }}
          >
            <div
              className="bg-danger"
              style={{
                width: "5px",
                position: "absolute",
                top: ".5rem",
                right: ".7rem",
                borderRadius: "50%",
                border: "1px solid white",
                height: "5px",
              }}
            ></div>
          </i>
          <div className="accountnav d-flex text-start gap-2">
            <div className="alladminbox">
              <img src="/flippyLogo.png" alt="" />
            </div>
  
            <div class="btn-group shadow-0 text-start">
            <FormControl required sx={{boxShadow:'none',outline:"none", minWidth: 120 , '.MuiOutlinedInput-notchedOutline': { border: 0 
    }}}>
        
            <div className="text-start" style={{width:"100%", height:"100%", position:"absolute", display:"flex", flexDirection:'column', justifyContent:"center"}}>
                  <h4
                    className="text-capitalize"
                    style={{
                      fontWeight: `600`,
                      fontSize: `14px`,
                      lineHeight: `24px`,
                      marginBottom: "0px",
                      color: `#1D2939`,
                    }}
                  >
                    Snehlata Patel
                  </h4>
                  <p
                    className="text-capitalize"
                    style={{ marginBottom: "0px", fontSize: "10px" }}
                  >
                    Admin
                  </p>
                </div>
       
        {/* <FormHelperText>Required</FormHelperText> */}
      </FormControl>
                <i class="ri-arrow-down-s-line"></i>

              {/* <div
                class="btn shadow-0 p-0 d-flex align-items-center gap-3 dropdown-toggle dropdown-toggle-for-nav-account "
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
              > */}
                {/* <div className="text-start">
                  <h4
                    className="text-capitalize"
                    style={{
                      fontWeight: `600`,
                      fontSize: `14px`,
                      lineHeight: `24px`,
                      marginBottom: "0px",
                      color: `#1D2939`,
                    }}
                  >
                    Snehlata Patel
                  </h4>
                  <p
                    className="text-capitalize"
                    style={{ marginBottom: "0px", fontSize: "10px" }}
                  >
                    Admin
                  </p>
                </div> */}
                {/* <i class="las la-angle-down fw-bolder"></i> */}
              {/* </div> */}
              {/* <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                <li>
                  <button class="dropdown-item" type="button">
                    Action
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Another action
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Something else here
                  </button>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
            
            </div>
        
        </Toolbar>

      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          
        }}
        variant="persistent"
        anchor="left"
        open={open}
        
      >
        <DrawerHeader
        style={{backgroundColor:"#103A81"}} >
          <Box
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Box>
              <img style={{ height: "2.5rem" }} src="flippyLogo.png" alt="logo" />
            </Box>
            <IconButton onClick={handleDrawerClose} style={{color:"white"}}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </Box>
        </DrawerHeader>
      

        <List className="sidebarbackgroundCol p-0">

        <nav id="sidebar" class="active">
        {/* <div className="searchbox">
          <input type="search" placeholder="Search in menu" />
        </div> */}

            <ul class="list-unstyled components p-0">
                 <li className="bbbb">        
                    <Link to="/dashboard"><i class="las la-home"></i>Dashboard</Link>
                </li>

                <li>

                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle bbbb"><i class="las la-cube"></i>Products</a>
                    <ul class="list-unstyled collapse" id="homeSubmenu">
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="products"><i class="las la-circle-notch"></i>Supplier Products</Link></div>
                        </li>
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/bulkexport"><i class="las la-circle-notch"></i>Bulk Export</Link></div>
                        </li>
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/category"><i class="las la-circle-notch"></i>Category</Link></div>
                        </li>
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/brand"><i class="las la-circle-notch"></i>Brand</Link></div>
                        </li>
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/attributes"><i class="las la-circle-notch"></i>Attributes</Link></div>
                        </li>
                      
                    </ul>
                </li>
                


        {/* orders */}

                <li>
                    <a href="#ProductSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle bbbb"><i class="las la-cart-plus"></i>Orders</a>
                    <ul class="list-unstyled collapse" id="ProductSubmenu">
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/orders"><i class="las la-circle-notch"></i>All Orders</Link> <span class="badge rounded-pill"style={{backgroundColor:"#37C282"}}>4</span></div>
                        </li>
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/supplier_orders"><i class="las la-circle-notch"></i>Supplier Orders</Link></div>
                        </li>
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/pickup_point_orders"><i class="las la-circle-notch"></i>Pickup Point Orders</Link></div>
                        </li>
                      
                    </ul>
                </li>

                {/* Refunds */}
                <li>
                    <a href="#RefundsSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle bbbb"><i class="las la-cart-plus"></i>Refunds</a>
                    <ul class="list-unstyled collapse" id="RefundsSubmenu">
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/refund/request"><i class="las la-circle-notch"></i>Refund Request</Link> </div>
                        </li>
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/refund/approved"><i class="las la-circle-notch"></i>Approved Requests</Link></div>
                        </li>
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/refund/rejected"><i class="las la-circle-notch"></i>Rejected Refunds</Link></div>
                           
                        </li>
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/refund/configuration"><i class="las la-circle-notch"></i>Refunds Configuration</Link></div>
                        </li>
                      
                    </ul>
                </li>




                {/* customers */}
               

                <li>
                    <a href="#CustomersSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle bbbb"><i class="las la-cart-plus"></i>Customers</a>
                    <ul class="list-unstyled collapse" id="CustomersSubmenu">
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/customerlist"><i class="las la-circle-notch"></i>Customers List</Link> <span class="badge rounded-pill"style={{backgroundColor:"#37C282"}}>4</span></div>
                        </li>
                       
                      
                    </ul>
                </li>

 {/* Supplier */}
 <li>
                    <a href="#SupplierSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle bbbb"><i class="las la-user-times"></i>Supliers</a>
                    <ul class="list-unstyled collapse" id="SupplierSubmenu">
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/allsupplier"><i class="las la-circle-notch"></i>All Supplier</Link> <span class="badge rounded-pill"style={{backgroundColor:"#37C282"}}>4</span></div>
                        </li>
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/payout"><i class="las la-circle-notch"></i>Payouts</Link></div>
                        </li>
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/suppliercommission"><i class="las la-circle-notch"></i>Supplier Commission</Link></div>
                        </li>
                           
                           
                      
                    </ul>
                </li>

              {/* uploaded Files */}


              <li className="bbbb">
                    <Link to="/uploadfile"><i class="las la-upload"></i>Uploaded Files</Link>
                </li>

                 {/* Reports */}
                 <li>
                    <a href="#ReportSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle bbbb"><i class="las la-file-alt"></i>Reports</a>
                    <ul class="list-unstyled collapse" id="ReportSubmenu">
                       
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/report/supplier/product/sale"><i class="las la-circle-notch"></i>Supplier Product Sale</Link></div>
                        </li>
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/report/product/stock"><i class="las la-circle-notch"></i>Products Stock</Link></div>
                        </li>
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/report/wish/Search/Report"><i class="las la-circle-notch"></i>Products Wishlist</Link></div>
                        </li>
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/report/User/Search/Report"><i class="las la-circle-notch"></i>User Searches</Link></div>
                        </li>
                      
                      
                    </ul>
                </li>

                
                 {/* Blog System */}
                 <li>
                    <a href="#BlogSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle bbbb"><i class="las la-edit"></i>Blog System</a>
                    <ul class="list-unstyled collapse" id="BlogSubmenu">
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/allpost"><i class="las la-circle-notch"></i>All Post</Link> <span class="badge rounded-pill"style={{backgroundColor:"#37C282"}}>4</span></div>
                        </li>
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/blogCategories"><i class="las la-circle-notch"></i>Categories</Link></div>
                        </li>
                    </ul>
                </li>

                 {/* Marketing */}
                 <li>
                    <a href="#MarketSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle bbbb"><i class="las la-clock"></i>Marketing</a>
                    <ul class="list-unstyled collapse" id="MarketSubmenu">
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/marketing/flashdeals"><i class="las la-circle-notch"></i>Flash Deals</Link> <span class="badge rounded-pill"style={{backgroundColor:"#37C282"}}>4</span></div>
                        </li>
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/marketing/newsletter"><i class="las la-circle-notch"></i>News Letters</Link></div>
                        </li>
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/marketing/bulksms"><i class="las la-circle-notch"></i>Bulk SMS</Link> </div>
                        </li>
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/marketing/subscribers"><i class="las la-circle-notch"></i>Subscribers</Link></div>
                        </li>
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/marketing/coupons"><i class="las la-circle-notch"></i>Coupons</Link> </div>
                        </li>
                    </ul>
                </li>

                 {/* Live Support */}
                 <li>
                    <a href="#LiveSupportSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle bbbb"><i class="las la-phone-volume"></i>Live Support</a>
                    <ul class="list-unstyled collapse" id="LiveSupportSubmenu">
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/ticket"><i class="las la-circle-notch"></i>Ticket</Link> <span class="badge rounded-pill"style={{backgroundColor:"#37C282"}}>4</span></div>
                        </li>
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/ticket/productQueries"><i class="las la-circle-notch"></i>Product Queries</Link></div>
                        </li>
                    </ul>
                </li>

                
                 {/* Payment Gateway */}
                 <li>
                    <a href="#PaymentGatewaySubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle bbbb"><i class="las la-credit-card"></i>Payment Gateway</a>
                    <ul class="list-unstyled collapse" id="PaymentGatewaySubmenu">
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/set_pg_credentials"><i class="las la-circle-notch"></i>Set PG Credentials</Link> <span class="badge rounded-pill"style={{backgroundColor:"#37C282"}}>4</span></div>
                        </li>
                    </ul>
                </li>

                
                 {/* OTP System */}
                 <li>
                    <a href="#OtpSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle bbbb"><i class="las la-lock"></i>OTP System</a>
                    <ul class="list-unstyled collapse" id="OtpSubmenu">
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/otp_configurations"><i class="las la-circle-notch"></i>OTP Configurations</Link></div>
                        </li>
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/sms_tempelates"><i class="las la-circle-notch"></i>SMS Templates</Link></div>
                        </li>
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/set_otp_credentials"><i class="las la-circle-notch"></i>Set OTP Credentials</Link> </div>
                        </li>
                    </ul>
                </li>

                
                 {/* Notice Board */}
                 <li>
                    <a href="#NoticeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle bbbb"><i class="las la-calendar-minus"></i>Notice Board</a>
                    <ul class="list-unstyled collapse" id="NoticeSubmenu">
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to=""><i class="las la-circle-notch"></i>Notice</Link> <span class="badge rounded-pill"style={{backgroundColor:"#37C282"}}>4</span></div>
                        </li>
                    </ul>
                </li>

                
                 {/* Website Set Up */}
                 <li>
                    <a href="#WebsiteSetupSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle bbbb"><i class="las la-bell"></i>Website Setup</a>
                    <ul class="list-unstyled collapse" id="WebsiteSetupSubmenu">
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/websiteheader"><i class="las la-circle-notch"></i>Header</Link> <span class="badge rounded-pill"style={{backgroundColor:"#37C282"}}>4</span></div>
                        </li>
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/websitefooter"><i class="las la-circle-notch"></i>Footer</Link></div>
                        </li>
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/websitepages"><i class="las la-circle-notch"></i>Pages</Link> </div>
                        </li>
                        {/* <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/websiteapperance"><i class="las la-circle-notch"></i>Appearance</Link></div>
                        </li> */}
                    </ul>
                </li>

                
                 {/* Setup & Configurations */}
                 <li>
                    <a href="#SetupConfigSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle bbbb"><i class="las la-tools"></i>Setup & Configurations</a>
                    <ul class="list-unstyled collapse" id="SetupConfigSubmenu">
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to=""><i class="las la-circle-notch"></i>General Settings</Link> <span class="badge rounded-pill"style={{backgroundColor:"#37C282"}}>4</span></div>
                        </li>
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to=""><i class="las la-circle-notch"></i>Features Activation</Link></div>
                        </li>
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to=""><i class="las la-circle-notch"></i>Languages</Link> </div>
                        </li>
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to=""><i class="las la-circle-notch"></i>Currency</Link></div>
                        </li>
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to=""><i class="las la-circle-notch"></i>GST (Vat & Tax)</Link> </div>
                        </li>
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to=""><i class="las la-circle-notch"></i>Pickup Point</Link></div>
                        </li>
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to=""><i class="las la-circle-notch"></i>SMTP Settings</Link> </div>
                        </li>
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to=""><i class="las la-circle-notch"></i>Payment Methods</Link></div>
                        </li>
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to=""><i class="las la-circle-notch"></i>Order Configuration</Link> </div>
                        </li>
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to=""><i class="las la-circle-notch"></i>File System & Cache  Configuration</Link></div>
                        </li>
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to=""><i class="las la-circle-notch"></i>Social Media Logins</Link> </div>
                        </li>
                    </ul>
                </li>


                
                 {/* Staffs */}
                 <li>
                    <a href="#StaffSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle bbbb"><i class="las la-user-friends"></i>Staff Management</a>
                    <ul class="list-unstyled collapse" id="StaffSubmenu">
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/staffs"><i class="las la-circle-notch"></i>All Staffs</Link> <span class="badge rounded-pill"style={{backgroundColor:"#37C282"}}>4</span></div>
                        </li>
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/role"><i class="las la-circle-notch"></i>Staff Permissions</Link></div>
                        </li>
                    </ul>
                </li>

                
                 {/* Setting */}
                 <li>
                    <a href="#SettingSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle bbbb"><i class="las la-cog"></i>Setting</a>
                    <ul class="list-unstyled collapse" id="SettingSubmenu">
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to=""><i class="las la-circle-notch"></i>System Setting</Link> <span class="badge rounded-pill"style={{backgroundColor:"#37C282"}}>4</span></div>
                        </li>
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to=""><i class="las la-circle-notch"></i>Update</Link></div>
                        </li>
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to=""><i class="las la-circle-notch"></i>Server Status</Link> </div>
                        </li>
                    </ul>
                </li>

                 {/* Addon Manager */}
                 <li className="bbbb">        
                    <Link to="/dashboard"><i class="las la-home"></i>Addon Manager</Link>
                </li>
            </ul>

           
        </nav>
        
          
        </List>
      </Drawer>
      <Main open={open} style={{backgroundColor:"#F5F7F9", padding:"0px"}}>
        <DrawerHeader />
        <div className="container-fluid p-0" id="absoluteallroute">

      <Routes>
      <Route path  = "/" element = {<Dashboard/>} />
        <Route path  = "/dashboard" element = {<Dashboard/>} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<AllProduct />} />
<Route path="/bulkexport" element={<BulkExport/>} />
        <Route path="/admin/me" element={<AdminAccount />} />








{/* Category */}
<Route path="/category" element={<Category />} />
<Route path="/category/add/new" element={<AddNewCategory/>} />
<Route path="/category/single/:id" element={<SingleCategory/>} />
<Route path="/category/edit/single/:id/:index" element={<EditCategory/>} />



{/* Brand */}
<Route path="/brand" element={<Brand />} />
<Route path="/brand/edit/:id" element={<EditBrand/>} />

  {/* Attributes */}
<Route path="/attributes" element={<Attributes />} />
<Route path="/allsupplier" element={<AllSupplier />} />



{/* orders */}
<Route path="/orders" element={<AllOrders />} />
<Route path="/supplier_orders" element={<SupplierOrder />} />
<Route path="/pickup_point_orders" element={<PickupPointOrders />} />







{/* Supplier */}
<Route path="/supplierview/:id" element={<SupplierView />} />
<Route path="/payout" element={<Payout />} />
<Route path="/suppliercommission" element={<SupplierCommission />} />

{/* Live Support */}
<Route path="/ticket" element={<Ticket />} />
<Route path="/ticket/productQueries" element={<ProductQueries />} />


{/* Uploadfile */}
<Route path="/uploadfile" element={<UploadFile />} />

{/* Customer */}
<Route path="/customerlist" element={<Customerlist />} />

{/* All Blog Post */}
<Route path="/allpost" element={<AllPost />} />
<Route path="/bloginfo" element={<Bolginfo />} />
<Route path="/blogCategories" element={<BlogCategory />} />
<Route path="/add/blogCategories" element={<AddBlogCategory />} />

<Route path="/blogcategoryedit" element={<BlogCategorEdt />} />

{/* Website Setup */}
<Route path="/websiteheader" element={<Header />} />
<Route path="/websitefooter" element={<Footer />} />
<Route path="/websitepages" element={<WebsitePages />} />
<Route path="/addnew_pages" element={< WebsiteAddPages />} />
<Route path="/page_edit" element={< WebstePagesEdit/>} />
<Route path="/websiteapperance" element={<Apperance />} />



{/* Payment Gateway */}

<Route path="/set_pg_credentials" element={<PgCredential />} />




{/* OTP System */}
<Route path="/otp_configurations" element={<OtpConfiguration />} />
<Route path="/sms_tempelates" element={<SmsTempelate />} />
<Route path="/set_otp_credentials" element={<SetOtpCredentials />} />



 {/* staff */}
<Route path="/staffs" element={<AllStaff />} />
<Route path="/add/new/staff" element={<AddNewStaff />} />
<Route path="/edit/staff/:id" element={<EditStaff />} />

<Route path="/role" element={<StaffPermission />} />
<Route path="/add/new/role" element={<AddNewRole />} />
<Route path="/edit/role" element={<EditRole />} />





{/* Refund */}

<Route path="/refund/configuration" element={<Refund_configration />} />
<Route path="/refund/request" element={<Refund_request />} />
<Route path="/refund/approved" element={<Refund_Approved />} />
<Route path="/refund/rejected" element={<Refund_Rejected />} />


{/* Report */}
<Route path="/report/supplier/product/sale" element={<Supplier_product_sale/>} />
<Route path="/report/product/stock" element={<Product_stock/>} />

<Route path="/report/User/Search/Report" element={<User_Search_Report/>} />
<Route path="/report/wish/Search/Report" element={<Wish_stock/>} />




{/* Marketing */}
<Route path="/marketing/flashdeals" element={<Flash_Deal/>} />
<Route path="/marketing/flashdeals/create" element={<Flash_Deals_Create_new/>} />
<Route path="/marketing/newsletter" element={<News_Letters/>} />
<Route path="/marketing/bulksms" element={<Bulk_Sms/>} />
<Route path="/marketing/subscribers" element={<Subscribers/>} />
<Route path="/marketing/coupons" element={<Coupons/>} />
<Route path="/marketing/coupons/create" element={<Create_New_Coupon/>} />











    
      </Routes>
  
        </div>
      </Main>
    </Box>
  );
}