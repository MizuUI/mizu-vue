import type { DynamicDialogInstance, DynamicDialogOptions } from '@mizuui/mizu-vue/dynamicdialogoptions';

export declare function useDialog(): {
    open: (content: any, options?: DynamicDialogOptions) => DynamicDialogInstance;
};
