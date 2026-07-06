// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Gl = ({
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
      <path strokeLinejoin="round" d="m12.177 20.465-.35 1.452a.75.75 0 0 1-1.039.507l-.178-.08a1 1 0 0 1-.34-.254l-.642-.738a1 1 0 0 1-.206-.374l-.342-1.164a1 1 0 0 1-.03-.43l.147-.98a1 1 0 0 0-.05-.491l-.628-1.72a1 1 0 0 1-.06-.343v-2.113a1 1 0 0 0-.187-.582l-.506-.708a1 1 0 0 0-.648-.405l-1.268-.213a1 1 0 0 1-.728-.538l-.608-1.209a.768.768 0 0 1 .505-1.09l.587-.144a.952.952 0 0 0 .594-1.41l-.015-.025a1 1 0 0 1 .162-1.225l.38-.372a1 1 0 0 0 .275-.484l.149-.627a1 1 0 0 1 .363-.562l.026-.02a1 1 0 0 1 .457-.196l1.414-.22a1 1 0 0 0 .76-.581l.133-.297a1 1 0 0 1 .46-.485l1.882-.958a1 1 0 0 1 .31-.098l.351-.051a1 1 0 0 1 .492.052l1.411.523a1 1 0 0 1 .455.341l.602.81a1 1 0 0 1 .195.529l.057.83a.804.804 0 0 0 1.25.612l.337-.226a.5.5 0 0 1 .612.042l.488.434a.5.5 0 0 1 .052.694l-2.181 2.619a1 1 0 0 0-.003 1.277l.2.241a1 1 0 0 1 .212.82l-.123.66a1 1 0 0 0 .032.49l.16.5a1 1 0 0 1-.195.96l-.538.623a1 1 0 0 0-.24.742l.113 1.27a1 1 0 0 1-.243.745l-.589.676a1 1 0 0 1-.463.3l-.773.235a1 1 0 0 0-.58.465l-.34.603a1 1 0 0 1-.415.398l-.599.307a1 1 0 0 0-.516.656Z"/>
    </svg>
  );
};
