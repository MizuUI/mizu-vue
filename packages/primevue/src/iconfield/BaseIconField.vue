<script>
import IconFieldStyle from '@mizuui/mizu-vue/iconfield/style';
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
