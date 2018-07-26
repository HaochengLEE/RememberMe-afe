import React from 'react';

class Layout ectends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div id="wrapper">
			test layout
			{/*
			<TopNav/>
			<SideNav/>
		    */}
			{this.props.children}
			</div>

			);
	}
}

export default Layout;