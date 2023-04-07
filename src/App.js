import React from "react";
import youtubeAPI from "./apis/youtube";
import SearchBar from "./components/searchBar/SearchBar";
import VideosList from "./components/videoList/VideoList";
import VideoDetail from "./components/videoDetail/VideoDetail";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      selectedVideo: null,
      videos: [],
    };
  }

  fetchYoutubeData = async (searchTerm) => {
    const { data } = await youtubeAPI.get("/search", {
      params: { q: searchTerm },
    });

    this.setState({
      ...this.state,
      selectedVideo: data.items[0],
      videos: data.items,
    });
  };

  componentDidMount = () =>
    this.fetchYoutubeData("Marvin Gaye - I Want You (Marvin's mood)");

  handleSelectVideo = (video) =>
    this.setState({ ...this.state, selectedVideo: video });

  handleChange = (event) =>
    this.setState({ ...this.state, term: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();
    this.fetchYoutubeData(this.state.term);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar
          term={this.state.term}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideosList
                videos={this.state.videos}
                onSelectVideo={this.handleSelectVideo}
              />
            </div>      
          </div>
        </div>
      </div>
    );
  }
}
