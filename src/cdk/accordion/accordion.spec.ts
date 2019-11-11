import {Component} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import { CdkAccordionModule } from './accordion';

declare var describe: any;
declare var it: any;

describe(() => {

  it('test', () => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [CdkAccordionModule]
    })
  });

});

@Component({
  template: `<cdk-accordion #test="cdkAccordion"></cdk-accordion>`
})
class TestComponent {}