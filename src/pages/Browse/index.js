import React, { Component } from "react";
import PropTypes from "prop-types";

//Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistsActions } from "../../store/ducks/playlists";

//Styles
import { Container, Title, List, Playlist } from "./styles";

// Components
import { Loading } from "../../components";

class Browse extends Component {
  static propTypes = {
    getPlayListRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          thumbnail: PropTypes.string,
          description: PropTypes.string
        })
      ),
      loading: PropTypes.bool
    }).isRequired
  };
  componentDidMount() {
    this.props.getPlayListRequest();
  }
  render() {
    return (
      <Container>
        <Title>Navegar{this.props.playlists.loading && <Loading />}</Title>

        <List>
          {this.props.playlists.data.map(playlist => (
            <Playlist to={`/playlists/${playlist.id}`} key={playlist.id}>
              <img src={playlist.thumbnail} alt={playlist.title} />
              <strong>{playlist.title}</strong>
              <p>{playlist.description}</p>
            </Playlist>
          ))}
        </List>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse);
