import React from 'react';

import PercentageStat from './PercentageStat'
class PercentageStatEmbed extends React.Component {

   render(){
   
    return(
	    <div>
             <h1>Male Population</h1>
			  <div>
				<PercentageStat label="Class 1" total={360} score={203} />
				<PercentageStat label="Class 2" total={206} />
				<PercentageStat label="Class 3" score={107} />
				<PercentageStat label="Class 4" />
			  </div>
        </div>
	)
   
   }
}


export default PercentageStatEmbed;