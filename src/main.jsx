import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tailwind.css'
import Header from './components/Header.jsx'
import QueueCard from './components/QueueCard.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <div className='flex flex-row justify-between items-center'>
      <QueueCard name="UMUM"/>
      <QueueCard name="GIGI"/>
    </div>
  </StrictMode>,
)
