
import { omit } from 'lodash';

const a1 = { 'a': 1, 'b': '2', 'c': 3 };

const a2 = omit(a1, ['a', 'c']);

console.log(a2);
