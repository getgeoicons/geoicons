// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-es',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path fill-rule="evenodd" stroke-linejoin="round" d="M2.075 6.126a.5.5 0 0 1 .077.288l-.026.63a.5.5 0 0 0 .527.52L5.665 7.4a.5.5 0 0 1 .409.175l.425.5a.5.5 0 0 1-.035.685l-.814.781a.5.5 0 0 0-.153.366l.02 1.912a.5.5 0 0 1-.269.449l-.612.319a.5.5 0 0 0-.245.594l.818 2.584a.5.5 0 0 1-.004.313l-.49 1.426a.5.5 0 0 0 .418.66l.36.039a.5.5 0 0 1 .34.19l1.495 1.918a.5.5 0 0 0 .71.082l1.325-1.075a.5.5 0 0 1 .313-.111l3.583-.012a.5.5 0 0 0 .43-.247l.627-1.073a.5.5 0 0 1 .268-.22l1.12-.39a.5.5 0 0 0 .332-.402l.111-.787a.5.5 0 0 1 .196-.33l.939-.703a.5.5 0 0 0 .138-.641l-.66-1.201a.5.5 0 0 1 .034-.534l2.056-2.845a.5.5 0 0 1 .191-.16l3.431-1.622a.5.5 0 0 0 .282-.515l-.096-.757a.5.5 0 0 0-.594-.427l-1.154.23a.5.5 0 0 1-.295-.03l-2.087-.891a.5.5 0 0 0-.209-.04l-1.89.045a.5.5 0 0 1-.313-.101l-1.607-1.215a.5.5 0 0 0-.425-.086l-.756.193a.5.5 0 0 1-.27-.006l-1.4-.43a.5.5 0 0 0-.182-.02l-2.44.171a.5.5 0 0 1-.119-.005l-4.912-.838a.5.5 0 0 0-.325.055L1.664 4.484a.5.5 0 0 0-.18.705z" clip-rule="evenodd"/></svg>`,
})
export class Es {
  protected readonly b = inject(GeoIconBase);
}
