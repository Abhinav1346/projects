jsx
import React from 'react';
import Header from './Header';
import TranslationSection from './TranslationSection';
import PatientDashboard from './PatientDashboard';
import DoctorList from './DoctorList';
import AppointmentScheduling from './AppointmentScheduling';
import EmergencyServices from './EmergencyServices';

function App() {
  return (
    <div>
      <Header />
      <TranslationSection />
      <PatientDashboard />
      <DoctorList />
      <AppointmentScheduling />
      <EmergencyServices />
    </div>
  );
}

export default App;