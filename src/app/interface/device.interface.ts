import {DevicestateEnum} from "./devicestate.enum";

export interface Device {
  deviceId: number,
  name: string,
  inventoryId: string,
  description: string,
  userId: string,
  providerId: string,
  state: DevicestateEnum,
  startDate: Date,
  dueDate: Date
}


export const NULL_DEVICE: Device = {
  deviceId: 0,
  name: "string",
  inventoryId: "",
  description: "",
  userId: "",
  providerId: "",
  state: DevicestateEnum.FREE,
  startDate: new Date,
  dueDate: new Date
};
