// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ca-new-brunswick',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M22.84 15.448a.737.737 0 0 0-.184-1.414l-1.959-.254a1 1 0 0 1-.727-.475l-1.263-2.09a2 2 0 0 1-.258-.69l-.434-2.485a1 1 0 0 1 .159-.736l.653-.958 1.558-2.03a.73.73 0 0 0-.975-1.055L16.153 5.38a.9.9 0 0 1-1.329-.427l-.288-.737a1 1 0 0 0-.527-.55l-1.275-.564a1 1 0 0 0-.74-.028L9.01 4.134a1 1 0 0 1-.91-.124l-.804-.565a.6.6 0 0 0-.372-.11l-2.661.12a.6.6 0 0 0-.573.594l-.013 1.263a1 1 0 0 1-.584.9l-1.737.792a.6.6 0 0 0-.19.955l.35.376a.6.6 0 0 0 .604.168l1.738-.498a1 1 0 0 1 .801.111l1.276.789a1 1 0 0 1 .475.866l-.113 6.99a.6.6 0 0 0 .368.562l.802.337a.6.6 0 0 1 .364.62l-.096.865a1 1 0 0 0 .65 1.05l1.859.678a2 2 0 0 0 1.273.032l3.07-.945a5 5 0 0 0 1.191-.546l4.698-2.953a3 3 0 0 1 .463-.237z"/></svg>`,
})
export class CaNewBrunswick {
  protected readonly b = inject(GeoIconBase);
}
