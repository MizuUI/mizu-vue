<script>
import ScrollPanelStyle from '@mizuui/mizuvue/scrollpanel/style';
import BaseComponent from '@primevue/core/basecomponent';

export default {
    name: 'BaseScrollPanel',
    extends: BaseComponent,
    props: {
        step: {
            type: Number,
            default: 5
        }
    },
    style: ScrollPanelStyle,
    provide() {
        return {
            $pcScrollPanel: this,
            $parentInstance: this
        };
    }
};
</script>
