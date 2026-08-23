// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BbSaintThomas = ({
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
      <path strokeLinejoin="round" d="m21.026 16.136.619-.657a3 3 0 0 0 .705-1.252l.264-.949-1.718-.732a2 2 0 0 1-.823-.65l-.034-.045a2 2 0 0 1-.392-1.168l-.034-3.03a.6.6 0 0 0-.208-.447l-1.434-1.238a.6.6 0 0 0-.5-.136l-.922.17a.6.6 0 0 1-.653-.338l-.577-1.24a4 4 0 0 0-.378-.646l-1.595-2.22a.6.6 0 0 0-.675-.22l-.96.317a3 3 0 0 1-1.662.063L8.927 1.44a.6.6 0 0 0-.606.199L6.991 3.24a3 3 0 0 1-1.292.906l-2.178.785a.3.3 0 0 0-.189.355l.67 2.653a3 3 0 0 1-.032 1.59l-.065.218a1 1 0 0 1-.754.694l-.907.188a.6.6 0 0 0-.47.681l.133.85a.6.6 0 0 0 .47.494l1.38.291-.143 2.026-1.374-.015a.6.6 0 0 0-.602.527l-.173 1.395a.6.6 0 0 0 .562.673l.261.015a.6.6 0 0 1 .563.667l-.101.885a2 2 0 0 0 .092.87l.448 1.323a1 1 0 0 0 .515.58l1.482.712a.6.6 0 0 0 .711-.146l.516-.59a3 3 0 0 1 1.167-.819l.02-.007a3 3 0 0 1 1.679-.147l.491.098a.6.6 0 0 0 .545-.168l3.869-3.933a1 1 0 0 1 .69-.299l2.267-.053a2 2 0 0 0 1.212-.445l1.624-1.316z"/>
    </svg>
  );
};
