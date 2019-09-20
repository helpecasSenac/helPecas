import { SortPipe } from './sort.pipe';
import { SearchPipe } from './search.pipe';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [SearchPipe,
    SortPipe],
	imports: [
		SearchPipe,
    	SortPipe
	],
	exports: [SearchPipe,
    SortPipe]
})
export class PipesModule {}