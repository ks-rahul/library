import { userTypeConstants } from "../Components/roles-and-permission/permissions";
import {
  setLocalStorageItem,
  userInfoData,
  removeLocalStorageItem,
} from "../Components/LocalStorages";

function tokenExpire(res) {
  setLocalStorageItem("token", "");
  if (userInfoData()) {
    let userInfo = userInfoData();
    removeLocalStorageItem("userInfo");
    removeLocalStorageItem("evpId");
    if (
      userInfo.userType === userTypeConstants.SA ||
      userInfo.userType === userTypeConstants.SA_TM ||
      userInfo.userType === userTypeConstants.SA_MA
    ) {
      return 2;
    } else {
      return 1;
    }
  } else {
    return 1;
  }
}

export { tokenExpire };
