// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-nu',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m4.08 15.609-.73-.917a.687.687 0 0 1 .207-1.029l1.915-1.053a1 1 0 0 0 .335-.3l.42-.597a1 1 0 0 0 .183-.576v-.825a1 1 0 0 0-.052-.319l-.583-1.73a1 1 0 0 1-.012-.6l.187-.634a1 1 0 0 1 .294-.465l1.363-1.213a1 1 0 0 0 .243-.33l.736-1.603a1 1 0 0 1 .298-.375l1.28-.987a1 1 0 0 1 .417-.19l1.001-.198a1 1 0 0 0 .172-.05l.889-.349a1 1 0 0 1 .365-.069h.706a1 1 0 0 1 .293.044l1.185.363a1 1 0 0 0 .293.044h.565a1 1 0 0 1 .404.085l.539.238a1 1 0 0 1 .452.398l.452.75a1 1 0 0 1 .144.516v1.349a1 1 0 0 0 .096.427l.786 1.664a1 1 0 0 1 .079.612l-.157.836a1 1 0 0 0 .117.685l1.69 2.918a1 1 0 0 1 .094.78l-.214.734a1 1 0 0 1-.143.297l-1.996 2.831a1 1 0 0 1-.154.172l-2.918 2.586a1 1 0 0 0-.211.264l-.842 1.519a1 1 0 0 1-.875.515H12.7a1 1 0 0 0-.468.116l-1.255.663a1 1 0 0 1-.761.072l-.328-.1a1 1 0 0 1-.362-.201L8.32 21.329a1 1 0 0 0-.986-.188l-.313.11a.86.86 0 0 1-.704-.064l-.046-.025a.831.831 0 0 1 .127-1.505.83.83 0 0 0 .54-.89l-.026-.199a1 1 0 0 0-.135-.385l-.413-.683a1 1 0 0 0-.243-.273l-1.871-1.45a1 1 0 0 1-.17-.168Z"/></svg>`,
})
export class Nu {
  protected readonly b = inject(GeoIconBase);
}
