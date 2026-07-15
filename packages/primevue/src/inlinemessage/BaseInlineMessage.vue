<script>
import InlineMessageStyle from '@mizuui/mizuvue/inlinemessage/style';
import BaseComponent from '@primevue/core/basecomponent';

export default {
    name: 'BaseInlineMessage',
    extends: BaseComponent,
    props: {
        severity: {
            type: String,
            default: 'error'
        },
        icon: {
            type: String,
            default: undefined
        }
    },
    style: InlineMessageStyle,
    provide() {
        return {
            $pcInlineMessage: this,
            $parentInstance: this
        };
    }
};
</script>
