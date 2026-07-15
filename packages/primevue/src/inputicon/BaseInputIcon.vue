<script>
import InputIconStyle from '@mizuui/mizuvue/inputicon/style';
import BaseComponent from '@primevue/core/basecomponent';

export default {
    name: 'BaseInputIcon',
    extends: BaseComponent,
    style: InputIconStyle,
    props: {
        class: null
    },
    provide() {
        return {
            $pcInputIcon: this,
            $parentInstance: this
        };
    }
};
</script>
