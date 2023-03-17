import { defineComponent } from "vue";
import { Button, Input } from "@arco-design/web-vue";
export default defineComponent({
  setup() {
    return () => (
      <>
        <Button type="primary" shape="round">Primary</Button>
        <Input style={{width:'300px'}} placeholder="Please enter something" allow-clear />
      </>
    )
  }
})