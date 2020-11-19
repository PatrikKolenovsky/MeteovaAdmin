import {Variable} from './variable';
import {ModuleType} from './module-type';
import {Device} from './device.model';

export class Module {
  moduleId: number | null = null;
  name: string | null = null;
  // deviceId: number | null = null;
  device: Device | null = null;
  description: string | null = null;
  variable: Variable[] | null = null;
  moduleType: ModuleType | null = null;
}

