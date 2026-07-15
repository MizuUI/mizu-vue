<script>
import InputTextStyle from '@mizuui/mizuvue/inputtext/style';
import BaseInput from '@primevue/core/baseinput';

export default {
    name: 'BaseInputText',
    extends: BaseInput,
    style: InputTextStyle,
    provide() {
        return {
            $pcInputText: this,
            $parentInstance: this
        };
    }
};
</script>
