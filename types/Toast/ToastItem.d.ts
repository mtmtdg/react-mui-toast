/// <reference types="react" />
import { AlertColor } from "@mui/material";
export interface ToastItemProps {
    uuid: string;
    severity: AlertColor;
    content: string;
    title?: string;
    variant?: "standard" | "filled" | "outlined";
    autoHideDuration?: number | null;
}
export declare function ToastItem({ severity, content, title, variant, autoHideDuration, onClose, }: ToastItemProps & {
    onClose: () => void;
}): JSX.Element;
