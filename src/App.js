import React, { Component } from 'react';
import axios from 'axios';
import Layout from '../src/components/Layout/Layout'
import Hangman from './components/Hangman/Hangman'
import MissedLetters from "./components/MissedLetters/MissedLetters";
import Letters from "./components/Letters/Letters";
import GameOver from "./components/GameOver/GameOver";
class App extends Component {
    constructor(props){
        super(props);
        this.state= {
            elements: [
                'hangman-stick',
                'hangman-head',
                'hangman-neck',
                'hangman-torso',
                'hangman-right-arm',
                'hangman-left-arm',
                'hangman-right-hand',
                'hangman-left-hand',
                'hangman-right-leg',
                'hangman-left-leg',
                'hangman-right-foot',
                'hangman-left-foot'
            ],
            word: '',
            letters: [],
            missed: [],
            counted:';,
            missedCount: 0,
            gameOver: false,
            gameWon: false,
        }
    }
    fetchTheData() {
        axios.get('http://api.wordnik.com/v4/words.json/randomWord?api_key=2a7dcc53f5ba07ba1400d0ad85f06d10b660242c533b89e6b')
            .then(response=> {
                this.setState({
                    word:response.data.word
                });
            })
            .then(this.setLetters)
            .catch((err)=> console.log('Error',err));
    }
    componentDidMount(){
        this.fetchTheData();
        window.addEventListener('keydown',(event)=>{
            this.Check(event.key);
            console.log(event);
        });

    }
    setLetters=()=>{
        const word = this.state.word;
        const wordArray = word.split('');
        const newLetters = wordArray.map((value,index)=>{
            return{
                val : value,
                isFound: false,
                index:index,
            }
        });
        this.setState({
            letters:newLetters,
            counted:word.length
        });
        console.log(this.state.letters);
    };
    handleReset=() =>{
        this.setState(() => {
            return {
                word: '',
                letters: [],
                missed: [],
                counted:0,
                missedCount: 0,
                gameOver: false,
                gameWon: false,
            };
        });
        this.fetchTheData();
    };
    Check = (key) => {

            if (this.state.missed.includes(key)) {
                let countMissed = this.state.missedCount;
                countMissed++;
                this.setState({
                    missedCount: countMissed
                });
            }
            else if (this.state.word.includes(key) && !this.state.missed.includes(key)) {
                var count = this.state.counted;
                const result = this.state.letters.map((letter) => {
                    if (letter.val === key) {
                        letter.isFound = true;
                        count--;
                    }
                    return letter;
                });

                this.setState({
                    letters: result,
                    counted:count
                });
            }
            else {
                let countMissed = this.state.missedCount;
                countMissed++;
                this.setState((currentState) => {
                    return {
                        missed: currentState.missed.concat([
                            key,
                        ]),
                        missedCount: countMissed

                    }
                })


        }
    };

    render() {
        if(this.state.missedCount===11){
            return <GameOver won={false} onClickReset={this.handleReset}/>
        }
        else if(this.state.counted===0){
            return <GameOver won={true} onClickReset={this.handleReset}/>
        }
        return (
            <div>
                <Layout>
                    <Hangman elements={this.state.elements} count={this.state.missedCount} />
                    <MissedLetters missed={this.state.missed}/>
                    <Letters letters={this.state.letters}/>
                </Layout>
            </div>
        );
    }
}

export default App;
