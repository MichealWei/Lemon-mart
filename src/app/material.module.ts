import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'

const modules = [MatButtonModule, MatToolbarModule, MatIconModule]

@NgModule({
  declarations: [],
  exports: [modules],
  imports: [modules],
})
export class MaterialModule {}