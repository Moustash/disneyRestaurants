import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { createSelector, Selector } from 'reselect'

import { RestaurantState } from './restaurant'

export interface PaginateItem<T> {
  data: T[],
  title: string,
}

export interface State {
restaurant: RestaurantState
}

export type Dispatch = ThunkDispatch<State, void, AnyAction>

export interface ResourceState<T> {
  loading: boolean;
  data: { [key: string]: T };
  total: number;
  list: {
    ids: string[];
    selectedId: string | null;
    loadedOnce: boolean;
    sort: string | null;
    order: string | null;
    page: number | null;
    perPage: number;
    filter: any;
    paginationEnded: boolean;
  },

}

export interface Filter {
  perPage: number | null;
  page: number | null;
  filter: {
    text: string | null;
  }
}

export const initialResourceState: ResourceState<any> = {
  loading: false,
  data: {},
  total: 0,
  list: {
    ids: [],
    selectedId: null,
    loadedOnce: false,
    sort: null,
    order: null,
    page: 0,
    perPage: 20,
    filter: null,
    paginationEnded: false,
  },
}

export const resourceDefaultSelectors = (resourceSelector: Selector<State, any>) => ({
  list: createSelector(
    resourceSelector,
    resource => resource?.list?.ids.map((id: string) => resource.data[id])
  ),
})
