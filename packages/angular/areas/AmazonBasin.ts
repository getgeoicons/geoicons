// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-amazon-basin',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M3.988 15.718 1.386 11.31a1 1 0 0 1-.125-.676l.386-2.275a1 1 0 0 1 .171-.412l.862-1.212a1 1 0 0 1 .352-.307l.52-.271a1 1 0 0 1 .8-.055l1.168.418a1 1 0 0 0 .838-.077l.819-.474a1 1 0 0 1 .564-.133l1.439.09a1 1 0 0 0 .48-.09l2.51-1.152a.6.6 0 0 1 .848.5l.042.572a1 1 0 0 0 1.174.91l1.22-.219a1 1 0 0 0 .807-.806l.022-.12a.982.982 0 0 1 1.925-.032l.298 1.376a1 1 0 0 0 .6.716l3.194 1.3a.6.6 0 0 1 .35.723l-.321 1.108a1 1 0 0 1-.852.716l-.352.039a1 1 0 0 0-.835.662l-.096.276a1 1 0 0 0-.046.482l.453 2.96a.6.6 0 0 1-.356.642l-3.296 1.424a.6.6 0 0 1-.78-.296l-.625-1.33a.6.6 0 0 0-.613-.34l-1.262.147a.6.6 0 0 0-.485.368l-.815 1.985a1 1 0 0 1-.47.512l-1.102.561a.6.6 0 0 1-.593-.027l-1.041-.656a1 1 0 0 1-.361-.398l-.968-1.93a1 1 0 0 0-.345-.388l-.131-.086a1 1 0 0 0-1.253.126l-.09.089a.6.6 0 0 1-.579.153l-.848-.23a1 1 0 0 1-.6-.456Z"/></svg>`,
})
export class AmazonBasin {
  protected readonly b = inject(GeoIconBase);
}
