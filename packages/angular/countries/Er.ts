// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-er',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m1.213 12.212.238 2.265a.5.5 0 0 0 .638.427l1.068-.314a.5.5 0 0 1 .38.041l.755.413a.5.5 0 0 0 .68-.2l.676-1.246a.5.5 0 0 1 .783-.124l1.153 1.092a.5.5 0 0 0 .414.132l3.3-.467a.5.5 0 0 1 .231.022l3.523 1.194a.5.5 0 0 1 .277.232l.86 1.558a.5.5 0 0 0 .238.217l1.692.733a.5.5 0 0 1 .164.114l2.793 2.94a.5.5 0 0 0 .71.016l.656-.636a.5.5 0 0 0 .013-.706l-5.636-5.87a.5.5 0 0 0-.182-.12l-2.68-1.03a.5.5 0 0 1-.259-.225l-.579-1.053a.5.5 0 0 0-.26-.227l-1.586-.6a.5.5 0 0 1-.304-.333L9.363 4.733a.5.5 0 0 0-.039-.097l-.8-1.52a.5.5 0 0 0-.851-.055l-.608.865a.5.5 0 0 1-.142.136L4.589 5.535a.5.5 0 0 1-.304.076l-.908-.069a.5.5 0 0 0-.538.499v2.06a.5.5 0 0 1-.039.195l-1.55 3.67a.5.5 0 0 0-.037.246Z"/></svg>`,
})
export class Er {
  protected readonly b = inject(GeoIconBase);
}
