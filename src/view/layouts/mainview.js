function mainview() {
  const renderMainview = `
  <div class="main-view col l-10 m-12 c-12">
  <div class="main-view__container">
    <header class="main-view__header col c-12">
      <div class="main-view__header-search">
        <svg
          class="main-view__header__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 14"
          height="21"
          width="21">
          <g>
            <rect
              x="0.5"
              y="0.5"
              width="5"
              height="5"
              rx="1"
              fill="none"
              stroke="#9b9b9b"
              stroke-linecap="round"
              stroke-linejoin="round"></rect>
            <rect
              x="8.5"
              y="0.5"
              width="5"
              height="5"
              rx="1"
              fill="none"
              stroke="#9b9b9b"
              stroke-linecap="round"
              stroke-linejoin="round"></rect>
            <rect
              x="0.5"
              y="8.5"
              width="5"
              height="5"
              rx="1"
              fill="none"
              stroke="#9b9b9b"
              stroke-linecap="round"
              stroke-linejoin="round"></rect>
            <rect
              x="8.5"
              y="8.5"
              width="5"
              height="5"
              rx="1"
              fill="none"
              stroke="#9b9b9b"
              stroke-linecap="round"
              stroke-linejoin="round"></rect>
          </g>
        </svg>
        <div class="search__form">
          <form method="GET">
            <input
              type="text"
              class="search__input"
              placeholder="Search" />
            <div class="search__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
                height="21"
                width="21">
                <g>
                  <circle
                    class="search__icon--active"
                    cx="5.92"
                    cy="5.92"
                    r="5.42"
                    fill="none"
                    stroke="#9b9b9b"
                    stroke__linecap="round"
                    stroke-linejoin="round"></circle>
                  <line
                    x1="13.5"
                    y1="13.5"
                    x2="9.75"
                    y2="9.75"
                    fill="none"
                    stroke="#9b9b9b"
                    stroke-linecap="round"
                    stroke-linejoin="round"></line>
                </g>
              </svg>
            </div>
          </form>
        </div>
      </div>
      <div class="main-view__header-user">
        <div class="user__account">
          <img
            src="./src/public/img/Minh Hoang.jpg"
            alt=""
            class="user__img" />
          <span class="user__name">vmhoafng</span>

          <svg
            class="user__more-option"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
            height="18"
            width="18">
            <g>
              <polyline
                points="4 8 7 5 10 8"
                fill="none"
                stroke="#ffafcc"
                stroke-linecap="round"
                stroke-linejoin="round"></polyline>
              <circle
                cx="7"
                cy="7"
                r="6.5"
                fill="none"
                stroke="#ffafcc"
                stroke-linecap="round"
                stroke-linejoin="round"></circle>
            </g>
          </svg>
          <div class="user__menu">
            <a href="#" class="user__menu-item user__menu-item--account"
              ><span>Tài Khoản</span></a
            >
            <a href="#" class="user__menu-item user__menu-item-profile"
              ><span>Hồ sơ</span></a
            >
            <a href="#" class="user__menu-item user__menu-item--log-out"
              ><span>Đăng xuất</span></a
            >
          </div>
        </div>
        <div class="user__interaction">
          <div class="user__notify">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
              height="21"
              width="21">
              <g>
                <path
                  d="M7,.5a4.29,4.29,0,0,1,4.29,4.29c0,4.77,1.74,5.71,2.21,5.71H.5c.48,0,2.21-.95,2.21-5.71A4.29,4.29,0,0,1,7,.5Z"
                  fill="none"
                  stroke="#191919"
                  stroke-linecap="round"
                  stroke-linejoin="round"></path>
                <path
                  d="M5.5,12.33a1.55,1.55,0,0,0,3,0"
                  fill="none"
                  stroke="#191919"
                  stroke-linecap="round"
                  stroke-linejoin="round"></path>
              </g>
            </svg>
          </div>
          <div class="user__setting-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
              height="21"
              width="21">
              <path
                d="M5.23,2.25l.43-1.11A1,1,0,0,1,6.59.5h.82a1,1,0,0,1,.93.64l.43,1.11,1.46.84,1.18-.18a1,1,0,0,1,1,.49l.4.7a1,1,0,0,1-.08,1.13L12,6.16V7.84l.75.93a1,1,0,0,1,.08,1.13l-.4.7a1,1,0,0,1-1,.49l-1.18-.18-1.46.84-.43,1.11a1,1,0,0,1-.93.64H6.59a1,1,0,0,1-.93-.64l-.43-1.11-1.46-.84-1.18.18a1,1,0,0,1-1-.49l-.4-.7a1,1,0,0,1,.08-1.13L2,7.84V6.16l-.75-.93A1,1,0,0,1,1.17,4.1l.4-.7a1,1,0,0,1,1-.49l1.18.18ZM5,7A2,2,0,1,0,7,5,2,2,0,0,0,5,7Z"
                fill="none"
                stroke="#191919"
                stroke-linecap="round"
                stroke-linejoin="round"></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="line__container line__container--left">
        <span class="main-view__line main-view__line--left"></span>
      </div>
      <div class="line__container line__container--right">
        <span class="main-view__line main-view__line--right"></span>
      </div>
    </header>
    <div class="main-view__content">
      <div class="content-artist">
        <div class="content-artist__navbar">
          <div class="content-artist__section">
            <a href="#" class="content-artist__title">Top Songs</a>
            <span class="content-artist__description">- top 50</span>
          </div>
          <div class="content-artist__controller">
            <button
              title="previous"
              class="content-artist__controller-btn content-artist__controller-btn--prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-0.75 -0.75 15.5 15.5"
                height="12"
                width="12"
                stroke-width="2.5">
                <path
                  d="M10.15.5,4,6.65a.48.48,0,0,0,0,.7l6.15,6.15"
                  fill="none"
                  stroke="#191919"
                  stroke-linecap="round"
                  stroke-linejoin="round"></path>
              </svg>
            </button>
            <button
              title="next"
              class="content-artist__controller-btn content-artist__controller-btn--next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-0.75 -0.75 15.5 15.5"
                height="12"
                width="12"
                stroke-width="2.5">
                <path
                  d="M3.85.5,10,6.65a.48.48,0,0,1,0,.7L3.85,13.5"
                  fill="none"
                  stroke="#191919"
                  stroke-linecap="round"
                  stroke-linejoin="round"></path>
              </svg>
            </button>
          </div>
        </div>
        <div style="overflow: hidden" class="list-wrap">
          <div class="content-artist__list"></div>
        </div>
      </div>
      <div class="content-playing">
        <div class="row">
          <div class="col l-5 m-12 c-12">
            <div class="content-playing__now-playing">
              <span class="now-playing__title">
                <span>Now Playing</span>
                <div class="volume__container">
                  <div class="volume__icon">
                    <svg
                      class="volume__icon--normal"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 14"
                      height="21"
                      width="21">
                      <g>
                        <path
                          d="M3,5H1.5a1,1,0,0,0-1,1V8a1,1,0,0,0,1,1H3Z"
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"></path>
                        <path
                          d="M3,9l3.91,2.81a1,1,0,0,0,1,.08A1,1,0,0,0,8.5,11V3A1,1,0,0,0,8,2.11a1,1,0,0,0-1,.08L3,5"
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"></path>
                        <path
                          d="M12.5,4a4.38,4.38,0,0,1,1,3,6.92,6.92,0,0,1-1,3.5"
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"></path>
                        <path
                          d="M10.5,5.5A2.19,2.19,0,0,1,11,7a2.19,2.19,0,0,1-.5,1.5"
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"></path>
                      </g>
                    </svg>
                    <svg
                      class="volume__icon--mute"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 14"
                      height="21"
                      width="21">
                      <g>
                        <line
                          x1="0.5"
                          y1="13.5"
                          x2="13.5"
                          y2="0.5"
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"></line>
                        <path
                          d="M4.5,5H3A1,1,0,0,0,2,6V8A1,1,0,0,0,3,9H4.5Z"
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"></path>
                        <path
                          d="M10,4V3a1,1,0,0,0-.55-.89,1,1,0,0,0-1,.08L4.5,5"
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"></path>
                        <path
                          d="M6.67,10.56l1.74,1.25a1,1,0,0,0,1,.08A1,1,0,0,0,10,11V7"
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"></path>
                        <line
                          x1="4.5"
                          y1="9"
                          x2="4.79"
                          y2="9.21"
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"></line>
                      </g>
                    </svg>
                  </div>
                  <div class="volume__control">
                    <span class="volume__progress">
                      <div class="point volume__point"></div>
                    </span>
                  </div>
                </div>
              </span>
              <span class="now-playing__next-song">
                <span class="next-song__description">next -</span>
                <span class="next-song__song-name"></span>
              </span>
              <div class="now-playing__current-playing">
                <a
                  href="#"
                  class="current-playing__link">
                  <img src="" alt="" class="current-playing__img" />
                  <img src="" alt="" class="current-playing__img--blur" />
                </a>
                <div class="current-playing__song-name"></div>
                <div class="current-playing__artist-name"></div>
              </div>
              <div class="now-playing__player-control">
                <div class="player-control__progress">
                  <div class="progress__slider-bar">
                    <div class="progress__current"></div>
                    <div class="point progress__point"></div>
                  </div>
                  <div class="progress__timer">
                    <span class="timer__current">0:00</span>
                    <span class="timer__toggle">
                      <span class="timer__duration">0:00</span>
                      <span class="timer__countdown">0:00</span>
                    </span>
                  </div>
                </div>
                <div class="player-control__action">
                  <button
                    title="shuffle"
                    class="action__btn action__btn--random">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 14"
                      height="18"
                      width="18">
                      <g>
                        <line
                          class="action__btn-color"
                          x1="0.5"
                          y1="13.5"
                          x2="13.5"
                          y2="0.5"
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"></line>
                        <polyline
                          class="action__btn-color"
                          points="9.5 0.5 13.5 0.5 13.5 4.5"
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"></polyline>
                        <line
                          class="action__btn-color"
                          x1="9"
                          y1="9"
                          x2="13.5"
                          y2="13.5"
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"></line>
                        <polyline
                          class="action__btn-color"
                          points="9.5 13.5 13.5 13.5 13.5 9.5"
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"></polyline>
                        <line
                          class="action__btn-color"
                          x1="5"
                          y1="5"
                          x2="0.5"
                          y2="0.5"
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"></line>
                      </g>
                    </svg>
                  </button>
                  <button
                    title="previos"
                    class="action__btn action__btn--prev">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 14"
                      height="18"
                      width="18">
                      <g>
                        <line
                          class="action__btn-color"
                          x1="0.5"
                          y1="0.5"
                          x2="0.5"
                          y2="13.5"
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"></line>
                        <path
                          class="action__btn-color"
                          d="M13.5,11.66a1,1,0,0,1-.52.88,1,1,0,0,1-1,0L4.79,7.84a1,1,0,0,1,0-1.68L12,1.5a1,1,0,0,1,1,0,1,1,0,0,1,.52.88Z"
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"></path>
                      </g>
                    </svg>
                  </button>
                  <div class="btn-toggle-play">
                    <button
                      title="pause"
                      class="action__btn action__btn--pause">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 14 14"
                        height="18"
                        width="18">
                        <g>
                          <line
                            x1="4"
                            y1="0.52"
                            x2="4"
                            y2="13.52"
                            fill="none"
                            stroke="#000000"
                            stroke-linecap="round"
                            stroke-linejoin="round"></line>
                          <line
                            x1="10"
                            y1="0.52"
                            x2="10"
                            y2="13.52"
                            fill="none"
                            stroke="#000000"
                            stroke-linecap="round"
                            stroke-linejoin="round"></line>
                        </g>
                      </svg>
                    </button>
                    <button
                      title="play"
                      class="action__btn action__btn--play">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 14 14"
                        height="18"
                        width="18">
                        <path
                          d="M1.5,12.35a1.14,1.14,0,0,0,.63,1,1.24,1.24,0,0,0,1.22,0L12,8A1.11,1.11,0,0,0,12,6L3.35.69a1.24,1.24,0,0,0-1.22,0,1.14,1.14,0,0,0-.63,1Z"
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"></path>
                      </svg>
                    </button>
                  </div>
                  <button
                    title="next"
                    class="action__btn action__btn--next">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 14"
                      height="18"
                      width="18">
                      <g>
                        <line
                          class="action__btn-color"
                          x1="13.5"
                          y1="0.5"
                          x2="13.5"
                          y2="13.5"
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"></line>
                        <path
                          class="action__btn-color"
                          d="M.5,11.66a1,1,0,0,0,.52.88,1,1,0,0,0,1,0L9.21,7.84a1,1,0,0,0,0-1.68L2,1.5a1,1,0,0,0-1,0,1,1,0,0,0-.52.88Z"
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"></path>
                      </g>
                    </svg>
                  </button>
                  <button
                    title="loop"
                    class="action__btn action__btn--loop">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 14"
                      height="18"
                      width="18">
                      <g>
                        <polyline
                          class="action__btn-color"
                          points="9 0.5 11.5 3 9 5.5"
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"></polyline>
                        <path
                          class="action__btn-color"
                          d="M.5,6V4a1,1,0,0,1,1-1h10"
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"></path>
                        <polyline
                          class="action__btn-color"
                          points="5 13.5 2.5 11 5 8.5"
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"></polyline>
                        <path
                          class="action__btn-color"
                          d="M13.5,8v2a1,1,0,0,1-1,1H2.5"
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"></path>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
              <audio src=""></audio>
            </div>
          </div>
          <div class="col l-7 m-12 c-12">
            <div class="content__playlist">
              <span class="playlist__title">Playlist</span>
              <span class="playlist__songs-num"
                ><span class="quantity">10</span> song on this list</span
              >
              <div class="playlist__list"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
  return renderMainview;
}
export default mainview;
