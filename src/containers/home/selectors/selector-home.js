import {
  createSelector
} from 'reselect';
import { key_home } from '@/constants'

const homeSelector = (state) => {
  return state.get(key_home);
};

const bannerSelector = createSelector([homeSelector], (immu_home) => {
  return immu_home&&immu_home.get(1)
});

export default (state) => {
  return {
    banners: bannerSelector(state)
  };
};
