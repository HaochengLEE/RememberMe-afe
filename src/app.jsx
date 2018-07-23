/*
* @Author: lihaocheng
* @Date:   2018-07-09 17:59:02
* @Last Modified by:   lihaocheng
* @Last Modified time: 2018-07-09 20:58:03
*/
import React from 'react';
import ReactDOM from 'react-dom';


class Child1 extends React.Component{
	constructor(props){
		super(props);
	}
	handleClick(){
		this.props.changechildColor('red');
	}
	

	render(){
		return(
			<div>
				<h1>Child1 {this.props.bgcolor}</h1>
				
				<button onClick={(e)=>{this.handleClick(e)}}>改变父组件颜色</button>
				
			</div>
			);
	}
	

}
class Child2 extends React.Component{
	constructor(props){
		super(props);
	}
	

	render(){
		return(
			<div style={{background:this.props.child2bgcolor}}>
				<h1>Child2 {this.props.bgcolor}</h1>
				
				<button onClick={(e)=>{this.handleClick(e)}}>改变Child2颜色</button>
				
			</div>
			);
	}
	

}

class Father extends React.Component{
	constructor(props){
		super(props);
		this.state={
			child2bgcolor:'#999'
		}

	}
	onchild2BgColorChange(color){
		this.setState({
			child2bgcolor:color
		})
	}
	render(props){
		return (
		<div>
			<Child1 changechildColor={(color)=>{this.onchild2BgColorChange(color)}}/>
			<Child2 child2bgcolor={this.state.child2bgcolor}/>
		</div>
		)
	}
}
// class App extends React.Component{
// 	render(){
// 		return (
// 			{/*容器式组件*/}
// 			<div className="">
// 				<Title>App span</Title>
// 				<a href="">link</a>
// 				{/*单纯组件*/}
// 				<hr/>
// 					<Component/>
// 			</div>
// 			);
// 	}
// }
ReactDOM.render(

	<Father/>,
	
	document.getElementById('app')
	);