<script>
import TextareaStyle from '@mizuui/mizu-vue/textarea/style';
import BaseInput from '@primevue/core/baseinput';

export default {
    name: 'BaseTextarea',
    extends: BaseInput,
    props: {
        autoResize: Boolean
    },
    style: TextareaStyle,
    provide() {
        return {
            $pcTextarea: this,
            $parentInstance: this
        };
    }
};
</script>
