import { create } from "zustand";

export const useStore = create((set) => {
  return {
    count: 0,
    incValue: 1,

    inc: () => {
      set((state) => {
        return {
          count: state.count + 1,
        };
      });
    },
    incValueUpdate: (value) => {
      set(() => {
        return {
          incValue: value,
        };
      });
    },

    incByValue: () => {
      set((state) => {
        return {
          count: state.count + state.incValue,
        };
      });
    },
    dec: () => {
      set((state) => {
        return {
          count: state.count - 1,
        };
      });
    },
    reset: () => {
      set(() => {
        return {
          count: 0,
          incValue: 1,
        };
      });
    },
  };
});
