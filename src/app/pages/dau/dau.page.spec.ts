import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DauPage } from './dau.page';

describe('DauPage', () => {
  let component: DauPage;
  let fixture: ComponentFixture<DauPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DauPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
