import {DevicestateEnum} from "./devicestate.enum";

export interface Device {
  deviceId: number,
  name: string,
  inventoryId: string,
  description: string,
  userId: string,
  providerId: string,
  state: DevicestateEnum,
  statDate: Date,
  dueDate: Date
}
