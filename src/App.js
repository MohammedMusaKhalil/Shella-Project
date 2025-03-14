import './component/css/landingpage.css';
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
const LandingPage = React.lazy(() => import('./component/pages/landingpage.js')); 
const JoinAsDriver = React.lazy(() => import('./component/pages/joinasdriver.js')); 
const JoinAsPartner = React.lazy(() => import('./component/pages/joinaspartner.js')); 
const JoinAsInvestor = React.lazy(() => import('./component/pages/joinasInvestor.js')); 
const JoinAsWorker = React.lazy(() => import('./component/pages/joinasworker.js')); 
const JoinAsKaidhaService = React.lazy(() => import('./component/pages/joinkaidhaservice.js')); 

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/join-as-driver" element={<JoinAsDriver />} />
        <Route path="/join-as-partner" element={<JoinAsPartner />} />
        <Route path="/join-as-investor" element={<JoinAsInvestor />} />
        <Route path="/join-as-worker" element={<JoinAsWorker />} />
        <Route path="/join-as-kaidha-service" element={<JoinAsKaidhaService />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Suspense>
  );
}

export default App;