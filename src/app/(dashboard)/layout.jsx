import React from 'react'

export default function dashboardLayout({children}) {
  return (<div className='grid grid-cols-12'>
    <div className="grid-cols-3">
        <ul>
            <li>User list</li>
            <li>Payroll</li>
            <li>Payment</li>
        </ul>
    </div>
   <div className='grid-cols-9'> {children} </div>
  </div>
   
  )
}
