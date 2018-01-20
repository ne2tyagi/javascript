import React, { Component } from 'react';
import { connect } from 'react-redux';

import { PropTypes } from 'prop-types';

const List = ({list})=> {
console.log(list)
		return (
		<div>
		<p>Sample List </p>
		</div>
		)
	
};

const listStoreMap = state => {
	return {
		list : state.list
	}
};

List.propTypes = {
	list: PropTypes.array
};

connect(listStoreMap)(List)
export default List;