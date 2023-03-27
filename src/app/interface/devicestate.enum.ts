export enum DevicestateEnum {
  FREE = "Szabad",
  REQUESTED= "Igényelve",
  IN_USE= "Használatban",
  RETURNED= "Leadva"
}



export function getKeyByValue(value: string): keyof typeof DevicestateEnum {
  const keys = Object.keys(DevicestateEnum) as (keyof typeof DevicestateEnum)[];
  for (const key of keys) {
    if (DevicestateEnum[key] === value) {
      return key;
    }
  }
  return 'FREE';
}