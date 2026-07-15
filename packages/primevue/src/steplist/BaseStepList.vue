<script>
import StepListStyle from '@mizuui/mizuvue/steplist/style';
import BaseComponent from '@primevue/core/basecomponent';

export default {
    name: 'BaseStepList',
    extends: BaseComponent,
    style: StepListStyle,
    provide() {
        return {
            $pcStepList: this,
            $parentInstance: this
        };
    }
};
</script>
