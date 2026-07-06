// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-the-pearl-river-delta',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m3.138 18.552-.182 1.204 3.755-.97a1 1 0 0 0 .457-.26l.4-.4a1 1 0 0 1 .611-.288L9.62 17.7a1 1 0 0 0 .605-.282l.584-.573a1 1 0 0 0 .275-.937l-.265-1.158a1 1 0 0 1-.01-.395l.33-1.896a.548.548 0 0 1 .99-.217l.964 1.399a1 1 0 0 1 .139.839l-.095.336a1 1 0 0 0 .87 1.268l.683.063a1 1 0 0 0 .922-.439l.646-.962a1 1 0 0 1 .514-.392l2.341-.78a1 1 0 0 0 .383-.234l.554-.541a.6.6 0 0 0 .099-.731l-.257-.44a.6.6 0 0 1 .233-.83l1.438-.777a1 1 0 0 0 .312-.263l.181-.232a1 1 0 0 0-.328-1.505l-.18-.093a1 1 0 0 0-.897-.01l-1.488.726a.6.6 0 0 1-.755-.195l-1.37-1.953a1 1 0 0 0-1.519-.14l-1.38 1.35a.6.6 0 0 1-.956-.16l-.34-.678a.6.6 0 0 1 .189-.756l.393-.281a1 1 0 0 0 .419-.814V4.89a.6.6 0 0 0-.644-.598l-.54.04a1 1 0 0 0-.665.323l-.678.743a1 1 0 0 1-.702.325l-.808.03a1 1 0 0 0-.62.245L7.863 7.153a1 1 0 0 1-1.352-.035l-.658-.636a.6.6 0 0 0-.855.022l-.97 1.036a1 1 0 0 1-.767.316l-.412-.015a.6.6 0 0 0-.617.68l.347 2.556a1 1 0 0 0 .12.359l.516.909a1 1 0 0 1-.18 1.218L1.51 15.012a1 1 0 0 0-.311.724v.467a1 1 0 0 0 .563.9l.824.4a1 1 0 0 1 .551 1.05Z"/></svg>`,
})
export class ThePearlRiverDelta {
  protected readonly b = inject(GeoIconBase);
}
