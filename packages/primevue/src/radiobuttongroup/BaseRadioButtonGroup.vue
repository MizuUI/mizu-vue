<script>
import RadioButtonGroupStyle from '@mizuui/mizu-vue/radiobuttongroup/style';
import BaseEditableHolder from '@primevue/core/baseeditableholder';

export default {
    name: 'BaseRadioButtonGroup',
    extends: BaseEditableHolder,
    style: RadioButtonGroupStyle,
    provide() {
        return {
            $pcRadioButtonGroup: this,
            $parentInstance: this
        };
    }
};
</script>
