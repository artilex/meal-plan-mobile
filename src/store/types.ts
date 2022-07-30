import {NewProduct} from 'src/services/api/types';

export enum RequestStatus {
  Idle = 'idle',
  Loading = 'loading',
  Succeeded = 'succeeded',
  Failed = 'failed',
}

export interface InitialState<T> {
  list: T[];
  status: RequestStatus;
  error: string | null;
}

export type UpdateProductPayload = {
  productId: string;
  productData: Partial<NewProduct>;
};
