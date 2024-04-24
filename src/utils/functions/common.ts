import filterMenusByLocation from '../config/filterMenusByLocation';
import menuLocations from '../config/menuLocations';
import { postTypes } from '../config/postTypes';

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Check if post type is valid.
 *
 * @author garydubb
 * @param  {string}  postType WP post type.
 * @return {boolean}          Whether provided post type is valid.
 */
export function isValidPostType(postType) {
  return Object.keys(postTypes).includes(postType);
}

export const hierarchicalPostTypes = ['page'];

/**
 * Check if post type is hierarchical.
 *
 * @author garydubb
 * @param  {string}  postType WP post type.
 * @return {boolean}          Whether provided post type is hierarchical.
 */
export function isHierarchicalPostType(postType) {
  return hierarchicalPostTypes.includes(postType);
}

export default function getMenus(menus, locations = menuLocations) {
  
  // Filter returned menus by specific menu location.
  const filteredMenus = filterMenusByLocation(menus?.nodes, locations);

  return filteredMenus || [];
}
