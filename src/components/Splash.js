import '../App.css';
import logo from '../tree.png';

function Splash({count, setCount}) {
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <div>
                <h1>Merry Christmas!</h1>
            </div>
            <div>
                <div>
                    <p>Click the button!</p>
                    <button className="btn btn-success" onClick={() => setCount(1)}>Enter</button>
                </div>
            </div>
        </div>
    )
}

export default Splash;