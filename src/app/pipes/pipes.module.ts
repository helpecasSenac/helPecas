 
import { NgModule } from '@angular/core';
import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';

@NgModule({
	declarations: [SearchPipe,
    SortPipe],
	imports: [],
	exports: [SearchPipe,
    SortPipe]
})
export class PipesModule {}