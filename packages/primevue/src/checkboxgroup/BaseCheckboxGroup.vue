<script>
import CheckboxGroupStyle from '@mizuui/mizuvue/checkboxgroup/style';
import BaseEditableHolder from '@primevue/core/baseeditableholder';

export default {
    name: 'BaseCheckboxGroup',
    extends: BaseEditableHolder,
    style: CheckboxGroupStyle,
    provide() {
        return {
            $pcCheckboxGroup: this,
            $parentInstance: this
        };
    }
};
</script>
