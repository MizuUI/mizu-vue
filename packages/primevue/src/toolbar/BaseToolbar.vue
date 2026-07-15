<script>
import ToolbarStyle from '@mizuui/mizuvue/toolbar/style';
import BaseComponent from '@primevue/core/basecomponent';

export default {
    name: 'BaseToolbar',
    extends: BaseComponent,
    props: {
        ariaLabelledby: {
            type: String,
            default: null
        }
    },
    style: ToolbarStyle,
    provide() {
        return {
            $pcToolbar: this,
            $parentInstance: this
        };
    }
};
</script>
