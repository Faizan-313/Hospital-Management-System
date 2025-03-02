import Home from './pages/Home.jsx';
import Doctors from './pages/Doctors.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AboutUs from './pages/AboutUs.jsx';
import Login from './pages/Auth/Login.jsx';
import Register from './pages/Auth/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';
import UserDashboard from './components/UserDashboard.jsx';
import ProtectedRoute from './routes/ProtectedRoute.jsx';
import { AuthProvider } from './context/AuthContext';
import RegisterDoctor from './pages/Auth/RegisterDoctor.jsx';
import DoctorDashboard from './components/DoctorDashboard.jsx';
import BookAppointment from './pages/BookAppointment.jsx';
import MedicalData from './components/MedicalData.jsx';

const router = createBrowserRouter([
  { path: '/',element: <Layout><Home /></Layout> },
  { path: '/doctors',element: <Layout><Doctors /></Layout>},
  { path: '/about', element: <Layout><AboutUs /></Layout> },
  { path: '/login',element: <Layout><Login /></Layout> },
  { path: '/register',element: <Layout><Register /></Layout> },

  { 
    path: '/book-appoinment', 
    element: (
      <ProtectedRoute role="patient">
        <Layout><BookAppointment /></Layout>
      </ProtectedRoute>
    ) 
  },
  {
    path: '/medical-data/:id',
    element: (
      <ProtectedRoute role="doctor">
        <Layout><MedicalData /></Layout>
      </ProtectedRoute>
    )
  },
  {
    path: '/doctordashboard', 
    element: (
      <ProtectedRoute role="doctor">
        <Layout><DoctorDashboard /></Layout>
      </ProtectedRoute>
    )
  },
  {
    path: '/userdashboard',
    element: (
      <ProtectedRoute role="patient">
        <Layout><UserDashboard /></Layout>
      </ProtectedRoute>
    )
  },
  {
    path: '/dashboard', 
    element: (
      <ProtectedRoute role="admin">
        <Layout><Dashboard /></Layout>
      </ProtectedRoute>
    )
  },
  {
    path: '/doctor-register', 
    element: (
      <ProtectedRoute role="admin">
        <Layout><RegisterDoctor /></Layout>
      </ProtectedRoute>
    )
  }
]);



function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
