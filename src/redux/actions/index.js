export const addItem = (payload) => {
  return {
    type: 'QUERY_PARAMETER_ITEM_ADD',
    payload,
  }
}

export const editItem = (payload) => {
  return {
    type: 'QUERY_PARAMETER_ITEM_EDIT',
    payload,
  }
}

export const deleteItem = (payload) => {
  return {
    type: 'QUERY_PARAMETER_ITEM_DELETE',
    payload,
  }
}
