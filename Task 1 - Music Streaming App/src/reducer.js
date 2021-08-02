export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
//   token:
//     'BQAUopDfsWpxI3q_zoPBR4Te0sencTlKvVgK9oE4P6HasEaqHg3kPfZUddHrLTdLqi - WM2UyGXnDUCIojnlLxrfT7cx0Yv25CLOtD7r48qo53ixrkbepfKaoA3mhYv0DnEKMC3j0jzh_89Wa5ffm6sBMBeEYPV0tC84I - xIPbYoHFjnA',
};


const reducer = (state, action) =>
{
    console.log(action);

    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };

      case "SET_TOKEN":
        return {
          ...state,
          token: action.token,
        };

      case "SET_PLAYLISTS":
        return {
          ...state,
          playlists: action.playlists,
            };
        
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }

      default:
        return state;
    }
}
export default reducer;