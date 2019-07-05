import React from "react";
import Slider from "rc-slider";

import {
  Container,
  Current,
  Volume,
  Progress,
  Controls,
  Time,
  ProgressSlider
} from "./styles";

import volumeIcon from "../../assets/images/volume.svg";
import ShufflerIcon from "../../assets/images/shuffle.svg";
import BackwardIcon from "../../assets/images/backward.svg";
import PlayIcon from "../../assets/images/play.svg";
import PauseIcon from "../../assets/images/pause.svg";
import ForwardIcon from "../../assets/images/forward.svg";
import RepeatIcon from "../../assets/images/repeat.svg";

const Player = () => (
  <Container>
    <Current>
      <img
        src="https://img2-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/21198/large_thumb_placeit__88_.jpg"
        alt="img album"
      />
      <div>
        <span>Times Like This</span>
        <small>Foo Fighters</small>
      </div>
    </Current>

    <Progress>
      <Controls>
        <button>
          <img src={ShufflerIcon} alt="ShufflerIcon" />{" "}
        </button>
        <button>
          <img src={BackwardIcon} alt="r" />{" "}
        </button>
        <button>
          <img src={PlayIcon} alt="" />{" "}
        </button>
        {/* <button> <img src={PauseIcon} alt="PauseIcon" /> </button> */}
        <button>
          <img src={ForwardIcon} alt="ForwardIcon" />{" "}
        </button>
        <button>
          <img src={RepeatIcon} alt="RepeatIcon" />{" "}
        </button>
      </Controls>
      <Time>
        <span>1:39</span>
        <ProgressSlider>
          <Slider
            railStyle={{
              background: "#404040",
              borderRadius: 10
            }}
            trackStyle={{ background: "#1ed760" }}
            handleStyle={{ border: 0, cursor: "pointer" }}
          />
        </ProgressSlider>
        <span>4:15</span>
      </Time>
    </Progress>

    <Volume>
      <img src={volumeIcon} alt="volume" />
      <Slider
        railStyle={{
          background: "#404040",
          borderRadius: 10
        }}
        trackStyle={{ background: "#FFF" }}
        handleStyle={{ display: "none" }}
        value={100}
      />
    </Volume>
  </Container>
);

export default Player;
