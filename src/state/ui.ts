import Store from 't-state';

type State = {
  sideMenuIsExpanded: boolean;
  isFetching: boolean;
  isPushing: boolean;
  activeTab: string | undefined;
};

const uiStore = new Store<State>({
  name: 'ui',
  state: {
    sideMenuIsExpanded: true,
    isFetching: false,
    isPushing: false,
    activeTab: undefined,
  },
});

export default uiStore;
