function doubleTheValues() {
   return function<T>(source: Observable<T>) {
       return source.pipe(map(value => value * 2));
   }
}
