<script>
import ButtonGroupStyle from '@mizuui/mizuvue/buttongroup/style';
import BaseComponent from '@primevue/core/basecomponent';

export default {
    name: 'BaseButtonGroup',
    extends: BaseComponent,
    style: ButtonGroupStyle,
    provide() {
        return {
            $pcButtonGroup: this,
            $parentInstance: this
        };
    }
};
</script>
