// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bd',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M7.371 19.112 6.047 12.66a2 2 0 0 1 .086-1.105l.241-.642a1 1 0 0 0-.58-1.285l-1.231-.47a.78.78 0 0 1 .072-1.48l2.203-.604a.887.887 0 0 0 .222-1.616L4.854 4.134a.8.8 0 0 1-.352-.925l.435-1.39a.6.6 0 0 1 .797-.377l3.714 1.491a1 1 0 0 1 .627.948l-.034 1.73a.8.8 0 0 0 .567.782l1.115.338a3 3 0 0 0 1.093.121l4.416-.328a2 2 0 0 1 1.042.206l.566.283a1 1 0 0 1 .433 1.368l-.416.773a2 2 0 0 1-.965.887l-2.446 1.06a1 1 0 0 0-.575 1.148l.51 2.16a.838.838 0 0 0 1.647-.085l.203-1.559a.773.773 0 0 1 1.522-.058l.9 4.293a11 11 0 0 1 .218 1.695l.104 2.029a1 1 0 0 1-.248.71l-.641.73a.6.6 0 0 1-.974-.101L17.1 20.265a2 2 0 0 1-.225-.621l-.291-1.588a1 1 0 0 0-1.581-.622l-1.173.874a3 3 0 0 1-1.048.5L8.6 19.88a1 1 0 0 1-1.228-.768Z"/></svg>`,
})
export class Bd {
  protected readonly b = inject(GeoIconBase);
}
