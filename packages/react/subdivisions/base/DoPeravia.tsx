// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DoPeravia = ({
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
      <path strokeLinejoin="round" d="M1.8 15.877a.671.671 0 0 0-.207 1.274l1.46.687a.6.6 0 0 1 .13 1.002l-.56.47a.724.724 0 0 0 .422 1.277l2.612.157a1 1 0 0 0 .463-.083l4.474-1.97a4 4 0 0 1 1.832-.334l9.57.527a.6.6 0 0 0 .631-.555l.127-1.73a1 1 0 0 0-.499-.94l-.86-.494a1 1 0 0 1-.395-.418l-1.514-3.014a1 1 0 0 0-.736-.538l-.2-.032a1 1 0 0 1-.806-.724l-.174-.633a1 1 0 0 1 .349-1.052l.567-.443a1 1 0 0 0 .101-1.484L15.405 3.55a1 1 0 0 0-.732-.303l-.403.006a1 1 0 0 0-.616.224l-1.164.947c-.26.211-.553.378-.867.492L8.226 6.154a1 1 0 0 0-.655.857l-.189 2.293a2 2 0 0 1-.355.984l-.413.589a1 1 0 0 0-.164.76l.157.831a3 3 0 0 1-.086 1.46l-.26.827a1 1 0 0 1-.837.693z"/>
    </svg>
  );
};
