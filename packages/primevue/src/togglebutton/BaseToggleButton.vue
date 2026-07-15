<script>
import ToggleButtonStyle from '@mizuui/mizuvue/togglebutton/style';
import BaseEditableHolder from '@primevue/core/baseeditableholder';

export default {
    name: 'BaseToggleButton',
    extends: BaseEditableHolder,
    props: {
        onIcon: String,
        offIcon: String,
        onLabel: {
            type: String,
            default: 'Yes'
        },
        offLabel: {
            type: String,
            default: 'No'
        },
        readonly: {
            type: Boolean,
            default: false
        },
        tabindex: {
            type: Number,
            default: null
        },
        ariaLabelledby: {
            type: String,
            default: null
        },
        ariaLabel: {
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
    style: ToggleButtonStyle,
    provide() {
        return {
            $pcToggleButton: this,
            $parentInstance: this
        };
    }
};
</script>
