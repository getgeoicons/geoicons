// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TtTunapunaPiarco = ({
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
      <path strokeLinejoin="round" d="M14.656 20.342a1 1 0 0 0 .71-.197l1.413-1.068a1 1 0 0 1 .36-.172l1.295-.324a1 1 0 0 0 .709-.66l.296-.909a1 1 0 0 0-.282-1.053l-1.166-1.05a1 1 0 0 1-.31-.945l.553-2.68a1 1 0 0 0-.965-1.202l-.637-.009a.756.756 0 0 1-.003-1.511l2.49-.046a1 1 0 0 0 .85-.501l.63-1.098a1 1 0 0 1 .716-.49l.975-.15a.6.6 0 0 0 .51-.594l-.003-1.08a1 1 0 0 0-.157-.537l-.772-1.21a.6.6 0 0 0-.625-.266l-5.697 1.152a1 1 0 0 1-.347.01l-6.113-.92a1 1 0 0 0-.965.41L7.33 4.36a1 1 0 0 0-.183.605l.056 2.058A1 1 0 0 1 6.069 8.04l-2.927-.4a1 1 0 0 0-.6.106l-.921.483a.6.6 0 0 0-.303.681l1.008 3.916a2 2 0 0 1 .02.91l-.378 1.794a2 2 0 0 0-.003.81L2.911 21a.6.6 0 0 0 .6.481l2.513-.05a.6.6 0 0 0 .566-.438l.098-.35a.6.6 0 0 1 .88-.358l.947.55a1 1 0 0 0 1.197-.146l.481-.464a1 1 0 0 1 .801-.275z"/>
    </svg>
  );
};
