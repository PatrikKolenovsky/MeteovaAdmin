import {Module} from './module';

export class Device {
  deviceId: number | null = null;
  deviceNameId: number | null = null;
  deviceName: string | null = null;
  ip: string | null = null;
  port: number | null = null;
  comServPort: number | null = null;
  inUse: number | null = null;
  description: string | null = null;
  // tslint:disable-next-line:variable-name
  device_location: string | null = null;
  module: Module | null = null;
  // module: Array<Module> | null = null;
}
