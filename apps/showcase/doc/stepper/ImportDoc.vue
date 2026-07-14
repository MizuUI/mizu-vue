<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import Stepper from '@mizuui/mizu-vue/stepper';
import StepList from '@mizuui/mizu-vue/steplist';
import StepPanels from '@mizuui/mizu-vue/steppanels';
import StepItem from '@mizuui/mizu-vue/stepitem';
import Step from '@mizuui/mizu-vue/step';
import StepPanel from '@mizuui/mizu-vue/steppanel';
`
            }
        };
    }
};
</script>
