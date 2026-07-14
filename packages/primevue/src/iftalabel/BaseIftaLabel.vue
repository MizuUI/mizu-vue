<script>
import IftaLabelStyle from '@mizuui/mizu-vue/iftalabel/style';
import BaseComponent from '@primevue/core/basecomponent';

export default {
    name: 'BaseIftaLabel',
    extends: BaseComponent,
    style: IftaLabelStyle,
    provide() {
        return {
            $pcIftaLabel: this,
            $parentInstance: this
        };
    }
};
</script>
