import './App.css'
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.playSound);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.playSound);
  }

  playSound(event) {
    let audio;
    let keys = ["q", "w", "e", "a", "s", "d", "z", "x", "c"];
    keys = [...keys, ...keys.map((key) => key.toUpperCase())];

    if (typeof event.key == "string" && keys.includes(event.key)) {
      audio = document.getElementById(event.key.toUpperCase());
    } else if (event.target.children[0].nodeName == "AUDIO") {
      audio = event.target.children[0];
    }

    if (audio) {
      audio.currentTime = 0;
      audio.play();
      document.getElementById("display").innerHTML = audio.id;
    }
  }

  render() {
    return (
      <>
        <div className="row justify-content-center">
          <div className="main-col shadow p-1 m-1 mt-5 col-4">
            <div
              className=" m-4 d-flex justify-content-between"
              id="drum-machine"
            >
              <div className=" shadow card w-100">
                <div className="card-header text-center">
                  <strong>Drum Machine</strong>
                </div>
                <div className="card-body">
                  <div
                    class="alert alert-secondary text-center fs-3"
                    id="display"
                    role="alert"
                  >
                    <strong> - - -</strong>
                  </div>
                  <div className="d-flex flex-column">
                    <div className="d-flex justify-content-between">
                      <button
                        id="Q-button"
                        className="drum-pad btn btn-dark w-100 p-2 m-2 fw-bold"
                        onClick={this.playSound}
                        ref={this.myRef}
                      >
                        <audio
                          className="clip"
                          id="Q"
                          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
                        ></audio>
                        Q
                      </button>
                      <button
                        id="W-button"
                        className="drum-pad btn btn-dark w-100 p-2 m-2 fw-bold"
                        onClick={this.playSound}
                      >
                        <audio
                          className="clip"
                          id="W"
                          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
                        ></audio>
                        W
                      </button>
                      <button
                        id="E-button"
                        className="drum-pad btn btn-dark w-100 p-2 m-2 fw-bold"
                        onClick={this.playSound}
                      >
                        <audio
                          className="clip"
                          id="E"
                          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
                        ></audio>
                        E
                      </button>
                    </div>
                    <div className="d-flex justify-content-between">
                      <button
                        id="A-button"
                        className="drum-pad btn btn-dark w-100 p-2 m-2 fw-bold"
                        onClick={this.playSound}
                      >
                        <audio
                          className="clip"
                          id="A"
                          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
                        ></audio>
                        A
                      </button>
                      <button
                        id="S-button"
                        className="drum-pad btn btn-dark w-100 p-2 m-2 fw-bold"
                        onClick={this.playSound}
                      >
                        <audio
                          className="clip"
                          id="S"
                          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
                        ></audio>
                        S
                      </button>
                      <button
                        id="D-button"
                        className="drum-pad btn btn-dark w-100 p-2 m-2 fw-bold"
                        onClick={this.playSound}
                      >
                        <audio
                          className="clip"
                          id="D"
                          src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
                        ></audio>
                        D
                      </button>
                    </div>
                    <div className="d-flex justify-content-between">
                      <button
                        id="Z-button"
                        className="drum-pad btn btn-dark w-100 p-2 m-2 fw-bold"
                        onClick={this.playSound}
                      >
                        <audio
                          className="clip"
                          id="Z"
                          src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
                        ></audio>
                        Z
                      </button>
                      <button
                        id="X-button"
                        className="drum-pad btn btn-dark w-100 p-2 m-2 fw-bold"
                        onClick={this.playSound}
                      >
                        <audio
                          className="clip"
                          id="X"
                          src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
                        ></audio>
                        X
                      </button>
                      <button
                        id="C-button"
                        className="drum-pad btn btn-dark w-100 p-2 m-2 fw-bold"
                        onClick={this.playSound}
                      >
                        <audio
                          className="clip"
                          id="C"
                          src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
                        ></audio>
                        C
                      </button>
                    </div>
                  </div>
                  <div class="alert alert-dark text-center mt-2" role="alert">
                    click or press the keys to play drum sounds!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;