import { EUserType, IFeatureFlag } from "./types";

// in real word, this will be coming from the user profile endpoint
// TODO update the current user type
const currentUserType: EUserType = EUserType.SPECIAL;

export const featureFlags: IFeatureFlag[] = [
  {
    name: "normalUsersOnly",
    isActive: currentUserType === (EUserType.NORMAL as EUserType),
  },
  {
    name: "specialUsersOnly",
    isActive: currentUserType === EUserType.SPECIAL,
  },
];

// Only for dev
console.log("featureFlags", featureFlags);
