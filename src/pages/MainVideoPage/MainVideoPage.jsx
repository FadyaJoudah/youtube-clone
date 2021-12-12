import { Component } from "react";
import Header from "../../components/Header/Header";
import NextVideos from "../../components/NextVideos/NextVideos";
import CommentSection from "../../components/CommentSection/CommentSection";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import MainVideo from "../../components/MainVideo/MainVideo";
import "./MainVideoPage.scss";
import axios from "axios";

const API_KEY = "b675be31-ede5-4d83-b18a-7009e9ab0578";
class MainVideoPage extends Component {
  state = {
    currentVideo: null,

    videoList: [],
  };

  componentDidMount() {
    axios
      .get(`https://project-2-api.herokuapp.com/videos?api_key=${API_KEY}`)
      .then((listResponse) => {
        const videoList = listResponse.data;
        const firstVid = videoList[0];
        let videoID = firstVid.id;
        console.log(this.props.match.params.id);

        if (this.props.match.params.id) {
          videoID = this.props.match.params.id;
        }
        console.log("nunu");

        this.getMainVideo(videoID);
        this.setState({ videoList: listResponse.data });
      })
      .catch((err) => {
        console.alert("Failed to get video!");
      });
  }

  getMainVideo = (id) => {
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/${id}?api_key=${API_KEY}`
      )
      .then((vidResponse) => {
        this.setState({ currentVideo: vidResponse.data });
      })
      .catch((err) => {
        console.alert("Failed to load");
      });
  };
  onVidClick = (video) => {
    const { id } = video;
    this.getMainVideo(id);
  };
  handleOnUploadClick = () => {
    this.props.history.push("/upload");
  };

  render() {
    console.log(this.state.videoList);
    if (!this.state.currentVideo) {
      return <div> loading</div>;
    }
    const filteredVideoList = this.state.videoList.filter((video) => {
      return this.state.currentVideo.id !== video.id;
    });

    return (
      <div className="MainVideoPage">
        <Header onUploadClick={this.handleOnUploadClick} />
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

export default MainVideoPage;
