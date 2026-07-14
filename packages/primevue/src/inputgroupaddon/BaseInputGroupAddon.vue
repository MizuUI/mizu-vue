<script>
import InputGroupAddonStyle from '@mizuui/mizu-vue/inputgroupaddon/style';
import BaseComponent from '@primevue/core/basecomponent';

export default {
    name: 'BaseInputGroupAddon',
    extends: BaseComponent,
    style: InputGroupAddonStyle,
    provide() {
        return {
            $pcInputGroupAddon: this,
            $parentInstance: this
        };
    }
};
</script>
