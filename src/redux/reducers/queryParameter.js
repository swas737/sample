const queryParameterReducer = (state = {}, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case 'QUERY_PARAMETER_ITEM_ADD':
      newState[
        Math.random()
          .toString(36)
          .replace(/[^a-z]+/g, '')
      ] = {
        queryString: action.payload,
      }
      break

    case 'QUERY_PARAMETER_ITEM_DELETE':
      delete newState[action.payload]
      break
    default:
      break
  }

  return newState
}

export default queryParameterReducer
