import { Component, NgModule } from "@angular/core";

@Component({
    selector: 'cdk-accordion',
    exportAs: 'cdkAccordion',
    template: 'hello'
})
export class CdkAccordion {}

@NgModule({declarations: [CdkAccordion], exports: [CdkAccordion]})
export class CdkAccordionModule {}