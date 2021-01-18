import { ComponentFixture, TestBed } from '@angular/core/testing'

import { InventoryComponent } from './inventory.component'
import { MaterialModule } from '../material.module'
import { RouterTestingModule } from '@angular/router/testing'

describe('InventoryComponent', () => {
  let component: InventoryComponent
  let fixture: ComponentFixture<InventoryComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InventoryComponent],
      imports: [RouterTestingModule, MaterialModule],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
