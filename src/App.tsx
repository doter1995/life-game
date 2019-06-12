import * as  React from 'react';
import Life from "./life";
import Celles from './Celles.1';

class App extends React.Component {
    life: Life;
    interval: any;
    constructor(props) {
        super(props);
        this.life = new Life(60, 120);
        this.state = {
            Celles: this.life.getCelles()
        }
    }
    pause = () => {
        window.clearInterval(this.interval);
        this.interval = null;
    }
    start = () => {
        if (this.interval) {
            return null;
        }
        this.interval = setInterval(() => {
            this.life.change()
            this.setState({ Celles: this.life.getCelles() })
        }, 100)
    }
    restart = () => {
        this.pause();
        this.life.init();
        this.setState({ Celles: this.life.getCelles() })
        this.start();
    }
    render() {
        return (
            <div className="App">
                <div className="menu">
                    <button onClick={this.start}>start</button>
                    <button onClick={this.pause}>pause</button>
                    <button onClick={this.restart}>restart</button>
                </div>
                <div className="content">
                    <Celles data={this.state.Celles} />
                </div>
            </div>
        );
    }
}
export default App;