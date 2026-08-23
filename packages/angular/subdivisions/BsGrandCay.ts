// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bs-grand-cay',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m2.64 7.765-.7.14a.814.814 0 0 0-.51 1.26l.522.756a1 1 0 0 0 .79.432l.905.029a1 1 0 0 0 .961-.628l.254-.633a1 1 0 0 1 .453-.509l2.02-1.09a.6.6 0 0 0-.116-1.104L4.721 5.68a.6.6 0 0 0-.697.29l-.702 1.291a1 1 0 0 1-.683.503Zm4.115 3.592-.036-.053a.962.962 0 0 1 .71-1.5l1.76-.155a.6.6 0 0 1 .608.822l-.323.8a1 1 0 0 1-1.033.62l-.965-.103a1 1 0 0 1-.72-.431Zm14.025 6.777-4.7-1.936a.902.902 0 0 1 .621-1.692l4.878 1.574a1 1 0 0 1 .54 1.482l-.11.178a1 1 0 0 1-1.23.394Z"/></svg>`,
})
export class BsGrandCay {
  protected readonly b = inject(GeoIconBase);
}
