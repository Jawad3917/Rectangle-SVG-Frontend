import { Component, OnDestroy } from '@angular/core';
import { HttpCommonService } from './Services/HttpCommonService';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'Rectangle-Svg-Frontend';
  private unsubscribe$ = new Subject<void>();

  constructor(private httpCommonService: HttpCommonService) {}

  buttonClicked: boolean = false;
  width: any;
  height: any;
  renderingView: boolean = false;

  onDimensionsChange(dimensions: { width: number, height: number }) {
    this.width = dimensions.width;
    this.height = dimensions.height;
    this.buttonClicked = false;
  }

  saveParametersOnJsonFile(height: number, width: number) {
    this.buttonClicked = true;
    const payload = {
      "width": width,
      "height": height
    };
    this.httpCommonService.updateData(payload).subscribe(res => {});
  }

  ngOnInit() {
    this.httpCommonService.fetchDimensions()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(res => {
        this.height = res?.height;
        this.width = res?.width;
        this.renderingView = true;
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}