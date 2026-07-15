<script>
import InputGroupStyle from '@mizuui/mizuvue/inputgroup/style';
import BaseComponent from '@primevue/core/basecomponent';

export default {
    name: 'BaseInputGroup',
    extends: BaseComponent,
    style: InputGroupStyle,
    provide() {
        return {
            $pcInputGroup: this,
            $parentInstance: this
        };
    }
};
</script>
