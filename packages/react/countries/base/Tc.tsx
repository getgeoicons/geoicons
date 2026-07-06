// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Tc = ({
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
      <path strokeLinejoin="round" d="M3.845 9.985 1.808 7.868 1.266 11a.5.5 0 0 0 .287.541l1.365.618a.5.5 0 0 0 .286.038l2.68-.435a.5.5 0 0 0 .28-.147l2.392-2.482a.5.5 0 0 1 .59-.097l2.198 1.143a.5.5 0 0 1 .173.148l1.215 1.658a.5.5 0 0 0 .464.2l1.703-.208a.5.5 0 0 1 .318.067l2.631 1.579a.5.5 0 0 0 .2.068l1.305.15a.5.5 0 0 1 .443.496v.784a.5.5 0 0 0 .128.334l.415.461a.5.5 0 0 1 .111.462l-.24.912a.5.5 0 0 0 .081.424l.327.443a.5.5 0 0 0 .403.204h.572a.5.5 0 0 0 .5-.5v-1.8q0-.085.03-.167l.644-1.815a.5.5 0 0 0 .029-.188l-.062-1.456a.5.5 0 0 0-.5-.48h-1.14a.5.5 0 0 1-.2-.04l-2.168-.947a.5.5 0 0 1-.248-.235l-.715-1.43a.5.5 0 0 0-.424-.276l-3.187-.15a.5.5 0 0 1-.43-.288l-.761-1.638a.5.5 0 0 0-.162-.196l-.906-.652a.5.5 0 0 0-.202-.087l-1.917-.351a.5.5 0 0 0-.268.024l-1.06.403a.5.5 0 0 0-.265.234L7.55 7.52a.5.5 0 0 1-.082.114L5.202 9.985a.5.5 0 0 1-.36.153h-.636a.5.5 0 0 1-.36-.153Z"/>
    </svg>
  );
};
