const generateActions = actionName => {
  return {
    request: (payload = {}) => {
      return {
        type: `${actionName}_REQUEST`,
        payload
      };
    },
    succeeded: (payload = {}) => {
      return {
        type: `${actionName}_SUCCESS`,
        payload
      };
    },
    failed: (payload = {}) => {
      return {
        type: `${actionName}_FAILED`,
        payload
      };
    }
  };
};
export default generateActions;
