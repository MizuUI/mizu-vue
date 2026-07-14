<script>
import StepperStyle from '@mizuui/mizu-vue/stepper/style';
import BaseComponent from '@primevue/core/basecomponent';

export default {
    name: 'BaseStepper',
    extends: BaseComponent,
    props: {
        value: {
            type: [String, Number],
            default: undefined
        },
        linear: {
            type: Boolean,
            default: false
        }
    },
    style: StepperStyle,
    provide() {
        return {
            $pcStepper: this,
            $parentInstance: this,
            $pcStepItem: null
        };
    }
};
</script>
