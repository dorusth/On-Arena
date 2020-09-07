import React from 'react'

class SelectPlayer extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			current:0
		}
	}


	render(){
		let playerList = this.props.players.map(
			(player, i) => {
				if(i===this.state.current){
					return <li key={i} className="active">{player}</li>
				}else{
					return <li key={i} onClick={()=>{this.setState({current:i},this.props.playerChange(player))}}>{player}</li>
				}
			})
		return(
			<nav className="anwserPlayer">
				<ul>
					{playerList}
				</ul>
			</nav>
		)
	}
}

export default SelectPlayer
