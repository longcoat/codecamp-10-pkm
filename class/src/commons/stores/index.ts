<<<<<<< Updated upstream
import { atom } from "recoil";
=======
import { async } from "@firebase/util";
import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";
>>>>>>> Stashed changes

export const isEditState = atom({
  key: "isEditState",
  default: false,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

<<<<<<< Updated upstream

export const visitedPageState - atom({
key: "visitedPageState",
defaul: "",

})
=======
export const visitedPageState = atom({
  key: "visitedPageState",
  default: "",
});

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});
>>>>>>> Stashed changes
