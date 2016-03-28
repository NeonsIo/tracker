import { Device } from '../Device';
export interface DeviceBuilder {
    buildWidth();
    buildHeight();
    buildAvailableWidth();
    buildAvailableHeight();
    buildIsLocalStorage();
    buildIsSessionStorage();
    buildIsAdBlock();
    buildIsJavascript();
    getDevice(): Device;
}