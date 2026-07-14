<script>
import TabPanelsStyle from '@mizuui/mizu-vue/tabpanels/style';
import BaseComponent from '@primevue/core/basecomponent';

export default {
    name: 'BaseTabPanels',
    extends: BaseComponent,
    props: {},
    style: TabPanelsStyle,
    provide() {
        return {
            $pcTabPanels: this,
            $parentInstance: this
        };
    }
};
</script>
