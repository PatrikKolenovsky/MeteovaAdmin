import {Maker} from './maker';

export class ModuleType {
  moduleTypeId: number | null = null;
  name: string | null = null;
  description: string | null = null;
  maker: Maker | null = null;
}
