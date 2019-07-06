import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistsActions } from "../../store/ducks/playlists";

//Styles
import { Container, NewPlaylist, Nav } from "./styles";

// Assets
import addPlayListIcon from "../../assets/images/add_playlist.svg";

//Componentes
import Loading from "../Loading";

class Sidebar extends Component {
  static propTypes = {
    getPlayListRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string
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
        <div>
          <Nav bold>
            <li>
              <Link to="/">Navegar</Link>
            </li>
            <li>
              <Link to="/">Radio</Link>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>SUA BIBLIOTECA</span>
            </li>
            <li>
              <a href="!">Seu Daily Mix</a>
            </li>
            <li>
              <a href="!">Tocadas recentimente</a>
            </li>
            <li>
              <a href="!">Músicas</a>
            </li>
            <li>
              <a href="!">Álbuns</a>
            </li>
            <li>
              <a href="!">Artistas</a>
            </li>
            <li>
              <a href="!">Estações</a>
            </li>
            <li>
              <a href="!">Arquivos locais</a>
            </li>
            <li>
              <a href="!">Vídeos</a>
            </li>
            <li>
              <a href="!">Podcasts</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>PLAYLISTS</span>
              {this.props.playlists.loading && <Loading />}
            </li>
            {this.props.playlists.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`/playlists/${playlist.id}`}>S{playlist.title}</Link>
              </li>
            ))}
          </Nav>
        </div>
        <NewPlaylist>
          <img src={addPlayListIcon} alt="add playlist" /> Nova Playlist
        </NewPlaylist>
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
)(Sidebar);
