import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

class BodySection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, title } = this.props;
    return (
      <div className={css(styles.bodySection)}>
        <h2 className={css(styles.bodySectionH2)}>{title}</h2>
        {children}
      </div>
    );
  }
}

BodySection.defaultProps = {
  title: "",
};

BodySection.propTypes = {
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  bodySection: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
  },

  bodySectionH2: {
    width: "100%",
  },
});

export default BodySection;
