import ConfirmationEventBus from '@mizuui/mizu-vue/confirmationeventbus';
import { PrimeVueConfirmSymbol } from '@mizuui/mizu-vue/useconfirm';

export default {
    install: (app) => {
        const ConfirmationService = {
            require: (options) => {
                ConfirmationEventBus.emit('confirm', options);
            },
            close: () => {
                ConfirmationEventBus.emit('close');
            }
        };

        app.config.globalProperties.$confirm = ConfirmationService;
        app.provide(PrimeVueConfirmSymbol, ConfirmationService);
    }
};
