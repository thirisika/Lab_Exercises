import { Route,Routes } from "react-router-dom";
import Homepage from "../page/Homepage";
import Loginpage from "../page/Loginpage";
import Bitcoinpage from "../page/Bitcoinpage";
import PageNotFound from "../page/PageNotFound";


function AppRoutes(props) {

    return (
    <Routes>
    {/* index matches on default/home URL: / */}
    <Route index element={<Homepage {...props} />} />
    
    {/* nested routes, matches on /dash/messages etc */}
    {/* <Route path="dash" element={<DashboardPage {...props} />}>
    <Route path="messages" element={<DashboardMessages />} />
    <Route path="tasks" element={<DashboardTasks />} />
    </Route> */}
    
    <Route path='/login' element={<Loginpage {...props} />} />
    <Route path='/bitcoin' element={<Bitcoinpage {...props} />} />
    
    {/* special route to handle if none of the above match */}
    <Route path="*" element={<PageNotFound />} />
    </Routes>
    )
    }
    
    export default AppRoutes;