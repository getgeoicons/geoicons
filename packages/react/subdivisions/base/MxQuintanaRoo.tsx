// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MxQuintanaRoo = ({
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
      <path strokeLinejoin="round" d="M5.693 21.81a.8.8 0 0 0 .7.832l.726.091a.8.8 0 0 0 .799-.405l1.428-2.568a.6.6 0 0 1 .549-.308l1.575.063a.6.6 0 0 1 .573.55l.139 1.65a.602.602 0 0 0 1.178.118l1.896-6.495a4 4 0 0 0 .15-1.413l-.21-2.876a4 4 0 0 1 .464-2.183l.239-.445c.173-.322.39-.62.643-.883l1.855-1.927a2 2 0 0 0 .556-1.281l.029-.537a2 2 0 0 0-.399-1.309l-.758-1.007a.6.6 0 0 0-.552-.235l-1.892.23a.6.6 0 0 0-.527.606l.04 2.293a1 1 0 0 1-.226.652l-2.689 3.28a1 1 0 0 1-.53.337l-1.938.484a1 1 0 0 0-.435.235l-3.899 3.59a.3.3 0 0 0-.038.399l.773 1.047a.6.6 0 0 1 .116.385z"/>
    </svg>
  );
};
