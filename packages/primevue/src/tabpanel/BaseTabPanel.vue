<script>
import TabPanelStyle from '@mizuui/mizu-vue/tabpanel/style';
import BaseComponent from '@primevue/core/basecomponent';

export default {
    name: 'BaseTabPanel',
    extends: BaseComponent,
    props: {
        // in Tabs
        value: {
            type: [String, Number],
            default: undefined
        },
        as: {
            type: [String, Object],
            default: 'DIV'
        },
        asChild: {
            type: Boolean,
            default: false
        },
        // in TabView
        header: null,
        headerStyle: null,
        headerClass: null,
        headerProps: null,
        headerActionProps: null,
        contentStyle: null,
        contentClass: null,
        contentProps: null,
        disabled: Boolean
    },
    style: TabPanelStyle,
    provide() {
        return {
            $pcTabPanel: this,
            $parentInstance: this
        };
    }
};
</script>
