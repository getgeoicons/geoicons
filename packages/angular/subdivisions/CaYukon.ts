// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ca-yukon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M19.201 22.798a.6.6 0 0 0 .556-.829l-.382-.927a.6.6 0 0 0-.63-.367l-1.136.144a.6.6 0 0 1-.654-.436l-.123-.446a1 1 0 0 0-.516-.628l-.916-.459a1 1 0 0 1-.526-.668l-.643-2.768a1 1 0 0 0-.302-.514l-1.902-1.725a.6.6 0 0 1-.19-.532l.174-1.189a.8.8 0 0 0-.327-.767l-.69-.493a.6.6 0 0 1-.25-.457l-.08-1.503a.3.3 0 0 0-.299-.284H8.742a.3.3 0 0 1-.3-.281l-.254-4.112a.6.6 0 0 0-.252-.453L6.16 1.85a2 2 0 0 0-.738-.324l-1.16-.248a.3.3 0 0 0-.363.294l.01 20.426a.3.3 0 0 0 .214.287l1.524.457a.6.6 0 0 0 .17.025z"/></svg>`,
})
export class CaYukon {
  protected readonly b = inject(GeoIconBase);
}
