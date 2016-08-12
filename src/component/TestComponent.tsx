import * as React from 'react';
import {connect} from 'react-redux';

interface TestComponentProps {
  name: string;
}

export class TestComponent extends React.Component<TestComponentProps, any> {

  render() {
    return (
              <div>
                  I am confused {this.props.name}! am I?
              </div>
    );
  }

  const mapStateToProps = state => ({
    props : state.testReducer.name
 });

 export default connect(mapStateToProps)(TestComponent);

}
