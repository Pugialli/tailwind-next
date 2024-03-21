import { Cog, LifeBuoy } from 'lucide-react'
import { NavItem } from '../components/NavItem'
import { Profile } from './Profile'
import { UsedSpaceWidget } from './UsedSpaceWidget'

export function FooterNavigation() {
  return (
    <div className="mt-auto flex flex-col gap-6 ">
      <nav className="space-y-0.5">
        <NavItem title="Support" icon={LifeBuoy} />
        <NavItem title="Settings" icon={Cog} />
      </nav>

      <UsedSpaceWidget />

      <div className="h-px bg-zinc-200" />

      <Profile />
    </div>
  )
}
