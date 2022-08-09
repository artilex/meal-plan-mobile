import {NewProduct} from 'src/services/api/types';

export enum RequestStatus {
  Idle = 'idle',
  Loading = 'loading',
  Refreshing = 'refreshing',
  Succeeded = 'succeeded',
  Failed = 'failed',
}

// TODO: Delete list or do its optional
export interface InitialState<T> {
  list: T[];
  status: RequestStatus;
  error: string | null;
}

export type UpdateProductPayload = {
  productId: string;
  productData: Partial<NewProduct>;
};
