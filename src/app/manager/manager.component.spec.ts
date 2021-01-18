import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ManagerComponent } from './manager.component'
import { MaterialModule } from '../material.module'
import { RouterTestingModule } from '@angular/router/testing'

describe('ManagerComponent', () => {
  let component: ManagerComponent
  let fixture: ComponentFixture<ManagerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MaterialModule],
      declarations: [ManagerComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
