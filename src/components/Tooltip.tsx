import * as RadixTooltip from '@radix-ui/react-tooltip'
import type { ReactNode } from 'react'

// Shows on hover and keyboard focus, flips to stay on screen, and is announced by screen readers.
// Wrap the app (or a section) in <TooltipProvider> once.
export const TooltipProvider = ({ children }: { children: ReactNode }) => (
  <RadixTooltip.Provider delayDuration={250} skipDelayDuration={300}>
    {children}
  </RadixTooltip.Provider>
)

type Props = {
  content: ReactNode
  children: ReactNode
  side?: 'top' | 'right' | 'bottom' | 'left'
}

export default function Tooltip({ content, children, side = 'bottom' }: Props) {
  return (
    <RadixTooltip.Root>
      <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <RadixTooltip.Content
          side={side}
          sideOffset={8}
          collisionPadding={8}
          className="tooltip z-[60] rounded-md border border-white/10 bg-surface px-2.5 py-1.5 text-xs font-medium text-slate-100 shadow-lg shadow-black/20"
        >
          {content}
          <RadixTooltip.Arrow className="fill-surface" width={10} height={5} />
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  )
}
