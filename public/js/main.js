if (
  location.protocol !== 'https:' &&
  location.hostname !== 'localhost' &&
  !location.port
) {
  location.href =
    'https:' + window.location.href.substring(window.location.protocol.length);
}
