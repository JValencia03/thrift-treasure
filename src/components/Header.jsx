import { Filters } from './Filters'
import './Header.css'

export function Header () {
  return (
    <header>
      <h1 className='thrift-title'>Thrift <span className='treasure-title'>Treasure</span></h1>
      <Filters />
    </header>
  )
}
