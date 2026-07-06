// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ci',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m5.489 17.968-.242 4.023a.5.5 0 0 0 .696.49l4.699-2.014a.5.5 0 0 1 .142-.037l6.09-.67a.5.5 0 0 1 .132.004l3.718.58a.5.5 0 0 0 .577-.51l-.035-1.013a.5.5 0 0 0-.368-.465l-.477-.13a.5.5 0 0 1-.358-.384l-.589-2.912a.5.5 0 0 1 .047-.332l2.376-4.526a.5.5 0 0 0 .052-.303l-.57-3.961a.5.5 0 0 0-.133-.273l-1.122-1.18a.5.5 0 0 0-.25-.142l-1.847-.427a.5.5 0 0 0-.419.092l-1.427 1.104a.5.5 0 0 1-.442.086l-1.354-.383a.5.5 0 0 1-.315-.266l-.857-1.796a.5.5 0 0 0-.35-.275l-.965-.198a.5.5 0 0 0-.25.013l-1.46.456a.5.5 0 0 1-.648-.445l-.03-.48a.5.5 0 0 0-.527-.466l-.523.029a.5.5 0 0 0-.354.175L6.955 2.788a.5.5 0 0 1-.598.127l-1.206-.58a.5.5 0 0 0-.543.071L3.386 3.457a.5.5 0 0 0-.156.514l1.118 4.006a.5.5 0 0 1-.454.633l-.64.035a.5.5 0 0 0-.435.31l-.192.468a.5.5 0 0 0 .192.611l.342.22a.5.5 0 0 1 .115.738l-.988 1.198a.5.5 0 0 0-.114.295l-.132 2.793a.5.5 0 0 0 .242.453l2.963 1.778a.5.5 0 0 1 .242.459Z"/></svg>`,
})
export class Ci {
  protected readonly b = inject(GeoIconBase);
}
