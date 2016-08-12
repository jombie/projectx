import * as React from 'react';
import {connect} from 'react-redux';

interface TestComponentProps {
  name: string;
}

class TestComponent extends React.Component<TestComponentProps, any> {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          I am confused {this.props.name}! am I?
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log('satte is ', state);
  return {
    name : state.testReducer.name
  }
}

export default connect(mapStateToProps)(TestComponent);
