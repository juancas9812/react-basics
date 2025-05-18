import { useEffect } from "react"

const BasicEffect = () => {

  useEffect(() => {
    console.log('Use effect on load');
  }, []);

  return (
    <div>BasicEffect</div>
  )
}

export default BasicEffect;