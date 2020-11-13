import { Location } from 'types/locations';
import {
  LOCATIONS_DATA_REQUEST,
  LOCATIONS_DATA_RESPONSE,
  LOCATIONS_DATA_FAILED,
  LOCATIONS_SET_PAGES_COUNT,
  LOCATIONS_SET_CURRENT_PAGE,
  LOCATION_REQUEST,
  LOCATION_RESPONSE,
  LOCATION_FAILED,
} from 'constants/actions';
import {
  RequestDataLocationsAction,
  ResponseDataLocationsAction,
  FailedDataLocationsAction,
  RequestLocationAction,
  ResponseLocationAction,
  FailedLocationAction,
  SetPagesCountAction,
  SetCurrentPageAction,
} from './types';

export const fetchDataLocationsRequest = (): RequestDataLocationsAction => ({
  type: LOCATIONS_DATA_REQUEST,
});

export const fetchDataLocationsResponse = (data: Location[]): ResponseDataLocationsAction => ({
  type: LOCATIONS_DATA_RESPONSE,
  payload: data,
});

export const fetchDataLocationsFailed = (text: string): FailedDataLocationsAction => ({
  type: LOCATIONS_DATA_FAILED,
  payload: text,
});

export const fetchLocationRequest = (id: string): RequestLocationAction => ({
  type: LOCATION_REQUEST,
  payload: id,
});

export const fetchLocationResponse = (data: Location): ResponseLocationAction => ({
  type: LOCATION_RESPONSE,
  payload: data,
});

export const fetchLocationFailed = (text: string): FailedLocationAction => ({
  type: LOCATION_FAILED,
  payload: text,
});

export const setPagesCount = (count: number): SetPagesCountAction => ({
  type: LOCATIONS_SET_PAGES_COUNT,
  payload: count,
});

export const setCurrentPage = (currentPage: number): SetCurrentPageAction => ({
  type: LOCATIONS_SET_CURRENT_PAGE,
  payload: currentPage,
});
