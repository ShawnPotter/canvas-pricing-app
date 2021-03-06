import React from 'react';

function Guidelines() {
  return (
<article>
    <h3>Pricing Guideline:</h3> 
    <h4>Complexity + Sizing</h4>
   <ul className='pt-2'>
    <li>Complexity:</li>
    <li>Beginner: .18</li>
    <li>Mid: .40</li>
    <li>Experienced: .75</li>
  </ul> 
  <ul>
    <li>Sizing:</li> 
    <li>Small: +.25</li>
    <li>Medium: +.20</li> 
    <li>Large: +.15</li> 
  </ul>

  <p className='hint pt-3'> Note: Calculations are approximations. Feel free to substitute your calculations.</p>
</article>
  );
}
export default Guidelines;