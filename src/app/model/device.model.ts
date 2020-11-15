import {Module} from './module';

export class Device {
  deviceId: number | null = null;
  deviceNameId: number | null = null;
  deviceName: string | null = null;
  ip: string | null = null;
  port: number | null = null;
  comServPort: number | null = null;
  inUse: boolean | null = null;
  description: string | null = null;
  latitude: string | null = null;
  longitude: string | null = null;
  address: string | null = null;
  module: Module[] | null = null;
}
