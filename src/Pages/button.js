import { Route } from 'react-router-dom'

const Button = () => (
  <Route render={({ history}) => (
    <button
      type='button'
      onClick={() => { history.push('/Quiz') }}
    >
      Click Me!
    </button>
  )} />
)