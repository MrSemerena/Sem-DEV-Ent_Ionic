import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MgtowPage } from './mgtow.page';

describe('MgtowPage', () => {
  let component: MgtowPage;
  let fixture: ComponentFixture<MgtowPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MgtowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
