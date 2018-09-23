import * as React from 'react';
import { ILoadingProps, ILoadingState } from '../_types';

export default class Loading extends React.Component<ILoadingProps, ILoadingState> {
  constructor(props: ILoadingProps) {
    super(props);
    this.state = {
      text: this.props.text,
      interval: 0
    };
  }

  componentDidMount() {
    const stopper = this.props.text + '...';
    this.setState(() => ({
      interval: window.setInterval(() => {
        this.state.text === stopper
          ? this.setState(() => ({ text: this.props.text }))
          : this.setState(({ text }) => ({ text: text + '.' }));
      }, 300)
    }));
  }
  componentWillUnmount() {
    window.clearInterval(this.state.interval);
  }
  render() {
    return (
      <div className="container">
        <p className="text-center">{this.state.text}</p>
      </div>
    );
  }
}
