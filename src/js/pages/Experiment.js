// Experiment.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';


const Experiment = ({
	experiment
}) => {
	return (
			<div>
				<iframe src="experiments/island/dist/index.html" className="Experiment-Content" />
			</div>
			);
}

export default Experiment;