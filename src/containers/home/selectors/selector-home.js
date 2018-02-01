import {
  createSelector
} from 'reselect';
import Immutable from 'immutable';
import { key_home } from '@/constants'

const homeSelector = (state) => {
  return state.get(key_home);
};

const bannerSelector = createSelector([homeSelector], (immu_home) => {
  return immu_home&&immu_home.get('homeSale')
});

const proSelector = createSelector([homeSelector], (immu_home) => {
  return immu_home&&immu_home.getIn(['products','recommendList'])
});

export default (state) => {
  return {
    banners: bannerSelector(state) || Immutable.Map({}),
    products: proSelector(state) || Immutable.Map({})
  };
};
