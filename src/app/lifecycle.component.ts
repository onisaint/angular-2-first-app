import {
  Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
  OnDestroy, Input
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <ng-content></ng-content>
    <hr>
    <p>{{bindable}}</p>
  `
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  @Input() bindable = 1000;

  constructor() {

  }

  ngOnChanges() {
    this.log('ng-on-changes');
  }

  ngOnInit() {
    this.log('ng-on-init');
  }

  ngDoCheck(){
    this.log('ng-fo-check');
  }

  ngAfterContentInit(){
    this.log('ng-after-content-init');
  }

  ngAfterContentChecked(){
    this.log('ng-after-content-checked');
  }

  ngAfterViewChecked(){
    this.log('ng-after-view-checked');
  }

  ngAfterViewInit(){
    this.log('ng-after-view-init');
  }

  ngOnDestroy(){
    this.log('ng-on-destroy');
  }

  private log(hook:string){
    console.log(hook);
  }

}