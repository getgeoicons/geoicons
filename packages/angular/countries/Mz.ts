// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-mz',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m8.967 13.581-2.056 2.995a.5.5 0 0 0-.067.425l.687 2.307a.5.5 0 0 1 .02.13l.087 3.362 1.327-.008v-1.543a.5.5 0 0 1 .289-.453l2.487-1.162a.5.5 0 0 0 .288-.435l.096-2.614a.5.5 0 0 0-.04-.214l-.904-2.125a.5.5 0 0 1 .089-.53l2.555-2.833a.5.5 0 0 1 .162-.119l3.221-1.483a.5.5 0 0 0 .224-.203l1.053-1.82a.5.5 0 0 0 .067-.278l-.321-5.78-3.732 1.55a.5.5 0 0 1-.215.038l-2.896-.138-.222 2.377 1.355 1.57a.5.5 0 0 1 .098.478l-.766 2.407a.25.25 0 0 1-.436.077l-.865-1.126a.5.5 0 0 1-.102-.342l.105-1.393a.5.5 0 0 0-.287-.49l-.966-.454a.5.5 0 0 0-.372-.021L5.44 6.909l.274 1.483 2.792.764a.5.5 0 0 1 .367.458l.182 3.66a.5.5 0 0 1-.088.307Z"/></svg>`,
})
export class Mz {
  protected readonly b = inject(GeoIconBase);
}
