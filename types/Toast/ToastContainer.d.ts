/// <reference types="react" />
import { ToastItemProps } from "./ToastItem";
export interface IToastContainer {
    pushOne: (newToast: ToastItemProps) => {};
}
export declare const ToastContainer: import("react").ForwardRefExoticComponent<import("react").RefAttributes<any>>;
