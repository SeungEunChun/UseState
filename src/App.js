import { useState } from 'react';
import gnbdb from './data/gnb.json'
function App() {
  const [tabvar, settab] = useState(0);
  const myreact = (el) => {
    alert(el)
  }
  return (
    <div>
      <ul className='d-flex'>
        {
          gnbdb.map((el, idx) => {
            return (
              <>
                <li onClick={() => { settab(idx); }}>{el.product}</li>
                {tabvar === idx && <div>
                  {idx}
                </div>
                }
              </>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
