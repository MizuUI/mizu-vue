<script>
import StepPanelsStyle from '@mizuui/mizu-vue/steppanels/style';
import BaseComponent from '@primevue/core/basecomponent';

export default {
    name: 'BaseStepPanels',
    extends: BaseComponent,
    style: StepPanelsStyle,
    provide() {
        return {
            $pcStepPanels: this,
            $parentInstance: this
        };
    }
};
</script>
