import { Component } from "react";
import Header from "./components/Header/Header";
import NextVideos from "./components/NextVideos/NextVideos";
import CommentSection from "./components/CommentSection/CommentSection";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import MainVideo from "./components/MainVideo/MainVideo";
import "./App.scss";
import { videoData, videoList } from "./assets/data/video-data";

class App extends Component {
  state = {
    videoData,
    currentVideo: videoData[0],

    videoList: videoList,
  };

  onVidClick = (video) => {
    const { id } = video;
    videoData.forEach((video) => {
      if (id === video.id) {
        this.setState({ currentVideo: video });
      }
    });
  };

  render() {
    const filteredVideoList = this.state.videoList.filter((video) => {
      return this.state.currentVideo.id !== video.id;
    });
    return (
      <div className="App">
        <Header />
        <MainVideo src={""} poster={this.state.currentVideo.image} />
        <div className="container">
          <div className="container__details">
            <VideoDetails
              title={this.state.currentVideo.title}
              channel={this.state.currentVideo.channel}
              timestamp={this.state.currentVideo.timestamp}
              likes={this.state.currentVideo.likes}
              views={this.state.currentVideo.views}
              description={this.state.currentVideo.description}
            />
            <CommentSection commentsData={this.state.currentVideo.comments} />
          </div>
          <NextVideos
            videoList={filteredVideoList}
            onVideoClick={this.onVidClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
