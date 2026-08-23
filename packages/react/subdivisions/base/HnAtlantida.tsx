// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HnAtlantida = ({
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
      <path strokeLinejoin="round" d="M21.169 9.97a1 1 0 0 0-.925-.357l-6.095.92a1 1 0 0 1-.356-.01L7.96 9.29a1 1 0 0 0-.719.119l-.57.34a1 1 0 0 1-1.264-.2l-.901-1.03a1 1 0 0 0-.76-.341l-.841.006a1 1 0 0 0-.854.492l-.54.917a1 1 0 0 0 .016 1.043l2.038 3.219a1 1 0 0 0 1.09.434l.963-.243a1 1 0 0 1 1.075.411l.445.662a1 1 0 0 0 .726.436l2.195.23a1 1 0 0 0 .69-.186l2.353-1.704a1 1 0 0 1 .556-.19l7.772-.24a1 1 0 0 0 .849-.525l.204-.378a1 1 0 0 0-.105-1.106z"/>
    </svg>
  );
};
