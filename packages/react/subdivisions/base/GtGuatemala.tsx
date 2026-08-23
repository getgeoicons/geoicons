// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GtGuatemala = ({
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
      <path strokeLinejoin="round" d="M15.423 3.58a.8.8 0 0 1-.598-.62l-.2-.998a.8.8 0 0 0-.918-.632l-5.365.913a2 2 0 0 0-.593.2l-1.56.819a1 1 0 0 0-.524.731l-.118.759a1 1 0 0 1-.264.536L3.846 6.796a.6.6 0 0 0-.06.755l.444.643a.6.6 0 0 0 .526.258l1.046-.055a1 1 0 0 1 .91.485l.916 1.532a1 1 0 0 1-.46 1.43l-.276.12a1 1 0 0 0-.594.793l-.245 1.956a1 1 0 0 0 .348.89L7.99 16.94a1 1 0 0 1 .342.923l-.295 1.847a1 1 0 0 0 .018.403l.5 1.972a.6.6 0 0 0 .843.393l1.398-.68a1 1 0 0 0 .509-.573l.544-1.584a1 1 0 0 1 .283-.424l1.4-1.238a1 1 0 0 0 .294-.458l.678-2.222a.6.6 0 0 1 .48-.418l2.636-.414a1 1 0 0 0 .76-.586l1.885-4.304a.6.6 0 0 0-.274-.774l-2.467-1.27a1 1 0 0 1-.536-.778l-.244-2.18a1 1 0 0 0-.76-.86z"/>
    </svg>
  );
};
