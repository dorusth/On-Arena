import React from 'react';
import SelectPlayer from './components/selectPlayer';
import Question from './components/question';

class Anwsers extends React.Component{
	constructor(props){
		super(props)

		this.state ={
			currentPlayer:"Ten Hag",
			interviewedPlayers:1,
			anwsers:[
				{
					question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere eros non justo lacinia?",
					anwser:"eu iaculis tortor luctus. Nulla facilisi. Praesent quis mauris luctus, elementum dui eget, auctor massa. Donec laoreet posuere mi ac tincidunt. Nulla eget fermentum nibh.",
					by:"naam"
				},
				{
					question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere eros non justo lacinia?",
					anwser:"eu iaculis tortor luctus. Nulla facilisi. Praesent quis mauris luctus, elementum dui eget, auctor massa. Donec laoreet posuere mi ac tincidunt. Nulla eget fermentum nibh.",
					by:"naam"
				},
				{
					question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere eros non justo lacinia?",
					anwser:"eu iaculis tortor luctus. Nulla facilisi. Praesent quis mauris luctus, elementum dui eget, auctor massa. Donec laoreet posuere mi ac tincidunt. Nulla eget fermentum nibh.",
					by:"naam"
				},
				{
					question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere eros non justo lacinia?",
					anwser:"eu iaculis tortor luctus. Nulla facilisi. Praesent quis mauris luctus, elementum dui eget, auctor massa. Donec laoreet posuere mi ac tincidunt. Nulla eget fermentum nibh.",
					by:"naam"
				}
			]
		}
	}

	render(){
		let playerChange = (player)=>{
			this.setState({currentPlayer:player})
		}

		let questions = this.state.anwsers.map(
			(anwser,i) => {
				return(
					<Question key={i} anwser={anwser} />
				)
			}
		)
		return(
			<div className="content anwsers">
				<SelectPlayer playerChange={playerChange} players={this.props.players}/>
				<div className="playerAvatar">
					<img src="./img/Ten-Hag.png"/>
					<p>{this.state.currentPlayer}</p>
				</div>
				{questions}
			</div>
		)
	}
}

export default Anwsers;
