<script>
import SelectButtonStyle from '@mizuui/mizuvue/selectbutton/style';
import BaseEditableHolder from '@primevue/core/baseeditableholder';

export default {
    name: 'BaseSelectButton',
    extends: BaseEditableHolder,
    props: {
        options: Array,
        optionLabel: null,
        optionValue: null,
        optionDisabled: null,
        multiple: Boolean,
        allowEmpty: {
            type: Boolean,
            default: true
        },
        dataKey: null,
        ariaLabelledby: {
            type: String,
            default: null
        },
        size: {
            type: String,
            default: null
        },
        fluid: {
            type: Boolean,
            default: null
        }
    },
    style: SelectButtonStyle,
    provide() {
        return {
            $pcSelectButton: this,
            $parentInstance: this
        };
    }
};
</script>
