import createStore from 'zustand';

interface UserType {
  isLoggedIn: boolean;
  updateIsLoggedIn: (isLoggedIn: boolean) => void;
}

const useUserStore = createStore<UserType>((set) => ({
    isLoggedIn: false,
    updateIsLoggedIn: (isLoggedIn) => set(() => ({ isLoggedIn })),
}));

export default useUserStore;
