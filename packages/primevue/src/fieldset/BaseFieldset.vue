<script>
import FieldsetStyle from '@mizuui/mizuvue/fieldset/style';
import BaseComponent from '@primevue/core/basecomponent';

export default {
    name: 'BaseFieldset',
    extends: BaseComponent,
    props: {
        legend: String,
        toggleable: Boolean,
        collapsed: Boolean,
        toggleButtonProps: {
            type: null,
            default: null
        }
    },
    style: FieldsetStyle,
    provide() {
        return {
            $pcFieldset: this,
            $parentInstance: this
        };
    }
};
</script>
