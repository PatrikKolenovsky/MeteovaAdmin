import {Module} from './module';

export class Device {
  deviceId: number | null = null;
  deviceNameId: number | null = null;
  // tslint:disable-next-line:variable-name
  device_location: string | null = null;
  module: Module | null = null;
}
