import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {darkMode: true, darkBackground: true, darkModeText: true}

  getButtonTextChange = () => {
    const {darkMode} = this.state

    return darkMode ? 'Light Mode' : 'Dark Mode'
  }

  getDarkBackground = () => {
    const {darkBackground} = this.state
    return darkBackground ? 'darkModeBgContainer' : ' '
  }

  getDarkModeText = () => {
    const {darkModeText} = this.state
    return darkModeText ? 'darkModeTextColor' : ' '
  }

  darkModeChange = () => {
    this.setState(prevState => ({
      darkMode: !prevState.darkMode,
      darkBackground: !prevState.darkBackground,
      darkModeText: !prevState.darkModeText,
    }))
  }

  render() {
    return (
      <div className="bg-container">
        <div className={`card-container ${this.getDarkBackground()}`}>
          <h1 className={`lightDarkMode-heading ${this.getDarkModeText()}`}>
            Click To Change Mode
          </h1>

          <button
            onClick={this.darkModeChange}
            type="button"
            className="lightDarkMode-button"
          >
            {this.getButtonTextChange()}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
