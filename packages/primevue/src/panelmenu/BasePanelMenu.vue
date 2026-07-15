<script>
import PanelMenuStyle from '@mizuui/mizuvue/panelmenu/style';
import BaseComponent from '@primevue/core/basecomponent';

export default {
    name: 'BasePanelMenu',
    extends: BaseComponent,
    props: {
        model: {
            type: Array,
            default: null
        },
        expandedKeys: {
            type: Object,
            default: null
        },
        multiple: {
            type: Boolean,
            default: false
        },
        tabindex: {
            type: Number,
            default: 0
        }
    },
    style: PanelMenuStyle,
    provide() {
        return {
            $pcPanelMenu: this,
            $parentInstance: this
        };
    }
};
</script>
