import {Valint} from './valint';
import {Valreal} from './valreal';
import {Valstring} from './valstring';

export class Variable {
  name: string | null = null;
  pub: string | null = null;
  description: string | null = null;
  valint: Valint | null = null;
  valreal: Valreal | null = null;
  valstring: Valstring | null = null;
}
