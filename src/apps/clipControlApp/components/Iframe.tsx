import React, { useState, FC, Component, useEffect } from 'react';
import ReactDOM from 'react-dom';

const style = {
  height: 'auto',
  width: 'auto',
  position: 'fixed',
  top: '0px',
  right: '5%',
  borderRadius: '10px',
  border: 'none',
  opacity: 0.9,
  zIndex: 10000,
  background: 'white'
} as React.CSSProperties;

class Iframe extends Component {
  private node: HTMLIFrameElement | undefined;

  componentDidMount() {
    this.forceUpdate();
  }

  render() {
    const { children, ...props } = this.props;
    const iframeRoot = this.node?.contentDocument?.body;
    return (
      <iframe
        {...props}
        ref={node => node && (this.node = node)}
        style={style}
      >
        {iframeRoot && ReactDOM.createPortal(children, iframeRoot)}
      </iframe>
    )
  }
}

// TODO: solve invalid hook
// const Iframe: FC<{}> = ({
//   children,
//   ...props
// }) => {
//   const [contentRef, setContentRef] = useState<any>(null); // TODO: remove any
//   const mountNode = contentRef?.contentWindow?.document.body;

//   return (
//     <iframe
//       {...props}
//       ref={(node) => setContentRef(node)}
//       style={style}
//     >
//       {
//         mountNode &&
//         ReactDOM.createPortal(React.Children.only(children), mountNode)
//       }
//     </iframe>
//   );
// };

export default Iframe;