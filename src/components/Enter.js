import '../App.css';
import Typewriter from 'typewriter-effect';
import Flat from '../flat.jpeg'
import Hawaii from '../hawaii.jpeg'

function Enter({count, setCount}) {
    return (
        <div>
            <div>
                {count === 1 &&
                    <Typewriter
                        options={{
                            strings: ['<h1>I made you a website. <br> Or is it a card? <br> Website card?</h1><br><p>Anyway, I hope you think it is cool.</p>'],
                            cursor: "",
                            autoStart: true,
                            loop: false,
                            delay: 50,
                            deleteSpeed: 500000
                        }}
                    />
                }
                {count === 2 && <div><h1>This is a picture of Oak Park.</h1>
                <img width="400" height="400" src={Flat}></img></div>
                }
                {count === 3 && <div><h1>This is a picture of Hawaii.</h1>
                <img width="400" height="400" src={Hawaii}></img></div>
                }
            </div>
            <div>
                {count === 2 && <p>It is... flat.</p>}
                {count === 3 && <p>It is... less flat.</p>}
            </div>
        </div>
    )
}

export default Enter;