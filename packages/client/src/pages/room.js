import React from 'react';

export function Room() {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --color-text: var(--color-linen);
            --color-link-text: var(--color-linen);
          }
          .modal {
            display: none;
          }
          .room-container {
            background: url('https://cdn.glitch.com/f69fa717-be61-48e8-9ad2-e8edd524fe90%2Fshark.jpeg?v=1621051349334')
              no-repeat center fixed;
            background-size: cover;
            overflow: hidden;
            display: grid;
            min-height: 100vh;
            max-height: 100vh;
            min-width: 100vw;
            max-width: 100vw;
            height: 100%;
            width: 100%;
            overflow: hidden;
            row-gap: 1rem;
            grid-template-columns: minmax(0, 1fr);
            grid-template-rows:
              4rem minmax(0, 1fr)
              4rem;
          }

          .video-container {
            padding: 1rem;
            align-items: end;
            justify-items: center;
            max-height: calc(100vh - 12rem);
            border-radius: 10px;
          }

          .video-container .group {
            display: grid;
            max-height: 100%;
            row-gap: 1rem;
            justify-items: center;
            grid-template-columns: minmax(0, 1fr);
            grid-template-rows: minmax(0, 2fr) minmax(0, 1fr);
          }

          .user-container {
            display: grid;
            max-width: 80vw;

            justify-content: start;
            padding: 0 0 2rem;
            align-items: start;
            grid-template-columns: repeat(3, minmax(25vw, 1fr));
            grid-auto-rows: minmax(auto, 25vh);
            column-gap: 0.5rem;
          }
          @media screen and (min-width: 480px) {
            .user-container {
              max-width: 65vw;
            }
          }

          @media screen and (min-width: 768px) {
            .user-container {
              max-width: 50vw;
              padding: 1rem;
              grid-template-columns: repeat(3, minmax(200px, 1fr));
            }
            .video-container {
              align-items: center;
            }
          }

          .info-container {
            display: grid;
            grid-template-columns: max-content max-content;
            grid-template-rows: minmax(0, 1fr);
            justify-content: space-between;
            padding: 0.5rem;
          }

          .info-section {
            display: grid;
            column-gap: 0.25rem;
            grid-auto-flow: column;
            padding: 0.25rem 1rem;
            align-items: center;
          }

          /* ================ Face cams ================== */

          #video-chat-room {
            justify-content: center;
          }

          .user {
            border-radius: 20px;
            overflow: hidden;
            max-height: 100%;
            position: relative;
          }

          .user-camera {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            position: relative;
            text-align: center;
            justify-content: center;
            border-radius: 24px;
            background-color: var(--color-jet);
            width: 200px;
            height: 120px;
            max-height: 100%;
            max-width: 100%;
            position: relative;

            box-shadow: 0 8px 6px -6px var(--color-jet);
          }

          .user-name {
            width: 100%;
            position: absolute;
            bottom: 0;
            padding: 0.5rem 1rem;
            color: var(--color-linen);
            background: linear-gradient(0, rgba(0, 0, 0, 0.45), transparent),
              linear-gradient(
                0,
                rgba(0, 0, 0, 0.75),
                rgba(0, 0, 0, 0.45),
                rgba(0, 0, 0, 0.15),
                transparent,
                transparent
              );
            z-index: 1;
          }

          .controls-container {
            align-items: center;
            display: grid;
            grid-template-rows: minmax(0, 1fr);
          }

          /* ================ Buttons ================== */

          .btn-group {
            display: flex;
            justify-content: center;
          }

          #btn-group2 {
            justify-content: flex-end;
          }

          .btn-group button {
            background-color: transparent;
            border: 0;
            margin: 0 0.25rem;
            cursor: pointer;
          }

          /* Clear floats (clearfix hack) */

          .btn-group:after {
            content: '';
            clear: both;
            display: table;
          }

          #hideCameraButton {
            opacity: 0.6;
          }

          #playpauseButtonIcon {
            height: 90%;
          }

          #muteButton {
            opacity: 0.6;
          }

          #backButton {
            opacity: 0.6;
          }

          #nextButton {
            opacity: 0.6;
          }

          #volumeDownButton {
            opacity: 0.6;
          }

          #volumeUpButton {
            opacity: 0.6;
          }

          .grow {
            transition: all 0.2s ease-in-out;
          }
          .grow:hover {
            transform: scale(1.08);
          }

          #hideCameraButton:hover {
            opacity: 90%;
            transition: opacity 0.2s ease-in;
          }

          #muteButton:hover {
            opacity: 90%;
            transition: opacity 0.2s ease-in;
          }

          #backButton:hover {
            opacity: 90%;
            transition: opacity 0.2s ease-in;
          }

          #nextButton:hover {
            opacity: 90%;
            transition: opacity 0.2s ease-in;
          }

          #volumeDownButton:hover {
            opacity: 90%;
            transition: opacity 0.2s ease-in;
          }

          #volumeUpButton:hover {
            opacity: 90%;
            transition: opacity 0.2s ease-in;
          }

          #playlistButton:hover {
            opacity: 90%;
            transition: opacity 0.2s ease-in;
          }

          #heartButton:hover {
            opacity: 90%;
            transition: opacity 0.2s ease-in;
          }

          /* ================ Footer ================== */

          footer {
            background-color: var(--color-jet); /* var(--color-midnight) */
            width: 100%;
            padding: 0.25rem 0.5rem;
          }

          #footer--content {
            display: grid;
            grid-template-columns: max-content minmax(0, 1fr) max-content;
            align-items: center;
          }

          .footer-bg {
            max-width: 1440px;
            width: 100%;
            margin: 0 auto;
          }

          .footer-left {
            padding: 0;
            display: inline-block;
            flex: 1;
          }

          .footer-middle {
            align-self: center;
          }

          .footer-right {
            padding: 0;
            display: inline-block;
            flex: 1;
          }

          .footer-right {
            position: fixed;
            bottom: 5rem;
            right: 1rem;
          }
          .footer-right button {
            opacity: 1;
            border-radius: 0.5rem;
            background-color: var(--color-opaque-white);
          }

          .footer-icons {
            margin-left: auto;
            font-size: 1.3rem;
            display: flex;
          }

          .social {
            margin: 10px;
            display: inline-block;
            height: 36px;
            width: 36px;
            opacity: 0.6;
            vertical-align: bottom;
            margin-top: 8px;
          }

          .social:hover {
            opacity: 100%;
            transition: opacity 0.2s ease-in;
          }

          #footer-name {
            font-size: 1.35rem;
            font-weight: var(--weight-title);
          }

          #leaveRoomButton {
            text-transform: uppercase;
            border: 2px solid var(--color-linen);
            color: var(--color-text);
            background-color: transparent;
          }

          /* ================= Karaoke TV Video ================= */

          #karaoke-video {
            display: block;
            max-width: 100%;
            width: auto;
            max-height: 100%;
            margin: 0 auto;
          }

          .karaoke-video-mask {
            display: flex;
            align-items: flex-end;
            border-radius: 10px;
          }

          video {
            width: 100%;
            border-radius: 10px;
          }

          .controls[data-state='hidden'] {
            display: none;
          }

          .controls[data-state='visible'] {
            display: block;
          }

          button[data-state='mute'] {
            /* font-size: 1.3rem; */
          }

          .jquery-modal.blocker {
            background-color: transparent;
          }

          /* ================================ Songs modal ======================== */
          .modal.modal__large {
            background-color: rgba(255, 255, 255, 0.75);
            padding: 1rem;
            max-width: 100%;
          }

          .modal-content {
            color: var(--color-slate);
            width: 100%;
            max-width: 75rem;
            display: grid;
            grid-template-rows: 1fr 5rem;
            row-gap: 1rem;
            grid-template-rows: 1fr max-content;
          }

          .modal.modal__large .close-modal {
            filter: invert(1);
            top: 5px;
            right: 5px;
          }

          .catalog-grid {
            display: grid;
            gap: 1rem;
            max-height: 60vh;
            padding: 1rem;
            overflow-y: auto;
            position: relative;
            width: 100%;
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          @media (min-width: 768px) {
            .footer-right {
              position: static;
            }
            .footer-right button {
              opacity: 0.6;
              background-color: transparent;
            }
            .catalog-grid {
              grid-template-columns: repeat(3, minmax(0, 1fr));
            }
          }

          @media (min-width: 1024px) {
            .catalog-grid {
              grid-template-columns: repeat(5, minmax(0, 1fr));
            }
          }

          .catalog-controls {
            display: grid;
            grid-auto-flow: column;
            column-gap: 1rem;
            align-items: center;
            justify-content: center;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            width: 100%;
          }

          .control-btn {
            border: 1px solid var(--color-old-laundry);
            border-radius: 2px;
            display: block;
            padding: 1rem 0.5rem;
            text-align: center;
            width: 100%;
          }

          @media (min-width: 28rem) {
          }

          @media (min-width: 42rem) {
            .catalog-controls {
              grid-template-columns: unset;
              justify-content: end;
            }
            .controls .button {
              padding: 0 4rem;
            }
          }

          #added-notice {
            display: none;
          }

          #added-notice[populated] {
            align-items: center;
            display: flex;
            font-size: 1.125rem;
            height: 100%;
            justify-content: center;
            left: 15%;
            padding: 1rem;
            position: absolute;
            top: 0;
            width: 70%;
          }

          @media (min-width: 768px) {
            #added-notice[populated] {
              left: calc(50% - 17rem);
              width: 34rem;
            }
          }

          .added-notice-contents {
            background: rgba(0, 0, 0, 0.85);
            border: 2px solid transparent;
            border-radius: 8px;
            color: var(--color-linen);
            cursor: pointer;
            padding: 2rem 3rem;
            text-align: center;
          }

          .added-notice-contents:active,
          .added-notice-contents:focus {
            border: 2px solid var(--color-linen);
          }

          #added-notice-song {
            color: var(--color-old-yellow);
          }

          /* Individual jukebox songs */

          .catalog-item {
            background: none;
            border: none;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            min-height: 10rem;
            text-align: left;
            position: relative;
            outline: 0;
          }

          .jukebox-selected {
            outline: 0;
            border-radius: 4px;
          }

          .catalog-item img {
            width: 100%;
            height: auto;
            border-radius: 24px;
            border: 4px solid transparent;
          }

          .jukebox-selected img {
            border: 4px solid var(--color-old-yellow);
          }

          .jukebox-selected:before {
            content: '';
            position: absolute;
            top: -15px;
            right: -10px;
            width: 44px;
            height: 44px;
            border-radius: 100%;
            background: var(--color-old-yellow)
              url(https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fcheck.svg?v=1595801420385)
              center no-repeat;
          }

          .title {
            font-weight: var(--weight-title);
            margin: 0.5rem 0 0.25rem;
          }

          .copyWrapper {
            display: flex;
            border: 3px solid var(--color-midnight);
            border-radius: 8px;
          }

          #giveFeedbackButton {
            cursor: pointer;
            display: block;
            margin: auto;
            width: 83%;
            margin-top: 25px;
          }

          #reportBugButton {
            cursor: pointer;
            display: block;
            margin: auto;
            width: 83%;
            margin-bottom: 20px;
          }

          #roomName {
            color: var(--color-midnight);
            font-weight: var(--weight-title);
          }

          /* Invite Model */

          #invite {
            top: 20px;
            right: 200px;
            position: absolute;
            font-weight: var(--weight-heavy);
          }

          #song {
            cursor: pointer;
            top: 20px;
            right: 40px;
            z-index: 2;
            position: absolute;
            font-weight: var(--weight-heavy);
          }

          #scene-logo {
            top: 32px;
            left: 50px;
            z-index: 2;
            position: absolute;
            font-family: var(--font-brand);
            font-size: 1.6em;
            font-weight: var(--weight-heavy);
            line-height: var(--line-height-text);
            text-decoration: none !important;
            justify-content: space-between;
            margin: auto;
            font-weight: var(--weight-heavy);
          }

          /* #scene-logo a {
  text-decoration: none;
  color: var(--color-linen);
} */

          #inviteModal {
            font-family: var(--font-brand);
            color: var(--color-slate);
            text-align: center;
          }

          .tooltip {
            position: relative;
            display: inline-block;
          }

          .tooltip .tooltiptext {
            visibility: hidden;
            width: 140px;
            background-color: var(--color-smoke);
            color: var(--color-linen);
            text-align: center;
            border-radius: 6px;
            padding: 5px;
            position: absolute;
            z-index: 1;
            bottom: 150%;
            left: 50%;
            margin-left: -75px;
            opacity: 0;
            transition: opacity 0.3s;
            font-size: var(--font-size-xs);
          }

          .tooltip .tooltiptext::after {
            content: '';
            position: absolute;
            top: 100%;
            left: 50%;
            margin-left: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: var(--color-smoke) transparent transparent transparent;
          }

          .tooltip:hover .tooltiptext {
            visibility: visible;
            opacity: 1;
          }

          #copy {
            padding-left: var(--page-padding);
            padding-right: var(--page-padding);
            font-size: var(--font-size-sm);
            margin-right: 0px;
            display: inline-block;
            border: 0px;
            border-radius: 0px 5px 5px 0px;
            border-left: 3px solid var(--color-midnight);
            outline: 0;
          }

          .shareButton {
            margin: auto;
            display: flex;
            justify-content: center;
            flex-direction: row;
            max-width: 400px;
          }

          .fb-share-button {
            margin-left: 11px;
          }

          #feedback {
            border-radius: 50%;
            height: auto;
            width: 2.25rem;
            background: var(--color-linen)
              url('https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Ffeedback.svg?v=1596918776029')
              no-repeat center center;
            background-size: 50%;
          }

          @media screen and (min-width: 768px) {
            #feedback {
              width: 3rem;
            }
          }
        `}
      </style>
      <div className="room-container">
        <div className="info-container">
          <div className="info-section">
            <a
              className="navbar-link navbar-link__home"
              href="/"
              target="_blank"
            >
              <h1 className="brand-logo">
                KARAOKE NITE
                <span className="brand-betatag">beta</span>
              </h1>
            </a>
          </div>
          <div className="info-section">
            <button className="button" onclick="inviteModal()">
              Invite <span className="hidden__xs">&nbsp;Friends</span>
            </button>
            <button
              className="button"
              id="feedback"
              onclick="feedbackModal()"
            ></button>
          </div>
        </div>
        <div className="video-container">
          <div className="group">
            <div className="karaoke-video-mask">
              <video id="karaoke-video" controls preload="metadata">
                <source
                  src="https://cdn.glitch.com/bf4db82b-cdcf-4019-a281-153f8e3d1e9f%2Fletsgetitonencoded.mp4?v=1588473010045"
                  type="video/mp4"
                />

                <a href="http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4">
                  Download MP4
                </a>
              </video>
            </div>
            <div className="user-container" id="video-chat-room">
              <div className="user">
                <video
                  className="user-camera"
                  id="user-video"
                  muted="muted"
                ></video>
                <div className="user-name">Username1</div>
              </div>

              <div className="user">
                <video className="user-camera" id="peer-video"></video>
                <div className="user-name">Username2</div>
              </div>

              <div className="user">
                <video className="user-camera" id="peer-video2"></video>
                <div className="user-name">Username3</div>
              </div>
            </div>
          </div>
        </div>
        <footer className="controls-container">
          <div className="footer-bg">
            <div id="footer--content">
              <div className="footer-left">
                <a href="javascript:history.back()">
                  <button
                    className="button button__small hidden__xs"
                    id="leaveRoomButton"
                  >
                    Exit
                  </button>
                </a>
              </div>

              <div className="footer-middle">
                <div className="btn-group" id="btn-group">
                  <button id="hideCameraButton">
                    <img src="https://cdn.glitch.com/f69fa717-be61-48e8-9ad2-e8edd524fe90%2Ficon_camera_white.svg?v=1614747337937" />
                  </button>

                  <button id="muteButton" type="button" data-state="mute">
                    <img
                      id="muteButtonIcon"
                      src="https://cdn.glitch.com/f69fa717-be61-48e8-9ad2-e8edd524fe90%2Ficon_mic_white.svg?v=1614747341515"
                    />
                  </button>

                  <button id="backButton" type="button" data-state="play">
                    <img
                      id="backButtonIcon"
                      src="https://cdn.glitch.com/f69fa717-be61-48e8-9ad2-e8edd524fe90%2Ficon_previous_white.svg?v=1614749830096"
                    />
                  </button>

                  <button
                    id="playpauseButton"
                    className="grow"
                    type="button"
                    data-state="play"
                  >
                    <img
                      id="playpauseButtonIcon"
                      src="https://cdn.glitch.com/f69fa717-be61-48e8-9ad2-e8edd524fe90%2FGroup%2021.svg?v=1618632508004"
                    />
                  </button>

                  <button id="nextButton" type="button" data-state="play">
                    <img
                      id="nextButtonIcon"
                      src="https://cdn.glitch.com/f69fa717-be61-48e8-9ad2-e8edd524fe90%2Ficon_next_white.svg?v=1614749830096"
                    />
                  </button>

                  <button
                    id="volumeDownButton"
                    type="button"
                    data-state="voldown"
                  >
                    <img
                      id="volumeDownIcon"
                      src="https://cdn.glitch.com/f69fa717-be61-48e8-9ad2-e8edd524fe90%2FVolume%20-%20Low.svg?v=1621062867508"
                    />
                  </button>

                  <button id="volumeUpButton" type="button" data-state="volup">
                    <img
                      id="volumeUpIcon"
                      src="https://cdn.glitch.com/f69fa717-be61-48e8-9ad2-e8edd524fe90%2Ficon_volume_white.svg?v=1614749830096"
                    />
                  </button>
                </div>

                <div
                  style={{ display: 'none' }}
                  id="video-controls"
                  className="controls"
                  data-state="hidden"
                ></div>
              </div>

              <div className="footer-right">
                <div className="btn-group" id="btn-group2">
                  <button
                    id="playlistButton"
                    type="button"
                    onclick="openModal()"
                  >
                    <img
                      id="playlistIcon"
                      src="https://cdn.glitch.com/f69fa717-be61-48e8-9ad2-e8edd524fe90%2FPlaylist.svg?v=1621070364610"
                    />
                  </button>

                  <button id="heartButton" type="button" data-state="heart">
                    <img
                      id="heartIcon"
                      src="https://cdn.glitch.com/f69fa717-be61-48e8-9ad2-e8edd524fe90%2FHeart.svg?v=1621070361140"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <div id="songModal" className="catalog modal modal__large">
          <div className="modal-content">
            <div className="catalog-grid" onscroll="dismissAddedNotice()">
              <button
                onclick="grabURL(event, 0)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Frolling-stones-some-girls.jpg?v=1591040877607"
                  alt="Beast of Burden"
                  width="600"
                  height="400"
                />

                <div className="title">Beast of Burden</div>
                <div className="artist">The Rolling Stones</div>
              </button>

              <button
                onclick="grabURL(event, 1)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Ffugees-the-score.png?v=1591040952706"
                  alt="Killing Me Softly"
                  width="600"
                  height="400"
                />
                <div className="title">Killing Me Softly</div>
                <div className="artist">Fugees</div>
              </button>

              <button
                onclick="grabURL(event, 2)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fcoheed-and-cambria-in-keeping-secrets.jpg?v=1591040969216"
                  alt="Blood Red Summer"
                  width="600"
                  height="400"
                />
                <div className="title">Blood Red Summer</div>
                <div className="artist">Coheed and Cambria</div>
              </button>

              <button
                onclick="grabURL(event, 3)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fwheatus-wheatus.jpg?v=1591114972728.jpg"
                  alt="Teenage Dirtbag"
                  width="600"
                  height="400"
                />

                <div className="title">Teenage Dirtbag</div>
                <div className="artist">Wheatus</div>
              </button>

              <button
                onclick="grabURL(event, 4)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Ftaylor-swift-red.png?v=1591115004639"
                  alt="Red"
                  width="600"
                  height="400"
                />

                <div className="title">Red</div>
                <div className="artist">Taylor Swift</div>
              </button>

              <button
                onclick="grabURL(event, 5)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fgorillaz-demon-days.jpg?v=1591115146848"
                  alt="Feel Good Inc."
                  width="600"
                  height="400"
                />
                <div className="title">Feel Good Inc.</div>
                <div className="artist">Gorillaz</div>
              </button>

              <button
                onclick="grabURL(event, 6)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fold-crow-medicine-show-ocms.jpg?v=1591115180138"
                  alt="Wagon Wheel"
                  width="600"
                  height="400"
                />
                <div className="title">Wagon Wheel</div>
                <div className="artist">Old Crow Medicine Show</div>
              </button>

              <button
                onclick="grabURL(event, 7)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fj-cole-born-sinner.jpg?v=1591115254771"
                  alt="Power Trip"
                  width="600"
                  height="400"
                />
                <div className="title">Power Trip feat. Miguel</div>
                <div className="artist">J. Cole</div>
              </button>

              <button
                onclick="grabURL(event, 8)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fdua-lipa-future-nostalgia.png?v=1591115288043"
                  alt="Don't Start Now"
                  width="600"
                  height="400"
                />
                <div className="title">Don't Start Now</div>
                <div className="artist">Duo Lipa</div>
              </button>

              <button
                onclick="grabURL(event, 9)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fmarvin-gaye-lets-get-it-on.jpg?v=1591115313029"
                  alt="Let's Get It On"
                  width="600"
                  height="400"
                />
                <div className="title">Let's Get It On</div>
                <div className="artist">Marvin Gaye</div>
              </button>

              <button
                onclick="grabURL(event, 10)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fshins-oh-inverted-world.jpg?v=1591115405298"
                  alt="New Slang"
                  width="600"
                  height="400"
                />
                <div className="title">New Slang</div>
                <div className="artist">The Shins</div>
              </button>

              <button
                onclick="grabURL(event, 11)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fsabrina-sabrina.jpg?v=1591157973806"
                  alt="Boys (Summertime Love)"
                  width="600"
                  height="400"
                />
                <div className="title">Boys (Summertime Love)</div>
                <div className="artist">Sabrina</div>
              </button>

              <button
                onclick="grabURL(event, 12)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fredbone-wovoka.jpg?v=1591158069587"
                  alt="Come and Get Your Love"
                  width="600"
                  height="400"
                />
                <div className="title">Come and Get Your Love</div>
                <div className="artist">Redbone</div>
              </button>

              <button
                onclick="grabURL(event, 13)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fkate-bush-hounds-of-love.png?v=1591158143497"
                  alt="Running Up That Hill"
                  width="600"
                  height="400"
                />
                <div className="title">Running Up That Hill</div>
                <div className="artist">Kate Bush</div>
              </button>

              <button
                onclick="grabURL(event, 14)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Ffat-joe-jealous-ones-still-envy.jpg?v=1591158242429"
                  alt="What's Luv"
                  width="600"
                  height="400"
                />
                <div className="title">What's Luv (ft. Ashanti & Ja Rule)</div>
                <div className="artist">Fat Joe</div>
              </button>

              <button
                onclick="grabURL(event, 15)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fthe-black-eyed-peas-elephunk.jpg?v=1592289078276"
                  alt="Where Is the Love?"
                  width="600"
                  height="400"
                />
                <div className="title">Where Is the Love?</div>
                <div className="artist">Black Eyed Peas</div>
              </button>

              <button
                onclick="grabURL(event, 16)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fa-star-is-born-soundtrack.png?v=1592289621175"
                  alt="Shallow"
                  width="600"
                  height="400"
                />
                <div className="title">Shallow</div>
                <div className="artist">Lady Gaga, Bradley Cooper</div>
              </button>

              <button
                onclick="grabURL(event, 17)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2FZiggyStardust.jpg?v=1592290475425"
                  alt="Starman"
                  width="600"
                  height="400"
                />
                <div className="title">Starman</div>
                <div className="artist">David Bowie</div>
              </button>

              <button
                onclick="grabURL(event, 18)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Ftamia-tamia.jpg?v=1592293320960"
                  alt="Starman"
                  width="600"
                  height="400"
                />
                <div className="title">So Into You</div>
                <div className="artist">Tamia</div>
              </button>

              <button
                onclick="grabURL(event, 19)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fmoana.jpg?v=1592293556055"
                  alt="So Far I'll Go"
                  width="600"
                  height="400"
                />
                <div className="title">How Far I'll Go</div>
                <div className="artist">Moana</div>
              </button>

              <button
                onclick="grabURL(event, 20)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Favril-lavigne-let-go.jpg?v=1592350310450"
                  alt="Complicated"
                  width="600"
                  height="400"
                />
                <div className="title">Complicated</div>
                <div className="artist">Avril Lavigne</div>
              </button>

              <button
                onclick="grabURL(event, 21)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fcoldplay_a_rush_of_blood_to_the_head.jpg?v=1592345525258"
                  alt="The Scientist"
                  width="600"
                  height="400"
                />
                <div className="title">Coldplay</div>
                <div className="artist">The Scientist</div>
              </button>

              <button
                onclick="grabURL(event, 22)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fkanye-west-college-dropout.jpg?v=1592345728189"
                  alt="Slow Jamz"
                  width="600"
                  height="400"
                />
                <div className="title">Kanye West</div>
                <div className="artist">Slow Jamz</div>
              </button>

              <button
                onclick="grabURL(event, 23)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fkid_rock_devil_without_a_cause.jpg"
                  alt="Only God Knows Why"
                  width="600"
                  height="400"
                />
                <div className="title">Only God Knows Why</div>
                <div className="artist">Kid Rock</div>
              </button>

              <button
                onclick="grabURL(event, 24)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fincubus_make_yourself.jpg?v=1592351374184"
                  alt="Drive"
                  width="600"
                  height="400"
                />
                <div className="title">Drive</div>
                <div className="artist">Incubus</div>
              </button>

              <button
                onclick="grabURL(event, 25)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fmgmt-oracular-spectacular.jpg?v=1597048139589"
                  alt="Electric Feel"
                  width="600"
                  height="400"
                />
                <div className="title">Electric Feel</div>
                <div className="artist">MGMT</div>
              </button>

              <button
                onclick="grabURL(event, 26)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fti-paper-trail.jpg?v=1597048556668"
                  alt="Whatever You Like"
                  width="600"
                  height="400"
                />
                <div className="title">Whatever You Like</div>
                <div className="artist">T.I.</div>
              </button>

              <button
                onclick="grabURL(event, 27)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fbillie-eilish-when-we-all-fall-asleep-where-do-we-go.png?v=1597048822150"
                  alt="When the Party's Over"
                  width="600"
                  height="400"
                />
                <div className="title">When the Party's Over</div>
                <div className="artist">Billie Eilish</div>
              </button>

              <button
                onclick="grabURL(event, 28)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fthe-strokes-is-this-it.jpeg?v=1597049464828"
                  alt="Last Nite"
                  width="600"
                  height="400"
                />
                <div className="title">Last Nite</div>
                <div className="artist">The Strokes</div>
              </button>

              <button
                onclick="grabURL(event, 29)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fboston-boston.jpg?v=1597049792069"
                  alt="More Than a Feeling Boston"
                  width="600"
                  height="400"
                />
                <div className="title">More Than a Feeling</div>
                <div className="artist">Boston</div>
              </button>

              <button
                onclick="grabURL(event, 30)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fpixies-surfer-rosa.jpg?v=1597105737389"
                  alt="Where Is My Mind"
                  width="600"
                  height="400"
                />
                <div className="title">Where Is My Mind</div>
                <div className="artist">Pixies</div>
              </button>

              <button
                onclick="grabURL(event, 31)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Faerosmith-pump.jpg?v=1597106237598"
                  alt="Cryin'"
                  width="600"
                  height="400"
                />
                <div className="title">Cryin'</div>
                <div className="artist">Aerosmith</div>
              </button>

              <button
                onclick="grabURL(event, 32)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fnicki-minaj-pink-friday.jpg?v=1597106428087"
                  alt="Super Bass"
                  width="600"
                  height="400"
                />
                <div className="title">Superbass</div>
                <div className="artist">Nicki Minaj</div>
              </button>

              <button
                onclick="grabURL(event, 33)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fthe-mamas-and-the-papas-if-you-can-believe-your-eyes-and-ears.jpg?v=1597107066098"
                  alt="California Dreamin'"
                  width="600"
                  height="400"
                />
                <div className="title">California Dreamin'</div>
                <div className="artist">The Mamas and the Papas</div>
              </button>

              <button
                onclick="grabURL(event, 34)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fsheryl-crow-the_very_best_of_sheryl_crow.png?v=1597107235494"
                  alt="The First Cut Is the Deepest"
                  width="600"
                  height="400"
                />
                <div className="title">The First Cut Is the Deepest</div>
                <div className="artist">Sheryl Crow</div>
              </button>

              <button
                onclick="grabURL(event, 35)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fblack-pink-square-up.png?v=1597114366350"
                  alt="Ddu-Du Ddu-Du (뚜두뚜두)"
                  width="600"
                  height="400"
                />
                <div className="title">Ddu-Du Ddu-Du (뚜두뚜두)</div>
                <div className="artist">Blackpink</div>
              </button>

              <button
                onclick="grabURL(event, 36)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fcamila-cabello-camila.png?v=1597115047844"
                  alt="Havana"
                  width="600"
                  height="400"
                />
                <div className="title">Havana ft. Young Thug</div>
                <div className="artist">Camila Cabello</div>
              </button>

              <button
                onclick="grabURL(event, 37)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2FBlue_Swede_Hooked_on_a_Feeling.jpeg?v=1597115341619"
                  alt="Havana"
                  width="600"
                  height="400"
                />
                <div className="title">Hooked on a Feeling</div>
                <div className="artist">Blue Swede</div>
              </button>

              <button
                onclick="grabURL(event, 38)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fadele-25.png?v=1597116632498"
                  alt="Hello"
                  width="600"
                  height="400"
                />
                <div className="title">Hello</div>
                <div className="artist">Adele</div>
              </button>

              <button
                onclick="grabURL(event, 39)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2FDrake_Thank_Me_Later.jpg?v=1597116955766"
                  alt="Hello"
                  width="600"
                  height="400"
                />
                <div className="title">Best I Ever Had</div>
                <div className="artist">Drake</div>
              </button>

              <button
                onclick="grabURL(event, 40)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2FBeyonce_Dangerously_In_Love.png?v=1597208523041"
                  alt="Beyonce Dangerously in Love"
                  width="600"
                  height="400"
                />
                <div className="title">Crazy in Love ft. Jay Z</div>
                <div className="artist">Beyoncé</div>
              </button>

              <button
                onclick="grabURL(event, 41)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2FJonas_Brothers_A_Little_Bit_Longer.jpg?v=1597208768173"
                  alt="Jonas Brothers"
                  width="600"
                  height="400"
                />
                <div className="title">Burnin' Up</div>
                <div className="artist">Jonas Brothers</div>
              </button>

              <button
                onclick="grabURL(event, 42)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2FLizzo_Cuz_I_Love_You.png?v=1597208778608"
                  alt="Lizzo Cus I love You"
                  width="600"
                  height="400"
                />
                <div className="title">Truth Hurts</div>
                <div className="artist">Lizzo</div>
              </button>

              <button
                onclick="grabURL(event, 43)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2FBTS_Map_of_the_Soul_7.png?v=1597208780997"
                  alt="BTS Map of the Soul 7"
                  width="600"
                  height="400"
                />
                <div className="title">
                  Boy With Luv (작은 것들을 위한 시) ft. Halsey
                </div>
                <div className="artist">BTS</div>
              </button>

              <button
                onclick="grabURL(event, 44)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2FCardi_B_Invasion_of_Privacy.png?v=1597208784442"
                  alt="BTS Map of the Soul 7"
                  width="600"
                  height="400"
                />
                <div className="title">Bodak Yellow</div>
                <div className="artist">Cardi B</div>
              </button>

              <button
                onclick="grabURL(event, 45)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2FThe_Beatles_Help.jpg?v=1597386383196"
                  alt="The Beatles - Help!"
                  width="600"
                  height="400"
                />
                <div className="title">Yesterday</div>
                <div className="artist">The Beatles</div>
              </button>

              <button
                onclick="grabURL(event, 46)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2FShawn_Mendes_Shawn_Mendes.png?v=1597389147244"
                  alt="Shawn Mendes - Shawn Mendes"
                  width="600"
                  height="400"
                />
                <div className="title">Señorita</div>
                <div className="artist">Shawn Mendes, Camila Cabella</div>
              </button>

              <button
                onclick="grabURL(event, 47)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2FThe_Bodyguard_Original_Soundtrack_Album.jpg?v=1597389683244"
                  alt="Whitney Houston - I Will ALways Love You"
                  width="600"
                  height="400"
                />
                <div className="title">I Will Always Love You</div>
                <div className="artist">Whitney Houston</div>
              </button>

              <button
                onclick="grabURL(event, 48)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2FRed_Hot_Chili_Peppers_BSSM.jpg?v=1597433975118"
                  alt="Red Hot Chili Peppers"
                  width="600"
                  height="400"
                />
                <div className="title">Under the Bridge</div>
                <div className="artist">Red Hot Chili Peppers</div>
              </button>

              <button
                onclick="grabURL(event, 49)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2FDolly_Parton_Jolene.jpg?v=1597434213221"
                  alt="Dolly Parton"
                  width="600"
                  height="400"
                />
                <div className="title">Jolene</div>
                <div className="artist">Dolly Parton</div>
              </button>

              <button
                onclick="grabURL(event, 50)"
                className="catalog-item jukebox"
                type="button"
              >
                <img
                  src="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Ftall_trees.jpeg?v=1621055790085"
                  alt="Manorofanimals"
                  width="600"
                  height="400"
                />
                <div className="title">Tall Trees</div>
                <div className="artist">Manorofanimals</div>
              </button>
            </div>

            <div id="added-notice">
              <button
                className="added-notice-contents"
                onclick="dismissAddedNotice()"
              >
                You just added <span id="added-notice-song"></span> to the song
                queue!
              </button>
            </div>

            <div className="catalog-controls controls">
              <a className="button" href="#" rel="modal:close">
                Done
              </a>
              <button
                className="button button-bold"
                disabled
                id="choose-song"
                onclick="addSong()"
              >
                Choose Song
              </button>
            </div>
          </div>
        </div>
        <div id="inviteModal" className="modal">
          <div className="light">
            <h1>Invite your friends!</h1>
            <p>
              Send the link to a friend to invite them to this karaoke room.
              <br />
              <br />
              🔑 The room name is <span alt="Room name" id="roomName"></span>
            </p>
            <div className="copyWrapper">
              <input
                type="text"
                value="https://www.karaokenite.co"
                id="myInput"
              />
              <div className="tooltip">
                <button
                  className="button button-bold"
                  id="copy"
                  onclick="copyFunction()"
                  onmouseout="outFunc()"
                >
                  <span className="tooltiptext" id="myTooltip">
                    Copy to clipboard
                  </span>
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id="feedbackModal" className="modal">
          <div className="light">
            <h2>Give us feedback!</h2>
            <p>
              Karaoke Nite is an ongoing project. We're looking to hear your
              thoughts on how to make it even better!
            </p>

            <a
              id="giveFeedbackButton"
              className="button button-bold"
              href="https://karaokenite.typeform.com/to/SaHxnvyT"
              target="_blank"
              title="Give Feedback"
            >
              Give Feedback
            </a>

            <br />

            <a
              id="reportBugButton"
              className="button"
              href="https://karaokenite.typeform.com/to/qqQslFgC"
              target="_blank"
              title="Invite friends to the room"
            >
              Report a Bug
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Room;
