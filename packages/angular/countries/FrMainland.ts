// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-fr-mainland',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m6.968 19.244-.609.89a.5.5 0 0 0 .306.77l7.097 1.555a.5.5 0 0 0 .604-.542l-.082-.768a.5.5 0 0 1 .247-.486l1.155-.667a.5.5 0 0 1 .42-.037l3.07 1.11a.5.5 0 0 0 .504-.097l1.965-1.763a.5.5 0 0 0-.092-.81l-.874-.484a.5.5 0 0 1-.256-.478l.24-2.984a.5.5 0 0 0-.25-.474l-.87-.497a.5.5 0 0 1-.092-.801l2.11-1.952a.5.5 0 0 0 .139-.223l.962-3.186a.5.5 0 0 0-.311-.616l-5.035-1.785a.5.5 0 0 1-.157-.091l-3.84-3.272a.5.5 0 0 0-.437-.106l-.689.159a.5.5 0 0 0-.387.48l-.019 1.543a.5.5 0 0 1-.164.364L9.648 5.789a.5.5 0 0 1-.497.103L6.89 5.12a.5.5 0 0 0-.658.537l.207 1.617a.5.5 0 0 1-.356.543L4.98 8.14a.5.5 0 0 1-.52-.155l-.463-.541c-.13-.153-.338-.213-.53-.153l-1.737.545a.5.5 0 0 0-.309.677l.504 1.16a.5.5 0 0 0 .384.296l2.178.33a.5.5 0 0 1 .381.29l.64 1.436a.5.5 0 0 0 .136.18l1.697 1.423a.5.5 0 0 1 .176.437c-.089.81-.355 3.295-.463 4.929a.5.5 0 0 1-.086.25Z"/></svg>`,
})
export class FrMainland {
  protected readonly b = inject(GeoIconBase);
}
