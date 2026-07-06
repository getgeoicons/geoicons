// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-lv',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m1.433 12.244-.18 3.283a.5.5 0 0 0 .771.447l2.28-1.473a.5.5 0 0 1 .332-.076l6.344.788a.5.5 0 0 0 .342-.082l1.028-.694a.5.5 0 0 1 .687.125l.7.986a.5.5 0 0 0 .233.178l1.37.512q.106.04.183.12l1.946 1.996a.5.5 0 0 0 .684.03l.896-.772a.5.5 0 0 1 .409-.114l.925.154a.5.5 0 0 0 .456-.162l1.727-1.95a.5.5 0 0 0 .063-.573l-1.551-2.799a.5.5 0 0 1-.04-.393l.579-1.831a.5.5 0 0 0-.06-.426l-.748-1.137a.5.5 0 0 0-.316-.215l-1.551-.323a.5.5 0 0 0-.296.028l-.807.339a.5.5 0 0 1-.514-.078l-3.154-2.634a.5.5 0 0 0-.5-.083l-2.255.865a.5.5 0 0 0-.317.533l.354 2.67a.5.5 0 0 1-.129.406l-1.168 1.26a.5.5 0 0 1-.444.155l-1.42-.223a.5.5 0 0 1-.413-.392l-.246-1.175a.5.5 0 0 0-.203-.308l-.945-.658a.5.5 0 0 1-.214-.388l-.068-1.5-2.6 1.394a.5.5 0 0 0-.21.215l-1.908 3.777a.5.5 0 0 0-.052.198Z"/></svg>`,
})
export class Lv {
  protected readonly b = inject(GeoIconBase);
}
