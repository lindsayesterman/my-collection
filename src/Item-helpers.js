export const findNav = (navs=[], navName) =>
  navs.find(nav => nav.name === navName)

export const findItem = (items=[], itemId) =>
  items.find(item => item.id === itemId)

export const getItemsForNav = (items=[], navName) => (
  (!navName)
    ? items
    : items.filter(item => item.category === navName)
)

export const countItemsForNav = (items=[], category) =>
items.filter(item => item.category === category).length