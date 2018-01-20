import React, {Component} from 'react';

function formatUser(user){
	if(user){
		return user.firstName+' '+user.lastName;
	} else {
		return 'Stranger';
	}
	
}
const user = {
	firstName: 'Sony',
	lastName: 'samsung'
};
const element = (
	<h1>
		Hello, {formatUser(user)}
	</h1>
);
const element2 = React.createElement(
	'p',
	{className:'paragraph', id:'sampleP'},
	'Sample text in sample paragraph.'
)

class DemoComponent extends Component {
	render(){
		return (<div>
			{element}

			<h3 tabIndex="1" another-attr='sample12'>Hello, {formatUser()}</h3>
			{element2}
		</div>)
	};
}

export default DemoComponent