// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LakeEyreBasin = ({
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
      <path strokeLinejoin="round" d="m4.117 8.043-2.168.212a.752.752 0 0 0-.225 1.44l1.685.725a.6.6 0 0 1 .081 1.059l-.787.494a.6.6 0 0 0 .165 1.088l1.399.372a1 1 0 0 1 .633.51l1.311 2.55a1 1 0 0 0 .805.54l2.573.218a1 1 0 0 1 .487.176l.808.563a1 1 0 0 1 .405 1.035l-.489 2.217a.687.687 0 0 0 1.223.555l.529-.716a1 1 0 0 1 .882-.404l.887.07a1 1 0 0 0 .851-.364l.286-.349a1 1 0 0 0 .226-.634l-.004-2.89a1 1 0 0 1 .377-.784l1.586-1.262c.125-.1.225-.23.29-.376l1.354-3.047a1 1 0 0 1 .822-.59l2.03-.188a.6.6 0 0 0 .533-.713l-.776-3.961a1 1 0 0 0-.27-.51l-1.062-1.076a.6.6 0 0 0-.813-.038L18.401 5.1a1 1 0 0 1-.522.226l-2.882.353a1 1 0 0 1-.726-.196l-4.31-3.27a.87.87 0 0 0-1.377.504L8.17 4.57a1 1 0 0 1-.792.764l-1.375.258a1 1 0 0 0-.788.752l-.223.935a1 1 0 0 1-.875.764Z"/>
    </svg>
  );
};
