<script>
import TabListStyle from '@mizuui/mizuvue/tablist/style';
import BaseComponent from '@primevue/core/basecomponent';

export default {
    name: 'BaseTabList',
    extends: BaseComponent,
    props: {},
    style: TabListStyle,
    provide() {
        return {
            $pcTabList: this,
            $parentInstance: this
        };
    }
};
</script>
