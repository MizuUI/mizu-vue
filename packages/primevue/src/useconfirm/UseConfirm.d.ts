import type { ConfirmationOptions } from '@mizuui/mizuvue/confirmationoptions';

export declare function useConfirm(): {
    require: (option: ConfirmationOptions) => void;
    close: () => void;
};
