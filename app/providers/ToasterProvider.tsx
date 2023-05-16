'use client';

// The latest 'app' folder in next js required some components to hold taken components directly from npm...
import { Toaster } from 'react-hot-toast';

const ToasterProvider = () => {
  return (
    <Toaster />
  )
}

export default ToasterProvider;

