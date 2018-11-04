export const SortClass = () => {
  return function(order, key) {
    const isKey = order.key === key;
    const sort = (order, sort) => (isKey && order.sort === sort);
    return {
      'fa': true,
      'fa-sort': !isKey,
      'fa-sort-asc': sort(order, 'asc'),
      'fa-sort-desc': sort(order, 'desc')
    }
  };
}