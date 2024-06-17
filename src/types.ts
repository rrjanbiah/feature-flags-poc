export interface IFeatureFlag {
  name: string;
  isActive: boolean;
}

export enum EUserType {
  "SPECIAL" = "Special",
  "NORMAL" = "Normal",
}
