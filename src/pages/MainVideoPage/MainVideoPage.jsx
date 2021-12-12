import { Component } from "react";
import Header from "../../components/Header/Header";
import NextVideos from "../../components/NextVideos/NextVideos";
import CommentSection from "../../components/CommentSection/CommentSection";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import MainVideo from "../../components/MainVideo/MainVideo";
import "./MainVideoPage.scss";
import axios from "axios";
import Loader from "react-loader-spinner";

const API_KEY = "b675be31-ede5-4d83-b18a-7009e9ab0578";
class MainVideoPage extends Component {
  state = {
    currentVideo: null,
    videoList: [],
  };

  componentDidMount() {
    // getting the video list from the API and set the new data update the state
    axios
      .get(`https://project-2-api.herokuapp.com/videos?api_key=${API_KEY}`)
      .then((listResponse) => {
        const videoList = listResponse.data;
        const firstVid = videoList[0];
        let videoID = firstVid.id;

        // this if statement takes the video Id from the parameters and set it to the variable that originally has the default video Id
        if (this.props.match.params.id) {
          videoID = this.props.match.params.id;
        }

        // takes the id available in videoID to make a get request to display that video with the same id
        this.getMainVideo(videoID);
        this.setState({ videoList: listResponse.data });
      })
      .catch((err) => {
        console.alert("Failed to get video!");
      });
  }
  //this function takes an Id as a parameter to make a get request
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

  // when clickimg any video from the video list it passed the id to the function to display it as a main video
  onVidClick = (video) => {
    const { id } = video;
    this.getMainVideo(id);
  };
  // takes th user to the upload page when clicking the upload button
  handleOnUploadClick = () => {
    this.props.history.push("/upload");
  };

  render() {
    // in case there's ta delay in the get request this if statement displays some of the page and a spinner
    if (!this.state.currentVideo) {
      return (
        <>
          <Header onUploadClick={this.handleOnUploadClick} />
          <div className="spinner-container">
            <Loader
              type="Puff"
              color="#0095FF"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
          </div>
        </>
      );
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
