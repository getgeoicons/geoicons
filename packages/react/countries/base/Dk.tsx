// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Dk = ({
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
      <path strokeLinejoin="round" d="m7.672 20.438-1.96-.583a.5.5 0 0 1-.358-.492l.052-2.113a.5.5 0 0 0-.258-.45l-1.435-.79a.5.5 0 0 1-.225-.618l.322-.837a.5.5 0 0 0 .023-.28l-.337-1.629a.5.5 0 0 1-.008-.155l.49-4.505a.5.5 0 0 1 .072-.21l1.016-1.64a.5.5 0 0 1 .391-.236l2.548-.172a.5.5 0 0 0 .39-.233l1.584-2.53a.5.5 0 0 1 .178-.17l2.17-1.226a.25.25 0 0 1 .351.318l-.684 1.564a.5.5 0 0 0-.037.269l.191 1.394a.5.5 0 0 1-.059.313l-.825 1.471a.5.5 0 0 0-.064.267l.083 1.864a.5.5 0 0 0 .405.47l1.415.27a.5.5 0 0 1 .357.71l-.588 1.212a.5.5 0 0 1-.486.28l-.867-.062a.5.5 0 0 0-.535.538l.084 1.056a.5.5 0 0 1-.177.422l-1.297 1.092a.5.5 0 0 0-.162.255l-.757 2.873a.5.5 0 0 0 .184.528l1.2.897a.25.25 0 0 1-.098.445l-2.043.433a.5.5 0 0 1-.246-.01Z"/><path strokeLinejoin="round" d="m11.532 15.884-.671.792a.5.5 0 0 0 .055.703l1.167 1.003a.5.5 0 0 0 .657-.005l.515-.454a.5.5 0 0 0 .068-.676l-1.01-1.341a.5.5 0 0 0-.781-.022Zm5.906 6.734-2.52-.947a.5.5 0 0 1-.3-.623l.155-.473a.5.5 0 0 1 .605-.328l2.61.703a.5.5 0 0 1 .343.644l-.243.717a.5.5 0 0 1-.65.307Zm1.694-10.183-4.363 2.246a.5.5 0 0 0-.25.59l.78 2.562a.5.5 0 0 0 .283.314l1.88.803a.5.5 0 0 0 .517-.076l1.504-1.256a.5.5 0 0 0 .124-.614l-.353-.68a.5.5 0 0 1 .228-.681l.884-.421a.5.5 0 0 0 .284-.48l-.097-1.686a.5.5 0 0 0-.357-.45l-.694-.206a.5.5 0 0 0-.37.035Z"/>
    </svg>
  );
};
