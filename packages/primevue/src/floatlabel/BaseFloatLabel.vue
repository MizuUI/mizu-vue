<script>
import FloatLabelStyle from '@mizuui/mizuvue/floatlabel/style';
import BaseComponent from '@primevue/core/basecomponent';

export default {
    name: 'BaseFloatLabel',
    extends: BaseComponent,
    props: {
        variant: {
            type: String,
            default: 'over'
        }
    },
    style: FloatLabelStyle,
    provide() {
        return {
            $pcFloatLabel: this,
            $parentInstance: this
        };
    }
};
</script>
