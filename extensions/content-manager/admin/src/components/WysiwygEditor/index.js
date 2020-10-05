import React from "react";
import { Editor } from "draft-js";
import "draft-js/dist/Draft.css"; // only add this line
import PropTypes from "prop-types";

class WysiwygEditor extends React.Component {
  render() {
    return (
      <Editor textAlignment="right" {...this.props} ref={this.props.setRef} />
    );
  }
}

WysiwygEditor.defaultProps = {
  setRef: () => {},
};

WysiwygEditor.propTypes = {
  setRef: PropTypes.func,
};

export default WysiwygEditor;
