import getNounInDeclension from 'shared/helpers/getNounInDeclension';

import { WordForms } from '../Dropdown.types';

export default function getResultStringPart(count: number, wordForms: WordForms): string {
  return count && `${count} ${getNounInDeclension(count, wordForms)}`;
}
