import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'made-with-love',
  templateUrl: './made-with-love.component.html',
  styleUrls: ['./made-with-love.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MadeWithLoveComponent implements OnInit {
  @Input() public name: string;

  @Input() public url: string;

  @Input() public color = 'red';

  @Input() public size = 1;

  ngOnInit() {
    if (!this.name || this.name.length === 0) {
      console.error(`Name attribute must be provided!`);
    }
  }
}
