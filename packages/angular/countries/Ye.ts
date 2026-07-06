// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ye',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m2.39 8.606-.936 2.088a.5.5 0 0 0-.04.143l-.202 1.603a.5.5 0 0 0 .014.195l1.587 5.788a.5.5 0 0 0 .482.368h2.111a.5.5 0 0 0 .347-.14l1.273-1.23a.5.5 0 0 1 .347-.14h2.014a.5.5 0 0 0 .195-.039l10.93-4.62a.5.5 0 0 0 .271-.281l.431-1.122a.5.5 0 0 1 .257-.274l1.329-.616-2.264-5.12-6.006.798a.5.5 0 0 0-.158.048l-1.749.875a.5.5 0 0 0-.19.166l-1.577 2.322a.5.5 0 0 1-.707.125l-.825-.597a.5.5 0 0 0-.249-.093l-6.185-.54a.5.5 0 0 0-.5.293Z"/></svg>`,
})
export class Ye {
  protected readonly b = inject(GeoIconBase);
}
