import logo from './logo.svg';
import Login from './Pages/Login_page/Login';
import Forgot from './Pages/Forgot_password/Forgot_password';
import Reset from './Pages/Reset_password/Reset';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Dashbord from './Pages/Dashbord/Dashbord';
import Sidebar from './Components/SideBar/Sidebar';
import UserList from './Pages/UserList/UserList';
import AddUser from './Pages/Add_User/AddUser';
import Delete from './Components/Delete-popup/Delete';
import ViewUserProfile from './Components/ViewUserProfile/ViewUserProfile';
import AgentUserList from './Pages/agentUserList/AgentUserList';
import RejactionReason from './Components/Rejection-Reason/RejactionReason';
import Villalist from './Pages/Villa-List/VillaList';
import ViewVilla from './Pages/ViewVilla/ViewVilla';
import ViewPhotopopup from './Components/view-photo-popup/ViewPhotopopup';
import VillaRatingPopup from './Components/VillaRating-popup/VillaRatingPopup';
import AddVilla from './Pages/AddVilla/AddVilla';
import ViewCustomerDetail from './Components/viewCustomerDetail-popup/ViewCustomerDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashBoardHomePage from './Components/DashBoardHomePage/DashBoardHomePage';
import VillaBookingList from './Pages/villaBookingList/VillaBookingList';
import CmsScreenList from './Pages/CmsScreenList/CmsScreenList';
import PayTooUser from './Components/PayTooUser-box/PayTooUser';
import EditAboutUs from './Pages/EditAboutUs/EditAboutUs';
import ContectUs from './Components/ContectusPopup/ContectUs';




function App() {
  return (
    <div className="App">
      <>
      {/* <PayTooUser/> */}
      {/* <EditAboutUs/> */}
      {/* <ContectUs/> */}
       {/* <Sidebar/> */}
        {/* <Dashbord/> */}
        {/* <Header/> */}
          {/* <Footer/> */}


        {/* <Delete/> */}
        {/* <ViewUserProfile/> */}
        {/* <RejactionReason/> */}
        {/* <ViewPhotopopup/> */}
         {/* <VillaRatingPopup/> */}
         {/* <ViewCustomerDetail/> */}
        
      {/* <DashBoardHomePage/> */}
      {/* <AgentUserList/> */}
     {/* <Login/>  */}
     {/* <UserList/> */}
     {/* <AddUser/> */}
     {/* <Villalist/> */}
      {/* <ViewVilla/> */}
      {/* <AddVilla/> */}
      {/* <VillaBookingList/> */}
      {/* <CmsScreenList/> */}

       {/* <Forgot/> */}
      {/* <Reset/> */}

  
      
    
      <BrowserRouter>
      <Routes>
      <Route path="/"  element={<DashBoardHomePage/>}/>
        <Route path="/login"  element={<Login/>}/>
        <Route path="/userlist"  element={<UserList/>}/>
        <Route path="/adduser"  element={<AddUser/>}/>
        <Route path="/agentuserlist"  element={<AgentUserList/>}/>
        <Route path="/villalist"  element={<Villalist/>}/>
        <Route path="/viewvilla"  element={<ViewVilla/>}/>
        <Route path="/addvilla"  element={<AddVilla/>}/>
        <Route path="/villabookinglist"  element={<VillaBookingList/>}/>
        <Route path="/cmsscreenlist"  element={<CmsScreenList/>}/>
        <Route path="/dashboard"  element={<Dashbord/>}/>
      </Routes>
      </BrowserRouter>


      </>
      
    </div>
  );
}

export default App;
