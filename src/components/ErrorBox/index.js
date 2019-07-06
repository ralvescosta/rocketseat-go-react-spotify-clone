import React from "react";
import PropTypes from "prop-types";

//Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ErrorActions } from "../../store/ducks/error";

//styles
import { Container } from "./styles";

//Assets
// import closeIcon from "../../assets/images/close.svg";

const ErrorBox = ({ error: { message, visible }, hideError }) =>
  visible && (
    <Container>
      <p>{message}</p>
      <button onClick={hideError}>
        {/* <img src={closeIcon} alt="fechar" /> */}X
      </button>
    </Container>
  );

ErrorBox.propTypes = {
  hideError: PropTypes.func.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string,
    visible: PropTypes.bool
  }).isRequired
};

const mapStateToProps = state => ({
  error: state.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ErrorActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorBox);
