import React from 'react';
import Anwsers from './components/anwsers/index';
import Vote from './components/vote/index';
import './App.css';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			active:0,
			anwsers:"active",
			vote:" ",
			players:["ten Hag", "Reiziger", "Tadic", "Van der Beek", "Zyech"]
		}
	}

	checkTab(input){
		if(input==="antwoorden"){
			this.setState({
				active:0,
				anwsers:"active",
				vote:" "
			},()=>{console.log(1);})
		}else{
			this.setState({
				anwsers:" ",
				vote:"active"
			},()=>{console.log(2);})
		}
	}

	SelectedTab(){
		if(this.state.anwsers === "active"){
			return <Anwsers players={this.state.players}/>
		}else{
			return <Vote />
		}
	}

	render(){
		return (
			<div className="App">
			  <header>
			    <img src="./img/OnArena_Logo_White.png" alt="logo on arena"/>
			  </header>
			  <div className="timer">
				  <p>Wedstrijd</p>
				  		<progress value="22" max="100"></progress>
				  <p>Resterende tijd</p>
			  </div>
			  <main>
				  <nav className="tabNav">
					  <ul>
						  <li className={this.state.anwsers} onClick={()=>this.checkTab('antwoorden')}>Antwoorden</li>
						  <li className={this.state.vote} onClick={()=>this.checkTab('stem')}>Stem</li>
					  </ul>
				  </nav>
				  {this.SelectedTab()}
			  </main>
			</div>
		);
	}
}

export default App;
