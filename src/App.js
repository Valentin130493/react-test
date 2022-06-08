import "styles/app.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import store from "redux/store";
import history from "./@history";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "pages";
import Clinics from "pages/clinics";
import { Login, Appointment, CardInfo, ExamDetails, PatientInfo, PhysicianInfo } from "pages/authantication";
import { Dashboard, Chat, AppointmentHistory, CalendarAppointment } from "pages/patientPortal";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes history={history}>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/clinics" element={<Clinics />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/cardinfo" element={<CardInfo />} />
          <Route path="/examdetails" element={<ExamDetails />} />
          <Route path="/patientinfo" element={<PatientInfo />} />
          <Route path="/physicianinfo" element={<PhysicianInfo />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/appointmenthistory" element={<AppointmentHistory />} />
          <Route path="/calendarappointment" element={<CalendarAppointment />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
