import { defineComponent, reactive } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({ count: 0 });
    const handleClick = () => state.count++;
    return () => (
       <>
        <span> tsx语法：</span>
        <button onClick={handleClick}>
            count: {state.count}
        </button>
       </>
    )
  }
});