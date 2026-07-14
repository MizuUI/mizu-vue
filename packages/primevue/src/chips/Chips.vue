<script>
import InputChips from '@mizuui/mizu-vue/inputchips';

export default {
    name: 'Chips',
    extends: InputChips,
    mounted() {
        console.warn('Deprecated since v4. Use InputChips component instead.');
    }
};
</script>
