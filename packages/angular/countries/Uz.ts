// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-uz',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m4.329 5.084-2.779.873a.5.5 0 0 0-.35.477v5.783l1.557.27v-1.07a.5.5 0 0 1 .205-.404l1.331-.971a.5.5 0 0 1 .517-.045l1.207.597a.5.5 0 0 1 .272.372l.158 1.027a.5.5 0 0 0 .456.422l1.39.108a.5.5 0 0 1 .432.329l.589 1.636a.5.5 0 0 0 .219.263l4.538 2.641a.5.5 0 0 1 .247.467l-.051.753 1.62.37.655-1.439a.5.5 0 0 0-.039-.483l-1.034-1.562a.25.25 0 0 1 .19-.387l1.16-.088a.5.5 0 0 0 .277-.11l1.379-1.12a.5.5 0 0 1 .5-.076l1.626.648a.5.5 0 0 0 .47-.054l1.458-1.014a.25.25 0 0 0 .016-.398l-2.54-2.088a.5.5 0 0 0-.653.015l-2.326 2.104a.5.5 0 0 1-.457.114l-1.704-.424a.5.5 0 0 1-.364-.365l-.617-2.509a.5.5 0 0 0-.139-.24L12.577 8.38a.5.5 0 0 0-.408-.136l-3.155.39a.5.5 0 0 1-.429-.158L6.413 6.123a.5.5 0 0 0-.118-.094l-1.567-.902a.5.5 0 0 0-.4-.043Z"/></svg>`,
})
export class Uz {
  protected readonly b = inject(GeoIconBase);
}
