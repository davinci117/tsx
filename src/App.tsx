import { defineComponent } from 'vue'
import Test from './components/test'
import './CSS/test.css'
export default defineComponent({
  setup() {
    const list = ['篮球','足球','羽毛球']
    return () => (
      <>
        <div>
          <h1>Hello world!!!</h1>
          <Test></Test>
        </div>
        <div>
          <ul>
            {
              list.map((item)=>{
                return <li key={item}>{item}</li>
              })
            }
          </ul>
        </div>
      </>
    )

  }
})
