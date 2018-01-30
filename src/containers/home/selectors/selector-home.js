import {
  createSelector
} from 'reselect';
import { key_home } from '@/constant'

const homeSelector = (state) => {
  return state.get(key_home);
};

const bannerSelector = createSelector([homeSelector], (immu_home) => {
  return immu_home.filter((data) => {
    return data.get('bannerList');
  });
});

export default (state) => {
  return {
    banners: bannerSelector(state)
  };
};
