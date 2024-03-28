import Meta from './generalSettings';
import { MenuConnection } from './menuConnection';

export interface SettingsData {
  menus: MenuConnection;
  generalSettings?: Meta;
  children?: any;
}
