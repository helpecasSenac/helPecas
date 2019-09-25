 
import { NgModule } from '@angular/core';
import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';
import { RegistrarPipe } from './registrar.pipe';

@NgModule({
	declarations: [SearchPipe,
    SortPipe,
    RegistrarPipe],
	imports: [],
	exports: [SearchPipe,
    SortPipe]
})
export class PipesModule {}