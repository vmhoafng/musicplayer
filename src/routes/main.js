"use strict";
import root from "../view/root.js";
import songs from "../public/songs.js";
import artists from "../public/artists.js";
import renderArtists from "./renderArtists.js";
root();
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const navbarItems = $$(".navbar-item--link");
const prevartistBtn = $(".content-artist__controller-btn--prev");
const nextartistBtn = $(".content-artist__controller-btn--next");

//Function navbar
navbarItems.forEach((item) => {
  item.onclick = function () {
    $(".navbar-item--link.active").classList.remove("active");
    item.classList.add("active");
  };
});
//Function active user menu
const userAccount = $(".user__account");
userAccount.onclick = function () {
  this.classList.toggle("active");
};
//function get menu item
const menuItems = $$(".user__menu-item");
menuItems.forEach((item) => {
  item.onclick = () => {
    console.log(item);
  };
});
//App Running
const prevSongBtn = $(".action__btn--prev");
const nextSongBtn = $(".action__btn--next");
const playSongBtn = $(".btn-toggle-play");
const playlist = $(".playlist__list");
const artistList = $(".content-artist__list");
const player = $(".content-playing__now-playing");
const randomSongBtn = $(".action__btn--random");
const loopSongBtn = $(".action__btn--loop");
const songImg = $(".current-playing__img");
const songImgBlur = $(".current-playing__img--blur");
const songName = $(".current-playing__song-name");
const nextSongName = $(".next-song__song-name");
const audio = $("audio");
const volumeControl = $(".volume__control");
const volumeIcon = $(".volume__icon");
const volumeProgress = $(".volume__progress");
const progress = $(".progress__slider-bar");
const progressCurrent = $(".progress__current");
const progressPoint = $(".progress__point");
const durationTime = $(".timer__duration");
const currentTime = $(".timer__current");
const countdownTime = $(".timer__countdown");
const toggleTimerBtn = $(".timer__toggle");
const PLAYER_STORAGE_KEY = "vmhoafng";
const app = {
  songIndex: 0,
  artistIndex: 0,
  skipTime: 5,
  playing: false,
  looping: false,
  muting: false,
  randoming: false,
  liked: [],
  readyToSeek: false,
  readyToVoluming: false,
  config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY) || "{}"),
  setConfig(key, value) {
    this.config[key] = value;
    localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));
  },
  render() {
    let songNum = 1;
    const playlistRender = songs.map((song, index) => {
      let liked = this.likedSong(index);
      return `<div class="playlist__item ${
        index === this.songIndex ? "active" : ""
      }"data-index="${index}">
      <div class="playlist__song">
      <div class="playlist__ordinal">${songNum++}</div>
      <div class="playlist__wave">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <img class="playlist__img" src="${song.image}" />
      <div class="playlist__song-name"><span>${song.name}</span></div>
    </div>
    <a href="#" class="playlist__artist-name"><span>${song.singer}</span></a>
    <button
      title="like-btn"
      class="playlist__song-like ${liked}"
      data-index="${index}">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        height="18"
        width="18">
        <path
          class="playlist__song-icon"
          d="M7,12.45l-5.52-5c-3-3,1.41-8.76,5.52-4.1,4.11-4.66,8.5,1.12,5.52,4.1Z"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"></path>
      </svg>
    </button>
    </div>`;
    });
    playlist.innerHTML = playlistRender.join("");
    $(".quantity").innerHTML = songs.length;

    artistList.innerHTML = renderArtists().join("");
  },
  definedProperties() {
    Object.defineProperty(this, "currentSong", {
      get() {
        return songs[this.songIndex];
      },
    });
  },
  handleEvent() {
    const _this = this;
    nextartistBtn.onclick = () => {
      _this.nextArtist();
    };
    prevartistBtn.onclick = () => {
      _this.prevArtist();
    };
    //Play Pause
    playSongBtn.onclick = () => {
      if (_this.playing) {
        audio.pause();
      } else {
        audio.play();
      }
    };
    audio.onplay = () => {
      _this.playing = true;
      player.classList.add("active");
    };
    audio.onpause = () => {
      _this.playing = false;
      player.classList.remove("active");
    };
    //mute control
    volumeIcon.onclick = () => {
      _this.muting = !_this.muting;
      audio.muted = _this.muting;
      volumeIcon.classList.toggle("muting");
      if (_this.muting) {
        volumeProgress.style.width = 0;
      } else {
        volumeProgress.style.width = `${audio.volume * 100}%`;
      }
      if (audio.volume == 0) {
        audio.volume = 0.8;
        volumeProgress.style.width = `${audio.volume * 100}%`;
      }
    };
    //progress control
    const progressLeft = progress.getBoundingClientRect().left;
    const progressWidth = progress.clientWidth;
    const progressMin = progressLeft;
    const progressMax = progressLeft + progressWidth;
    const volumeLeft = volumeControl.getBoundingClientRect().left;
    const volumeWidth = volumeControl.clientWidth;
    const volumeMin = volumeLeft;
    const volumeMax = volumeLeft + volumeWidth;
    progress.onmousedown = () => {
      _this.readyToSeek = true;
    };
    volumeControl.onmousedown = () => {
      _this.muting = false;
      volumeIcon.classList.remove("muting");
      _this.readyToVoluming = true;
    };
    document.onmouseup = (e) => {
      let clientX = e.clientX;
      let volumePercent = this.progressPercent(
        (clientX - volumeLeft) / volumeWidth
      );
      let progressPercent = this.progressPercent(
        (clientX - progressLeft) / progressWidth
      );

      // VOLUME
      if (
        _this.readyToVoluming &&
        clientX >= volumeMin &&
        clientX <= volumeMax
      ) {
        audio.muted = _this.muting;
        audio.volume = volumePercent / 100;
        volumeProgress.style.width = `${volumePercent}%`;
      }
      _this.readyToVoluming = false;
      // SEEK
      if (_this.readyToSeek && clientX < progressMin) {
        audio.currentTime = 0;
        progressPoint.style.transform = null;
      } else if (_this.readyToSeek && clientX > progressMax) {
        audio.currentTime = audio.duration;
        progressPoint.style.transform = null;
      }
      if (
        _this.readyToSeek &&
        clientX >= progressMin &&
        clientX <= progressMax
      ) {
        Object.assign(progressPoint.style, {
          left: `calc(${progressPercent}% - .5rem)`,
          transform: null,
        });
        audio.currentTime = (progressPercent / 100) * audio.duration;
      }
      _this.readyToSeek = false;
    };
    document.onmousemove = (e) => {
      let clientX = e.clientX;
      let volumePercent = this.progressPercent(
        (clientX - volumeLeft) / volumeWidth
      );
      let progressPercent = this.progressPercent(
        (clientX - progressLeft) / progressWidth
      );

      // VOLUME
      if (_this.readyToVoluming && clientX < volumeMin) {
        audio.volume = 0;
      } else if (_this.readyToVoluming && clientX > volumeMax) {
        audio.volume = 1;
        volumeProgress.style.width = 100 + "%";
      }
      if (
        _this.readyToVoluming &&
        clientX >= volumeMin &&
        clientX <= volumeMax
      ) {
        _this.muting = false;
        volumeIcon.classList.remove("muting");
        volumeProgress.style.width = `${volumePercent}%`;
        audio.volume = volumePercent / 100;
      }
      if (audio.volume == 0) {
        _this.muting = true;
        volumeIcon.classList.add("muting");
        volumeProgress.style.width = 0;
      }
      // SEEK
      let currentSecOnChange = Math.floor(
        ((progressPercent * audio.duration) / 100) % 60
      );
      let currentMinOnChange = Math.floor(
        (progressPercent * audio.duration) / 100 / 60
      );
      if (_this.readyToSeek && clientX < progressMin) {
        progressPercent = 0;
      } else if (_this.readyToSeek && clientX > progressMax) {
        progressPercent = 100;
        currentMinOnChange = Math.floor(audio.duration / 60);
        currentSecOnChange = Math.floor(audio.duration % 60);
        currentTime.innerHTML = `${currentMinOnChange}:${
          currentSecOnChange < 10 ? 0 : ""
        }${currentSecOnChange}`;
      }
      if (
        _this.readyToSeek &&
        clientX >= progressMin &&
        clientX <= progressMax
      ) {
        Object.assign(progressPoint.style, {
          left: `calc(${progressPercent}% - .5rem)`,
          transform: "scale(1)",
        });
        currentTime.innerHTML = `${currentMinOnChange}:${
          currentSecOnChange < 10 ? 0 : ""
        }${currentSecOnChange}`;
      }
    };

    toggleTimerBtn.onclick = () => {
      this.toggleClass(toggleTimerBtn, "countdown");
    };
    //controller
    nextSongBtn.onclick = () => {
      if (this.randoming) {
        _this.randomSong();
      } else {
        _this.nextSong();
      }
      audio.play();
      _this.render();
      _this.scrollInToView();
    };
    prevSongBtn.onclick = () => {
      if (this.randoming) {
        _this.randomSong();
      } else {
        _this.prevSong();
      }
      audio.play();
      _this.render();
      _this.scrollInToView();
    };
    loopSongBtn.onclick = () => {
      _this.looping = !_this.looping;
      loopSongBtn.classList.toggle("active", _this.looping);
      _this.setConfig("looping", _this.looping);
    };
    randomSongBtn.onclick = () => {
      _this.randoming = !_this.randoming;
      randomSongBtn.classList.toggle("active", _this.randoming);
      _this.setConfig("randoming", _this.randoming);
      if (_this.randoming) {
        $(".now-playing__next-song").style.scale = "0";
      } else {
        $(".now-playing__next-song").style.scale = "1";
      }
    };
    audio.onended = () => {
      if (_this.looping) {
        audio.play();
      }
      nextSongBtn.click();
    };
    playlist.onclick = (e) => {
      const songNode = e.target.closest(".playlist__item:not(.active)");
      const likeNote = e.target.closest(".playlist__song-like");
      if (songNode && e.target.closest(".playlist__song")) {
        _this.songIndex = Number(songNode.dataset.index);
        _this.loadCurrentSong();
        _this.render();
        _this.scrollInToView();
        audio.play();
      }
      if (likeNote) {
        likeNote.classList.toggle("liked");
        if (!_this.liked.includes(Number(likeNote.dataset.index))) {
          _this.liked.push(Number(likeNote.dataset.index));
        } else {
          for (let index = 0; index < _this.liked.length; ++index) {
            if (index == _this.liked.indexOf(Number(likeNote.dataset.index))) {
              _this.liked.splice(index, 1);
            }
          }
        }
        _this.setConfig("liked", _this.liked);
      }
    };
  },
  audioRuntimes() {
    audio.ontimeupdate = () => {
      const progressPercent = this.progressPercent(
        audio.currentTime / audio.duration
      );
      if (audio.duration && !this.readyToSeek) {
        progress.value = progressPercent;
        progressPoint.style.left = `calc(${progressPercent}% - .5rem)`;
      }
      progressCurrent.style.width = progressPercent + "%";
      //Duration Time
      let durationSec = Math.floor(audio.duration % 60);
      let durationMin = Math.floor(audio.duration / 60);
      if (audio.duration) {
        this.songTimer(durationSec, durationMin, durationTime);
      }
      // Current Time
      let currentSec = Math.floor(audio.currentTime % 60);
      let currentMin = Math.floor(audio.currentTime / 60);
      if (!this.readyToSeek) {
        this.songTimer(currentSec, currentMin, currentTime);
      }
      //Countdown Time
      let countdowSec = durationSec - currentSec;
      let countdowMin = durationMin - currentMin;
      if (audio.duration) {
        if (countdowSec < 0) {
          countdowSec = 60 + countdowSec;
          countdowMin--;
        }
        this.songTimer(countdowSec, countdowMin, countdownTime, true);
      }
    };
  },
  handleKeyboardEvent() {
    document.onkeydown = (event) => {
      let key = event.code;
      if (key === "Space") {
        event.preventDefault();
        audio.paused ? audio.play() : audio.pause();
      } else if (key === "Tab") {
        event.preventDefault();
      } else if (event.ctrlKey && key === "ArrowRight") {
        nextSongBtn.click();
      } else if (event.ctrlKey && key === "ArrowLeft") {
        prevSongBtn.click();
      } else if (event.ctrlKey && key === "ArrowUp" && audio.volume < 1) {
        audio.volume += 0.01;
        audio.volume = Number(audio.volume.toFixed(2));
        volumeProgress.style.width = `${audio.volume * 100}%`;
      } else if (event.ctrlKey && key === "ArrowDown" && audio.volume > 0) {
        audio.volume -= 0.01;
        audio.volume = Number(audio.volume.toFixed(2));
        volumeProgress.style.width = `${audio.volume * 100}%`;
      } else if (event.shiftKey && key === "ArrowRight") {
        audio.currentTime += this.skipTime;
      } else if (event.shiftKey && key === "ArrowLeft") {
        audio.currentTime -= this.skipTime;
      }
    };
  },
  nextSong() {
    this.songIndex++;
    if (this.songIndex > songs.length - 1) {
      this.songIndex = 0;
    }
    this.loadCurrentSong();
  },
  prevSong() {
    this.songIndex--;
    if (this.songIndex < 0) {
      this.songIndex = songs.length - 1;
    }
    this.loadCurrentSong();
  },
  randomSong() {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * songs.length);
    } while (newIndex == this.songIndex);
    this.songIndex = newIndex;
    this.loadCurrentSong();
  },
  scrollInToView() {
    $(".playlist__item.active").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  },
  nextArtist() {
    let nextSkip = 18;
    let artistsCol = 6;
    this.artistIndex++;
    if (window.innerWidth >= 840 && window.innerWidth < 1440) {
      artistsCol = 5;
    } else if (window.innerWidth < 840) {
      artistsCol = 4;
    }
    if (this.artistIndex > artists.length / artistsCol - 1) {
      this.artistIndex = Math.ceil(artists.length / artistsCol - 1);
    }
    artistList.style.transform = `translateY(-${
      nextSkip * this.artistIndex
    }rem)`;
  },
  prevArtist() {
    let nextSkip = 18;
    this.artistIndex--;
    if (this.artistIndex <= 0) {
      this.artistIndex = 0;
    }
    artistList.style.transform = `translateY(-${
      nextSkip * this.artistIndex
    }rem)`;
  },
  songTimer(sec, min, time, countdown) {
    let result;
    if (sec < 10) {
      sec = `0${sec}`;
    }
    if (countdown) {
      result = time.innerHTML = `-${min}:${sec}`;
    } else {
      time.innerHTML = `${min}:${sec}`;
    }
    return result;
  },
  slidingText(textOf, maxWidth, maxTextLength) {
    textOf.style.animation = null;
    if (
      textOf.innerText.length >= maxTextLength &&
      window.innerWidth <= maxWidth
    ) {
      textOf.style.animation = `linear 15s infinite runningText`;
    } else {
      textOf.style.animation = null;
    }
    window.onresize = () => {
      return this.slidingText(textOf, maxWidth, maxTextLength);
    };
  },
  toggleClass(item, add) {
    return item.classList.toggle(add);
  },
  progressPercent(agr) {
    return Math.floor(agr * 100);
  },
  likedSong(index) {
    let likeConfig = this.config.liked;
    let liked = "";
    if (likeConfig) {
      likeConfig.forEach((e) => {
        if (e == index) {
          liked = "liked";
        }
      });
    }
    return liked;
  },
  loadCurrentSong() {
    songName.innerHTML = this.currentSong.name;
    $(".current-playing__artist-name").innerHTML = this.currentSong.singer;
    songImg.src = this.currentSong.image;
    audio.src = this.currentSong.song;
    $(".current-playing__link").title = this.currentSong.name;
    if (this.songIndex > songs.length - 2) {
      nextSongName.innerHTML = songs[0].name;
    } else {
      nextSongName.innerHTML = songs[this.songIndex + 1].name;
    }
    songImgBlur.src = this.currentSong.image;
    this.slidingText(songName, 480, 35);
    this.slidingText(songName, 420, 24);
  },
  loadConfig() {
    if (this.config.randoming) {
      this.randoming = this.config.randoming;
    }
    if (this.config.looping) {
      this.looping = this.config.looping;
    }
    if (this.config.liked) {
      this.liked.push(...this.config.liked);
    }
  },
  start() {
    this.audioRuntimes();
    this.loadConfig();
    this.render();
    this.handleEvent();
    this.handleKeyboardEvent();
    this.definedProperties();
    this.loadCurrentSong();
    loopSongBtn.classList.toggle("active", this.looping);
    randomSongBtn.classList.toggle("active", this.randoming);
  },
};
app.start();
