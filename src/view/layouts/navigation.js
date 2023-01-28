function navigation() {
  const navRender = `
<nav class="navbar col l-2 m-8 c-8">
  <div class="navbar-list">
    <ul class="navbar-item">
      <li>
        <a class="navbar-item--link active" href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
            height="21"
            width="21">
            <path
              class="navbar-item--icon"
              d="M13.5,6.94a1,1,0,0,0-.32-.74L7,.5.82,6.2a1,1,0,0,0-.32.74V12.5a1,1,0,0,0,1,1h11a1,1,0,0,0,1-1Z"
              fill="none"
              stroke="#9b9b9b"
              stroke-linecap="round"
              stroke-linejoin="round"></path>
          </svg>
          <span>Home</span>
        </a>
      </li>
      <li>
        <a class="navbar-item--link" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
            height="21"
            width="21">
            <g>
              <rect
                class="navbar-item--icon"
                x="8.5"
                y="6.5"
                width="5"
                height="7"
                rx="0.5"
                fill="none"
                stroke="#9b9b9b"
                stroke-linecap="round"
                stroke-linejoin="round"></rect>
              <rect
                class="navbar-item--icon"
                x="8.5"
                y="0.5"
                width="5"
                height="3.01"
                rx="0.5"
                fill="none"
                stroke="#9b9b9b"
                stroke-linecap="round"
                stroke-linejoin="round"></rect>
              <rect
                class="navbar-item--icon"
                x="0.5"
                y="0.5"
                width="5"
                height="7"
                rx="0.5"
                fill="none"
                stroke="#9b9b9b"
                stroke-linecap="round"
                stroke-linejoin="round"></rect>
              <rect
                class="navbar-item--icon"
                x="0.5"
                y="10.49"
                width="5"
                height="3.01"
                rx="0.5"
                fill="none"
                stroke="#9b9b9b"
                stroke-linecap="round"
                stroke-linejoin="round"></rect>
            </g>
          </svg>
          <span>Browse</span>
        </a>
      </li>
      <li>
        <a class="navbar-item--link" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
            height="21"
            width="21">
            <g>
              <rect
                class="navbar-item--icon"
                x="0.55"
                y="0.5"
                width="3.5"
                height="13"
                rx="0.5"
                fill="none"
                stroke="#9b9b9b"
                stroke-linecap="round"
                stroke-linejoin="round"></rect>
              <rect
                class="navbar-item--icon"
                x="4.05"
                y="2.5"
                width="3.5"
                height="11"
                rx="0.5"
                fill="none"
                stroke="#9b9b9b"
                stroke-linecap="round"
                stroke-linejoin="round"></rect>
              <rect
                class="navbar-item--icon"
                x="9.26"
                y="2.3"
                width="3"
                height="11"
                rx="0.5"
                transform="translate(-1.57 2.85) rotate(-14.05)"
                fill="none"
                stroke="#9b9b9b"
                stroke-linecap="round"
                stroke-linejoin="round"></rect>
              <line
                class="navbar-item--icon"
                x1="0.55"
                y1="10"
                x2="4.05"
                y2="10"
                fill="none"
                stroke="#9b9b9b"
                stroke-linecap="round"
                stroke-linejoin="round"></line>
              <line
                class="navbar-item--icon"
                x1="4.05"
                y1="9"
                x2="7.55"
                y2="9"
                fill="none"
                stroke="#9b9b9b"
                stroke-linecap="round"
                stroke-linejoin="round"></line>
              <line
                class="navbar-item--icon"
                x1="10.05"
                y1="11"
                x2="12.93"
                y2="10.28"
                fill="none"
                stroke="#9b9b9b"
                stroke-linecap="round"
                stroke-linejoin="round"></line>
            </g>
          </svg>
          <span>Library</span>
        </a>
      </li>
      <li>
        <a class="navbar-item--link" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
            height="21"
            width="21">
            <g>
              <circle
                class="navbar-item--icon"
                cx="7"
                cy="3.75"
                r="3.25"
                fill="none"
                stroke="#9b9b9b"
                stroke-linecap="round"
                stroke-linejoin="round"></circle>
              <path
                class="navbar-item--icon"
                d="M13.18,13.5a6.49,6.49,0,0,0-12.36,0Z"
                fill="none"
                stroke="#9b9b9b"
                stroke-linecap="round"
                stroke-linejoin="round"></path>
            </g>
          </svg>
          <span>Artist</span>
        </a>
      </li>
      <li>
        <a class="navbar-item--link" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
            height="21"
            width="21">
            <path
              class="navbar-item--icon"
              d="M12.82,3.75,10,5V3.5a1,1,0,0,0-1-1H1.5a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1H9a1,1,0,0,0,1-1V9l2.82,1.25a.5.5,0,0,0,.68-.47V4.22A.5.5,0,0,0,12.82,3.75Z"
              fill="none"
              stroke="#9b9b9b"
              stroke-linecap="round"
              stroke-linejoin="round"></path>
          </svg>
          <span>Videos</span>
        </a>
      </li>
    </ul>
    <ul class="navbar-item">
      <div class="navbar-item--subtile">
        <span>my music</span>
      </div>
      <li>
        <a class="navbar-item--link" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
            height="21"
            width="21">
            <g>
              <circle
                class="navbar-item--icon"
                cx="7"
                cy="8"
                r="5.5"
                fill="none"
                stroke="#9b9b9b"
                stroke-linecap="round"
                stroke-linejoin="round"></circle>
              <path
                class="navbar-item--icon"
                d="M.5,2.5A8.69,8.69,0,0,1,3,.5"
                fill="none"
                stroke="#9b9b9b"
                stroke-linecap="round"
                stroke-linejoin="round"></path>
              <path
                class="navbar-item--icon"
                d="M13.5,2.5A8.69,8.69,0,0,0,11,.5"
                fill="none"
                stroke="#9b9b9b"
                stroke-linecap="round"
                stroke-linejoin="round"></path>
              <polyline
                class="navbar-item--icon"
                points="7 5 7 8 9.5 8"
                fill="none"
                stroke="#9b9b9b"
                stroke-linecap="round"
                stroke-linejoin="round"></polyline>
            </g>
          </svg>
          <span>Recently Played</span>
        </a>
      </li>
      <li>
        <a class="navbar-item--link" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
            height="21"
            width="21">
            <g>
              <polyline
                class="navbar-item--icon"
                points="4 6.5 7 9.5 10 6.5"
                fill="none"
                stroke="#9b9b9b"
                stroke-linecap="round"
                stroke-linejoin="round"></polyline>
              <line
                class="navbar-item--icon"
                x1="7"
                y1="0.5"
                x2="7"
                y2="9.5"
                fill="none"
                stroke="#9b9b9b"
                stroke-linecap="round"
                stroke-linejoin="round"></line>
              <line
                class="navbar-item--icon"
                x1="3.5"
                y1="13.5"
                x2="10.5"
                y2="13.5"
                fill="none"
                stroke="#9b9b9b"
                stroke-linecap="round"
                stroke-linejoin="round"></line>
            </g>
          </svg>
          <span>Download</span>
        </a>
      </li>
    </ul>
    <ul class="navbar-item">
      <div class="navbar-item--subtile"><span>playlist</span></div>
      <li>
        <a class="navbar-item--link" href="#">
          <span>General playlist</span>
        </a>
      </li>
      <li>
        <a class="navbar-item--link" href="#">
          <span>Ease up Beats</span>
        </a>
      </li>
      <li>
        <a class="navbar-item--link" href="#">
          <span>Pop songs</span>
        </a>
      </li>
      <li>
        <a class="navbar-item--link" href="#">
          <span>Mood swings</span>
        </a>
      </li>
    </ul>
  </div>
  <div class="content"></div>
</nav>    
  `;
  return navRender;
}
export default navigation;
