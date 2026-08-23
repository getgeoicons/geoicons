// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MxOaxaca = ({
  size = 24,
  strokeWidth = 1,
  'aria-label': ariaLabel,
  role,
  ...props
}: Props) => {
  const uid = useId();
  // Compliance nudge: warns once if icons render without a licensed <IconProvider>.
  // noteIconRender is a plain guarded fn (no client-only React API), so it does NOT
  // taint this as a Client Component — it no-ops on the server (window guard) and
  // only schedules a deferred client-side check. Do NOT wrap in useEffect (that would
  // force "use client" and break RSC/SSG consumers like the site).
  noteIconRender();
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      fill="none"
      role={ariaLabel ? (role ?? 'img') : role}
      aria-labelledby={ariaLabel ? `${uid}-title` : undefined}
      aria-hidden={ariaLabel ? undefined : true}
      {...props}
    >
      {ariaLabel && <title id={`${uid}-title`}>{ariaLabel}</title>}
      <path strokeLinejoin="round" d="M22.67 12.524a.3.3 0 0 0-.258-.399l-4.085-.337a.6.6 0 0 1-.46-.28l-1.102-1.77a.6.6 0 0 0-.822-.194l-.654.4a1 1 0 0 1-1.024.01l-.143-.083a1 1 0 0 1-.49-.979L13.7 8.3a1 1 0 0 0-.864-1.106l-.244-.032a1 1 0 0 1-.757-.53l-.654-1.259a1 1 0 0 0-.672-.515l-.074-.017a.8.8 0 0 0-.921.499l-.374.988a1 1 0 0 1-.65.605l-1.95.579a.6.6 0 0 1-.662-.232l-.407-.583a.6.6 0 0 0-.548-.254l-.228.022a.6.6 0 0 0-.483.333l-.412.839a1 1 0 0 1-.77.55l-.803.104a.95.95 0 0 0-.7 1.423l1.578 2.703a1 1 0 0 1-.034 1.062l-1.439 2.14a.6.6 0 0 0 .299.9l6.489 2.288c.461.162.941.268 1.429.314l.486.046a6 6 0 0 0 2.862-.43l2.738-1.134a6 6 0 0 1 2.161-.456l.635-.014a6 6 0 0 1 1.53.163l1.443.345a.3.3 0 0 0 .368-.33l-.258-2.039a1 1 0 0 1 .05-.458z"/>
    </svg>
  );
};
