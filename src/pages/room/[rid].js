import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import io from 'socket.io-client';
import { songs } from '../../components/songs';

const styles = (
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
);

export function Room() {
  const {
    query: { rid },
  } = useRouter();

  useEffect(() => {
    const socket = io(window.location.origin);
    socket.emit('join', rid);
    socket.on('joined', (data) => {
      console.log(data);
    });
  }, [rid]);

  return (
    <React.Fragment>
      {styles}
      <div className="room-container">
        <div className="info-container">
          <div className="info-section">
            <a
              className="navbar-link navbar-link__logo"
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
              {songs}
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
    </React.Fragment>
  );
}

export default Room;
