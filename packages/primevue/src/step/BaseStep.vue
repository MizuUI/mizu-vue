<script>
import StepStyle from '@mizuui/mizuvue/step/style';
import BaseComponent from '@primevue/core/basecomponent';

export default {
    name: 'BaseStep',
    extends: BaseComponent,
    props: {
        value: {
            type: [String, Number],
            default: undefined
        },
        disabled: {
            type: Boolean,
            default: false
        },
        asChild: {
            type: Boolean,
            default: false
        },
        as: {
            type: [String, Object],
            default: 'DIV'
        }
    },
    style: StepStyle,
    provide() {
        return {
            $pcStep: this,
            $parentInstance: this
        };
    }
};
</script>
