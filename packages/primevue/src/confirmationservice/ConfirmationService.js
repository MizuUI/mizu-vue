import ConfirmationEventBus from '@mizuui/mizuvue/confirmationeventbus';
import { PrimeVueConfirmSymbol } from '@mizuui/mizuvue/useconfirm';

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
