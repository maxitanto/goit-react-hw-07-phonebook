export const handlePending = state => {
  state.isLoading = true;
};

export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};

export const handleFulfilledGet = (state, { payload }) => {
  state.items = payload;
};

export const handleFulfilledCreate = (state, { payload }) => {
  state.items.push(payload);
};

export const handleFulfilledDel = (state, { payload }) => {
  state.items = state.items.filter(el => el.id !== payload.id);
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
