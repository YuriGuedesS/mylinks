import { createSelector } from 'reselect'
import _ from 'lodash';
import { log } from 'util';

const filtersPredicate = {
  byTerm: (item, state) => item.title.includes(state.searchTerm),
  byTags: (item, state) => state.tags.some(tag => item.tags.includes(tag))
};

export const getLinkState = state => state.link;

/*
 TODO: Refactor and to improve logic 
 applyFilters
 is a selector receives the state then filter all items that it will be
 injected in each predicate, this predicate are dinamic functions 
 that receives the state and verify if exists the value 
 and can return true or false.
*/
export const applyFilters = createSelector(
  [ getLinkState ],
  state => {
    let found = _.filter(state.items, (item) => {
      const result = state.filters.reduce((acc, cbFilter) => {
        const predicate = filtersPredicate[cbFilter];
        if (predicate(item, state)) acc.push(true);
        else acc.push(false);
        return acc;
      }, []);
      return !result.includes(false);
    });
    return {
      ...state,
      items: found
    };
  }
);