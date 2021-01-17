import React, { useEffect } from "react"
import { navigate } from "@reach/router"

const AirportThesis = () => {
  useEffect(() => {
    navigate('/downloads').then();
  }, []);
  return null;
}

export default AirportThesis