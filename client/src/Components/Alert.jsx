// import '../App.css'
// const Alert = ({ alert }) => {
//   return (
//     <>
//       {alert != null && <h4 className={`alert-${alert.type}`}>{alert.msg}</h4>}
//     </>
//   );
// };

// export default Alert;

import { useEffect, useState } from "react";
import "../App.css";

const Alert = ({ alert }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMsg, setCurrentMsg] = useState("");
  const [isProcessing, setIsProcessing] = useState(false); // Flag to prevent stacking

  useEffect(() => {
    if (alert?.msg && !isProcessing && alert.msg !== currentMsg) {
      setIsProcessing(true); // Lock processing
      setIsVisible(true);
      setCurrentMsg(alert.msg);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setCurrentMsg("");
        setIsProcessing(false); // Unlock after timeout
      }, 5100); // Slightly longer than App.jsx's 5000ms to ensure clearance
      return () => clearTimeout(timer);
    } else if (!alert?.msg && isVisible) {
      setIsVisible(false);
      setCurrentMsg("");
      setIsProcessing(false);
    }
  }, [alert, currentMsg, isProcessing]);

  return (
    <>
      {isVisible && <h4 className={`alert-${alert?.type}`}>{currentMsg}</h4>}
    </>
  );
};

export default Alert;