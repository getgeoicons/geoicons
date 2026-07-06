// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-re',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m21.665 16.914.194 2.367a1 1 0 0 1-.2.688l-.225.294a1 1 0 0 1-.17.176l-.49.391a1 1 0 0 1-.514.213l-5.064.568a1 1 0 0 1-.385-.032l-2.95-.839-2.926-1.15a1 1 0 0 1-.404-.293l-.517-.623a1 1 0 0 0-.608-.349l-1.09-.179a1 1 0 0 1-.74-.558l-.194-.406a1 1 0 0 0-.27-.345l-.823-.674a1 1 0 0 1-.29-.39l-.203-.486a1 1 0 0 1-.066-.531l.12-.808a1 1 0 0 0-.155-.698l-.933-1.41a1 1 0 0 0-.105-.133L1.57 10.544a1 1 0 0 1-.266-.59l-.07-.736a1 1 0 0 1 .168-.654l.127-.187a1 1 0 0 1 .663-.425l.46-.077a1 1 0 0 0 .657-.415l.18-.26a1 1 0 0 0 .178-.637L3.58 5.25a.75.75 0 0 1 .748-.8h.748a1 1 0 0 0 .689-.275l1.147-1.089a1 1 0 0 1 .368-.222l1.135-.384a1 1 0 0 1 .666.009l1.211.446 1.784.408a1 1 0 0 0 .223.025h1.386a1 1 0 0 1 .297.045l1.753.545a1 1 0 0 1 .2.086l1.17.67a1 1 0 0 1 .385.395l.53.987a1 1 0 0 1 .12.473v1.137a1 1 0 0 0 .181.575l2.308 3.281a1 1 0 0 0 .371.32l1.065.532a1 1 0 0 1 .536.713l.14.763a1 1 0 0 1-.08.61l-.903 1.903a1 1 0 0 0-.093.511Z"/></svg>`,
})
export class Re {
  protected readonly b = inject(GeoIconBase);
}
