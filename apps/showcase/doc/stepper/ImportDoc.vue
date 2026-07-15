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
import Stepper from '@mizuui/mizuvue/stepper';
import StepList from '@mizuui/mizuvue/steplist';
import StepPanels from '@mizuui/mizuvue/steppanels';
import StepItem from '@mizuui/mizuvue/stepitem';
import Step from '@mizuui/mizuvue/step';
import StepPanel from '@mizuui/mizuvue/steppanel';
`
            }
        };
    }
};
</script>
