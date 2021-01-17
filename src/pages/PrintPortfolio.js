import React, { useEffect } from "react"
import { navigate } from "@reach/router"

const PrintPortfolio = () => {
  useEffect(() => {
    navigate('/downloads').then();
  }, []);
  return null;
}

export default PrintPortfolio