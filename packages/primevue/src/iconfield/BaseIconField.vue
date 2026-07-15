<script>
import IconFieldStyle from '@mizuui/mizuvue/iconfield/style';
import BaseComponent from '@primevue/core/basecomponent';

export default {
    name: 'BaseIconField',
    extends: BaseComponent,
    style: IconFieldStyle,
    provide() {
        return {
            $pcIconField: this,
            $parentInstance: this
        };
    }
};
</script>
