import { SnackbarOrigin } from "@mui/material";
interface ToastConfig {
    autoHideDuration?: number | null;
    anchorOrigin?: SnackbarOrigin;
}
declare function info(content: string, title?: string, config?: ToastConfig): void;
declare function success(content: string, title?: string, config?: ToastConfig): void;
export declare const ToastService: {
    info: typeof info;
    success: typeof success;
};
export {};
