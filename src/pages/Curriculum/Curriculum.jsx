import React from 'react'
import curriculum from "../../docs/CurriculumJJ.pdf"
export default function Curriculum() {
  return (
    <div style={{position:"relative", whith:"100%", height:"100%"}}>
      <h1 className='text-center'><stron><u>Curriculum</u></stron></h1>
      <object
      data={curriculum}
      type='application/pdf'
      width="100%"
      height="100%"
      ></object>
    </div>
  )
}
