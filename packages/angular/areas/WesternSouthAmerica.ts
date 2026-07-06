// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-western-south-america',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m10.39 4.045-.057-.726a1 1 0 0 1 .12-.562l.152-.275a1 1 0 0 1 .314-.345l.56-.381a.6.6 0 0 1 .934.426l.031.264c.046.388.34.7.725.77a.89.89 0 0 1 .698.632l.073.262a1 1 0 0 1-.065.712l-.643 1.307a1 1 0 0 1-.513.482l-.14.058a1 1 0 0 0-.613.998l.002.029a1 1 0 0 0 .783.901l.152.034a1 1 0 0 1 .782.898l.056.718a1 1 0 0 0 .09.341l.676 1.465a1 1 0 0 1 .079.584l-.481 2.874a1 1 0 0 0-.014.153l-.049 4.133a.6.6 0 0 0 .284.518l.866.535-.022 2.088-.906-.18a1 1 0 0 1-.208-.066l-.577-.255a1 1 0 0 1-.43-.363l-.45-.677a1 1 0 0 1-.162-.474l-.108-1.377-.032-2.645.328-5.022a1 1 0 0 0-.498-.931l-.92-.53a1 1 0 0 1-.34-.322L9.363 7.78a1 1 0 0 1-.16-.596l.048-.95a1 1 0 0 1 .208-.561l.725-.937a1 1 0 0 0 .206-.691Z"/></svg>`,
})
export class WesternSouthAmerica {
  protected readonly b = inject(GeoIconBase);
}
