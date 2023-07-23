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
import Dashboard from "../../Dashboard/Dashboard";
import "./Sidebar.css"
import SidebarProfile from "./SidebarProfile";
import Order from "../../Orders/Order";
import Payout from "../../Payout/Payout";
import PaymentViewDetails from "../../Payout/PaymentViewDetails/PaymentViewDetails";
import PaymentInvoice from "../../Payout/PaymentViewDetails/PaymentInvoice/PaymentInvoice";
import Addproduct from "../../Tableforallproduct/Addproduct/Addproducts"
import Product from "../../Tableforallproduct/Product"
import ProductData from "../../Tableforallproduct/Dataforlist"
import Productrecomdation from "../../Recomendation/Productrecomndation/Productrecomdation";
import Coupon from "../../Coupons/Coupon"
import Setting from "../../Setting/Setting";
import Login from "../../Credentials/Login/Login";
import ForgotePass from "../../Credentials/Login/ForgotePass";
import Signup from "../../Credentials/Signup/Signup";
import GstIn from "../../Credentials/Signup/GstIn";
import Bankdetails from "../../Credentials/Signup/Bankdetails";
import Address from "../../Credentials/Signup/Address";
import Submitform from "../../Credentials/Signup/Submitform";
import Bulk from "../../Tableforallproduct/Bulk";
import Verify from "../../Credentials/Login/Verify";
import ResetPass from "../../Credentials/Login/ResetPass";
import ResetPassSuccess from "../../Credentials/Login/ResetPassSuccess";
import Rto_manage from "../../RTO_Managament/Rto_manage";
import Communication from "../../Communication/Communication";
import UploadFiles from "../../UploadFiles/UploadFiles";
import SupportTicket from "../../SupportTicket/SupportTicket";
import SupportTicketDiscription from "../../SupportTicket/TicketDescryption";
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
          <div className="navbox" style={{width:'94%', position: "absolute", display: 'flex', justifyContent: "space-between", color: "black", boxShadow:"none" }}>
            <div className="search-box d-flex align-items-center shadow-none">
              <i class="las la-search"></i>
              <input type="search" placeholder="Search Keyword here...." />
            </div>


            <div className="d-flex align-items-center gap-4 notifi" style={{ height: '100%' }}>
              <i class="ri-notification-3-line  p-1 px-2 border rounded-circle" style={{ position: "relative" }}><div className="bg-danger" style={{ width: "5px", position: 'absolute', top: '.5rem', right: '.7rem', borderRadius: '50%', border: '1px solid white', height: '5px' }}></div></i>
              <div className="accountnav d-flex text-start gap-2">
                <div className="imgnavnotification" style={{ width: '2.5rem', flexShrink: '0', height: "2.5rem", border: '1px solid black', overflow: "hidden", borderRadius: "50%" }}>
                  <img src="https://images.unsplash.com/photo-1673972249408-2cd76cb69831?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" style={{ objectFit: 'cover', width: '100%', height: "100%" }} />
                </div>
                <div class="btn-group shadow-0 text-start">
                  <div class="btn shadow-0 p-0 d-flex align-items-center gap-3 dropdown-toggle dropdown-toggle-for-nav-account " data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                    <div className="text-start">
                      <h4 className="text-capitalize" style={{ fontWeight: `600`, fontSize: `14px`, lineHeight: `24px`, marginBottom: '0px', color: `#1D2939` }}>Snehlata Patel</h4>
                      <p className="text-capitalize" style={{ marginBottom: '0px', fontSize:'10px' }}>Seller</p>
                    </div>
                    <i class="las la-angle-down fw-bolder"></i>
                  </div>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                    <li><button class="dropdown-item" type="button">Action</button></li>
                    <li><button class="dropdown-item" type="button">Another action</button></li>
                    <li><button class="dropdown-item" type="button">Something else here</button></li>
                  </ul>
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
        <DrawerHeader >
          <Box
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Box>
              <img style={{ height: "3rem" }} src="flippyLogo.png" alt="logo" />
            </Box>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </Box>
        </DrawerHeader>
        <Divider />

        <List className="sidebarbackgroundCol p-0">

        <nav id="sidebar" class="active">
        <SidebarProfile/>

            <ul class="list-unstyled components p-0">
                 <li>        
                    <Link to="/dashboard"><i class="las la-home"></i>Dashboard</Link>
                </li>

                {/* products */}
                <li>

                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i class="las la-cube"></i>Products</a>
                    <ul class="list-unstyled collapse" id="homeSubmenu">
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/products"><i class="las la-circle-notch"></i>All Products</Link> <Link to="/products/addproduct"><i class="las la-plus-circle" style={{color:"#164C96"}}></i></Link></div>
                        </li>
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/products/bulk_upload"><i class="las la-circle-notch"></i>Bulk Upload</Link></div>
                        </li>
                      
                    </ul>
                </li>


        {/* orders */}

                <li>
                    <a href="#ProductSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i class="las la-cart-plus"></i>Orders</a>
                    <ul class="list-unstyled collapse" id="ProductSubmenu">
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to="/orders"><i class="las la-circle-notch"></i>All Orders</Link> <span class="badge rounded-pill"style={{backgroundColor:"#37C282"}}>4</span></div>
                        </li>
                        <li id="akaiconspace">
                           <div className="clickmenu"><Link to=""><i class="las la-circle-notch"></i>Order Reviews</Link></div>
                        </li>
                      
                    </ul>
                </li>
               

               
                <li>
                    <Link to="/products/recomendation"><i class="las la-archive"></i>Recommendation</Link>
                </li>
                <li>
                    <Link to="/uploadfiles"><i class="las la-upload"></i>Upload Files</Link>
                </li>

                <li>
                    <Link to="/coupon"><i class="las la-gift"></i>Coupon</Link>
                </li>
                <li>
                    <Link to="/Rtomanage"><i class="las la-shipping-fast"></i>Rto Management</Link>
                </li>
                   <li>
                           <div className="clickmenu ffff"><Link to="/supportticket"><i class="las la-ticket-alt"></i>Support Ticket</Link> <span class="badge rounded-pill" style={{backgroundColor:"#164C96"}}>4</span></div>
                   </li>

                   <li>
                    <Link to="/payout"><i class="las la-gift"></i>Payout</Link>
                </li>



                   <li>
                           <div className="clickmenu ffff"><Link to="/communication"><i class="ri-chat-voice-line"></i>Communication</Link> <span class="badge rounded-pill"style={{backgroundColor:"#D94A27"}}>4</span></div>
                   </li>


                   <li>
                   <Link to="/setting"><i class="las la-cog"></i>Setting</Link>
                </li>

                <li>
                <a href="#SettingSubmenu" data-toggle="collapse" aria-expanded="true" class="dropdown-toggle"><i class="las la-info-circle"></i>Help</a>
                <ul class="list-unstyled collapse show" id="SettingSubmenu">
                  <li id="akaiconspace">
                    <div className="clickmenu"><a href="mailto:support@flippyseven.com"><i class="las la-envelope mx-2"></i>support@flippyseven.com</a></div>
                  </li>
                  

                </ul>
              </li>
            </ul>

           
        </nav>
        
          
        </List>
      </Drawer>
      <Main open={open} style={{backgroundColor:"#F5F7F9", padding:"0px"}}>
        <DrawerHeader />
        <div className="container-fluid p-0" id="absoluteallroute">
      {/* <ProfileCard/> */}

      <Routes>
        {/* Amit */}

        <Route path="/" element={<Dashboard/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/orders" element={<Order/>} />
      <Route path="/payout" element={<Payout/>} />
      <Route path="/paymentDetails" element={<PaymentViewDetails/>} />
      <Route path="/paymentInvoice" element={<PaymentInvoice/>} />



{/* mohit */}
          <Route path="/products" element={<Product data={ProductData} />} />
            <Route path="/products/addproduct" element={<Addproduct />} />
            <Route path="/products/recomendation" element={<Productrecomdation />} />
            <Route path="/coupon" element={<Coupon />} />
            <Route path="/setting" element={<Setting />}/> 

            {/* anand */}
            
          <Route path="/products/bulk_upload" element={<Bulk/>} />
          <Route path="/Rtomanage" element={<Rto_manage/>} />


          {/* vimal */}
          <Route path="/communication" element={<Communication />} />
            <Route path="/uploadfiles" element={<UploadFiles />} />

            <Route path="/supportticket" element={<SupportTicket/>} />
            <Route path="/supportticket/description" element={<SupportTicketDiscription/>} />


      </Routes>
      
        </div>
      </Main>
    </Box>
  );
}