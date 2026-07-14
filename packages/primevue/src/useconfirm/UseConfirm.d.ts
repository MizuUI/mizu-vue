import type { ConfirmationOptions } from '@mizuui/mizu-vue/confirmationoptions';

export declare function useConfirm(): {
    require: (option: ConfirmationOptions) => void;
    close: () => void;
};
