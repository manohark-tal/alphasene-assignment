const doAction = async (action, api, payload, dispatch) => {
  dispatch(action.request());
  try {
    if (api) {
      const response = await api(payload);
      dispatch(action.succeeded(response));
    } else {
      dispatch(action.succeeded(payload));
    }
  } catch (e) {
    dispatch(action.failed("Error"));
  }
};
export default doAction;
