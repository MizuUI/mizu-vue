import ToastEventBus from '@mizuui/mizu-vue/toasteventbus';
import { PrimeVueToastSymbol } from '@mizuui/mizu-vue/usetoast';

export default {
    install: (app) => {
        const ToastService = {
            add: (message) => {
                ToastEventBus.emit('add', message);
            },
            remove: (message) => {
                ToastEventBus.emit('remove', message);
            },
            removeGroup: (group) => {
                ToastEventBus.emit('remove-group', group);
            },
            removeAllGroups: () => {
                ToastEventBus.emit('remove-all-groups');
            }
        };

        app.config.globalProperties.$toast = ToastService;
        app.provide(PrimeVueToastSymbol, ToastService);
    }
};
