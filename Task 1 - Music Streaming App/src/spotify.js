// All these various function calls are available in the spotify api documentation
// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize";
// Takes care of authentication stuff
// by clicking on the login button
const redirectUri = "http://localhost:3000/";
// After successful authentication, the spotify api brings the user back to our app
const clientId = "d806266f6cfe45cf87d8cc45abdc85b0";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
    "user-modify-playback-state",
  "user-top-read"
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
