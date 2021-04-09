import { Reducer, AnyAction } from 'redux'
import { uniq } from 'lodash'
import { Dispatch, ResourceState, initialResourceState, resourceDefaultSelectors } from './utils'
import axios from 'axios'

/**
 * Actions Types
 */

const GET_RESTAURANT_LIST_REQUEST = 'restaurant/GET_RESTAURANT_LIST_REQUEST'
const GET_RESTAURANT_LIST_SUCCESS = 'restaurant/GET_RESTAURANT_LIST_SUCCESS'
const GET_RESTAURANT_LIST_FAILURE = 'restaurant/GET_RESTAURANT_LIST_FAILURE'

export const RestaurantTypes = {
  GET_RESTAURANT_LIST_REQUEST,
  GET_RESTAURANT_LIST_SUCCESS,
  GET_RESTAURANT_LIST_FAILURE,
}
/**
 * @description List function
 * @param {number} page Page number for further optimisation like pagination
 * @returns
 */

function list (page = 0) {
  const perPage = 20

  return async (dispatch: Dispatch) => {
    dispatch({ type: GET_RESTAURANT_LIST_REQUEST })
    let data = null
    try {
      /**
       *  Disneyland Paris API call
       */
      await axios.post('https://api.disneylandparis.com/query', '{"query":"query activities($market: String!, $types: [String]) { activities(market: $market, types: $types) {... on Activity {id name shortDescription heroMedia {...media} squareMedia {...media}}}}fragment media on Media {  url  alt}","variables":{"market":"fr-fr","types":["Restaurant"]},"operationName":"activities"}'
      ).then(res => {
        data = res?.data?.data?.activities ?? null
      })
      dispatch({ type: GET_RESTAURANT_LIST_SUCCESS, data, page, perPage })
    } catch (error) {
      const errorMessage = error.message
      dispatch({ type: GET_RESTAURANT_LIST_FAILURE, errorMessage })
    }
  }
}

/**
 * Actions
 */

export const RestaurantAction = {
  list,
}

/**
 * State
 */

export interface RestaurantDTO {
  id: string,
  name: string,
  shortDescription: string,
  heroMedia:{
    url: string,
    alt: string
  }
  squareMedia:{
    url: string,
    alt: string
  }

}

type BaseRestaurantState = ResourceState<RestaurantDTO>
type RestaurantStateList = BaseRestaurantState['list'] & { paginationEnded: boolean }
export type RestaurantState = ResourceState<RestaurantDTO> & { list: RestaurantStateList }

const initialState: RestaurantState = {
  ...initialResourceState,
  list: {
    ...initialResourceState.list,
    paginationEnded: false,
  },
}

/**
 * Selectors
 * State transformator for unifying state access in app
 */

const restaurantSelector = state => state.restaurant

export const RestaurantSelectors = {
  ...resourceDefaultSelectors(restaurantSelector),
}

/**
 * Reducer
 */

export const restaurant: Reducer = (state = initialState, action: AnyAction): RestaurantState => {
  switch (action.type) {
    case GET_RESTAURANT_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case GET_RESTAURANT_LIST_FAILURE:
      return {
        ...state,
        loading: false,
      }
    case GET_RESTAURANT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data?.reduce((acc, item) => ({ ...acc, [item.id]: item }), state.data) ?? {},
        list: {
          ...state.list,
          page: action.page,
          perPage: action.perPage,
          ids: uniq(state.list.ids.concat(action.data?.map(item => item.id) ?? [])),
          loadedOnce: true,
          paginationEnded: action.paginationEnded,
        },
      }
    default:
      return state
  }
}
