import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) return null;

    

    let words = value.split(' ');
    
    for (var i = 0; i < words.length; i++){

      let word = words[i];

        if ( this.isPreposition(word) && i != 0)
          words[i] = word.toLowerCase();
        else{
          words[i] = this.toTitleCase(word);
        }
    }
      return words.join(' ');
  }

  private toTitleCase(word : string) : string{
    return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase();;
  }
  private isPreposition(word : string): boolean{
    let preposition = [
      'of','the','to','in','on'
    ]
    return preposition.includes(word.toLowerCase())

  }

}
