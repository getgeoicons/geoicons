// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Us = ({
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
      <path strokeLinejoin="round" d="M12.124 6.127H1.956a.5.5 0 0 0-.24.062l-.249.136a.5.5 0 0 0-.26.45l.091 3.807a.5.5 0 0 0 .052.21l1.216 2.447a.5.5 0 0 0 .178.198l1.097.702a.5.5 0 0 0 .217.076l3.657.388a.5.5 0 0 1 .36.216l.387.568a.5.5 0 0 0 .487.214l.398-.059a.5.5 0 0 1 .432.147l.944.975a.5.5 0 0 0 .84-.212l.105-.367a.5.5 0 0 1 .236-.3l.422-.237a.5.5 0 0 1 .164-.058l2.087-.344a.5.5 0 0 1 .18.003l.912.182a.5.5 0 0 1 .358.284l.811 1.792a.5.5 0 0 0 .672.245l.354-.17a.5.5 0 0 0 .255-.62l-.69-1.92a.5.5 0 0 1 .134-.54l1.65-1.5a.5.5 0 0 0 .148-.244l.453-1.731a.5.5 0 0 1 .282-.331l1.182-.52a.5.5 0 0 0 .153-.106l1.127-1.133a.5.5 0 0 0 .102-.556l-.428-.96a.25.25 0 0 0-.382-.096l-.945.737a.5.5 0 0 1-.19.092l-1.138.277a.5.5 0 0 0-.193.095l-2.043 1.623a.25.25 0 0 1-.395-.127l-.634-2.2a.5.5 0 0 0-.41-.357l-1.266-.18a.5.5 0 0 1-.134-.04l-2.174-.974a.5.5 0 0 0-.204-.044Z"/>
    </svg>
  );
};
