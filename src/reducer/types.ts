import { ItemListTypes } from 'types/';

export interface InitialStateTypes {
  data: ItemListTypes[] | null;
  isLoading: boolean;
  error: string | null;
}
