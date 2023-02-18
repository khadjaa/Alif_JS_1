'use strict';

const playerEl = document.querySelector('[data-id="player"]');
const videoEl = document.querySelector('[data-id="video"]');
const playEl = playerEl.querySelector('[data-action="play"]');
const pauseEl = playerEl.querySelector('[data-action="pause"]');
const VplusEl = playerEl.querySelector('[data-action="volume-plus"]');
const VminusEl = playerEl.querySelector('[data-action="volume-minus"]');

const video = {
  videoEl: {
    url: 'video/video.mp4',
  },
  playEl,
  pauseEl,
  VplusEl,
  VminusEl,
};

videoEl.volume = 0;

videoEl.src = video.videoEl.url;

video.playEl.onclick = () => {
  videoEl.play();
};

video.pauseEl.onclick = () => {
  videoEl.pause();
};

video.VplusEl.onclick = () => {
  if (videoEl.volume !== 1) {
    videoEl.volume += 0.1; 
  }
};

video.VminusEl.onclick = () => {
  if (videoEl.volume !== 0) {
    videoEl.volume -= 0.1; 
  }
};



