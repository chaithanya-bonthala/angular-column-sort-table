import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { SortableTableDirective } from "./component-data/sortable-table.directive";
import { SortService } from "./component-data/sort.service";
import { SortableColumnComponent } from "./component-data/sortable-column/sortable-column.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    SortableTableDirective,
    SortableColumnComponent
  ],
  bootstrap: [AppComponent],
  providers: [SortService]
})
export class AppModule {}
