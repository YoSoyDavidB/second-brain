import { ReactNode } from 'react'
import './MenuItem.scss'

//import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg'

export default function MenuItem ({
  icon, title, action, isActive = null,
}: {icon?: ReactNode, title?: string, action?: () => void, isActive?: (() => boolean) | null } ) {
  return <button
      className={`menu-item${isActive && isActive() ? ' is-active' : ''}`}
      onClick={action}
      title={title}
    >
      {icon}
    </button>
}