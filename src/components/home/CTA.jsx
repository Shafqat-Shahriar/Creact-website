import React from 'react'
import APPP from '../../assets/diamond.pdf'
export const CTA = () => {
  return (
    <div>
        <div className="cta">
            <a href={APPP} download className='btn'>DOWNLOAD THE APP</a>
        </div>
    </div>
  )
}

export default CTA 