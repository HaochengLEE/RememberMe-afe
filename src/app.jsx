/*
* @Author: lihaocheng
* @Date:   2018-07-09 17:59:02
* @Last Modified by:   lihaocheng
* @Last Modified time: 2018-07-09 20:58:03
*/
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Switch , Redirect , Route , Link} from 'react-router-dom'

import Layout from 'component/layout/index.jsx';
//页面
import Home from 'page/home/index.jsx';

class App extends React.Component{
	render(){
		return(
			<Router>
				<Layout>
					<Switch>
						<Route exact path="/" component={Home}/>
						<Redirect from="*" to="/"/>
					</Switch>
				</Layout>
			</Router>

			);
	}
}

ReactDOM.render(

	<App/>,
	
	document.getElementById('app')
	);