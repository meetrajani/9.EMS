import "./App.css";
import Header from "./componets/common/Header";
import Asidebar from "./componets/common/Asidebar";
import { Route, Routes } from "react-router-dom";
import Subadmins from "./componets/admin/body/Subadmins";
import Faculty from "./componets/faculty/Faculty";
import Student from "./componets/faculty/Student";
import {
  admin,
  facultysidebar,
  studentsidebar,
} from "./componets/common/Data/sidebarData";
import Facultyadmin from "./componets/admin/body/Facultyadmin";
import Studentadmin from "./componets/admin/body/Studentadmin";
import Student_student from "./componets/student/student_student";

function App() {

  let role = "admin";

  if (role === "admin") {
    return (
      <>
        <Header />
        <div className="row">
          <div className="col-2">
            <Asidebar data={admin} />
          </div>
          <div className="col-10">
            <Routes>
              <Route path="/admin" element={<Subadmins />} />
              <Route path="/admin/faculty" element={<Facultyadmin />} />
              <Route path="/admin/student" element={<Studentadmin />} />
            </Routes>
          </div>
        </div>
      </>
    );
  } else if (role === "faculty") {
    return (
      <>
        <Header />
        <div className="row">
          <div className="col-2">
            <Asidebar data={facultysidebar} />
          </div>
          <div className="col-10">
            <Routes>
              <Route path="/Faculty" element={<Faculty />} />
              <Route path="/Student" element={<Student />} />
            </Routes>
          </div>
        </div>
      </>
    );
  } else if (role === "student") {
    return (
      <>
        <Header />
        <div className="row">
          <div className="col-2">
            <Asidebar data={studentsidebar} />
          </div>
          <div className="col-10">
            <Routes>
              <Route path="/student" element={<Student_student />} />
            </Routes>
          </div>
        </div>
      </>
    );
  }
  
}

export default App;
