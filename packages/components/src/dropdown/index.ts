import { withInstall } from '@torrer-ui/utils';
import dropdown from './src/dropdown/dropdown.vue';
import dropdownMenu from './src/dropdown-menu/dropdown-menu.vue';
import dropdownMenuItem from './src/dropdown-menu-item/dropdown-menu-item.vue';

export const TrDropdown = withInstall(dropdown);
export const TrDropdownMenu = withInstall(dropdownMenu);
export const TrDropdownMenuItem = withInstall(dropdownMenuItem);

type a = IteratorResult