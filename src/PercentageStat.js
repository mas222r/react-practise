import React from 'react';
import PropTypes from 'prop-types';

class PercentageStat extends React.Component {
  constructor(props){
	super(props);
    this.state={
      label:this.props.label,
	  score: this.props.score,
	  total: this.props.total
	};	
  }
  
  doMath() {
       const lb = this.props.total;
	   const sc = this.props.score;
       const result = Math.round(sc/lb * 100);
       return result;
    }

  render() {
	  const mathr= this.doMath();
	  return (
	    <div>
              <h6>{this.state.label}</h6>
              <span>{mathr}%</span>
        </div>
	  );
  }
  
}
// Specifies the default values for props:
PercentageStat.defaultProps = {
  score: 0,
  total: 1
};
PercentageStat.propTypes = {
  label: PropTypes.string,
  total: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired
};

export default PercentageStat;