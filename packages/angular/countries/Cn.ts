// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-cn',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m15.595 18.985.074-.03a4 4 0 0 0 1.782-1.48l.434-.657a1.5 1.5 0 0 0 .112-1.452l-.422-.92a1 1 0 0 1 .094-.998l.986-1.383a2 2 0 0 1 .8-.659l1.037-.472a2 2 0 0 0 .93-.867l1.05-1.938a.6.6 0 0 0-.315-.847l-1.613-.609a1 1 0 0 1-.607-.656l-.175-.6a1 1 0 0 0-.901-.719l-.407-.024a1 1 0 0 0-.858.397L16.545 6.47a.6.6 0 0 0-.01.707l.491.697a.6.6 0 0 1-.23.887l-3.76 1.803a2 2 0 0 1-1.644.038L7.907 9.127a2 2 0 0 1-.974-.88l-.304-.555a.8.8 0 0 0-1.262-.186L3.963 8.882a1 1 0 0 0-.299.68l-.014.422a1 1 0 0 1-.637.898l-.958.372a1.008 1.008 0 0 0 .029 1.886l.574.206a.976.976 0 0 1 .64 1.036 1.464 1.464 0 0 0 .986 1.562l2.745.925a1 1 0 0 0 .669-.01l.597-.223a1 1 0 0 1 1.268.542l.564 1.312a1 1 0 0 0 .848.603l2.783.197a4 4 0 0 0 1.837-.305Z"/></svg>`,
})
export class Cn {
  protected readonly b = inject(GeoIconBase);
}
