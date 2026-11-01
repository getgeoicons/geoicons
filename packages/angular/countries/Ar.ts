// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m6.642 18.619.956-3.633a2 2 0 0 0 .063-.622l-.159-2.808a2 2 0 0 1 .118-.798l.98-2.683a2 2 0 0 0 .083-1.069L8.51 6.12a2 2 0 0 1 .093-1.091l1.182-3.12a1 1 0 0 1 .894-.646l1.053-.044a1 1 0 0 1 .78.326l1.375 1.51a1 1 0 0 0 1.098.26l1.174-.452a.818.818 0 0 1 .717 1.462l-1.624.983a1 1 0 0 0-.456.63l-.39 1.677a1 1 0 0 0 .144.784l.37.55a1 1 0 0 1 .01 1.1l-.148.23a1 1 0 0 1-.72.45l-1.053.13a1 1 0 0 0-.75.5l-2.021 3.574a1 1 0 0 0 .032 1.038l.188.288a1 1 0 0 1-.012 1.11l-.671.982a1 1 0 0 0-.072 1.006l1.262 2.563a.6.6 0 0 1-.548.864l-1.034-.016a.6.6 0 0 1-.59-.605l.01-1.189a1 1 0 0 0-.495-.871l-1.388-.814a.6.6 0 0 1-.278-.67Z"/></svg>`,
})
export class Ar {
  protected readonly b = inject(GeoIconBase);
}
