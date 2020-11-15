import {Variable} from './variable';
import {ModuleType} from './module-type';

export class Module {
  moduleId: number | null = null;
  name: string | null = null;
  moduleTypeId: number | null = null;
  deviceTypeId: number | null = null;
  description: string | null = null;
  variable: Variable[] | null = null;
  moduleType: ModuleType | null = null;
}

