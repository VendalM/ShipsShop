import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'search'
  })
export class SearchPipe implements PipeTransform{
transform(ships: any[], value: string): any {
  if( value !== null && value !== undefined){
    return ships?.filter( (ships: { name: string | any[]; }) => {
      return ships?.name?.includes(value)
    })
  }
}
}
