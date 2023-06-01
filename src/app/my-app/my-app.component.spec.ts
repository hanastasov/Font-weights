import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxCalendarModule, IgxChipsModule, IgxInputGroupModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxSnackbarModule, IgxToggleModule, IgxGridModule } from '@infragistics/igniteui-angular';
import { MyAppComponent } from './my-app.component';

describe('MyAppComponent', () => {
  let component: MyAppComponent;
  let fixture: ComponentFixture<MyAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAppComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxCalendarModule, IgxChipsModule, IgxInputGroupModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxSnackbarModule, IgxToggleModule, IgxGridModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
