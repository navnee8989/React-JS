import React from 'react';

class ConditionalRendring extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showContent: false
    };
  }

  toggleContent = () => {
    this.setState(prevState => ({
      showContent: !prevState.showContent
    }));
  }

  render() {
    const { showContent } = this.state;

    return (
      <div className='text-center'>
        <button onClick={this.toggleContent}>
          Enter 
        </button>

        {showContent && (
          <div>
            {/* Content to be rendered when showContent is true */}
            <p>Log In</p>
          </div>
        )}

        {!showContent && (
          <div>
            {/* Content to be rendered when showContent is false */}
            <p>Log Out</p>
          </div>
        )}
      </div>
    );
  }
}
export default ConditionalRendring;