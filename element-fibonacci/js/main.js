  function elementFibonacci(n) { 
    
    // gdzie n to n-ty wyraz ciągu fibonacci'ego.
    
    if (n <= 2)
        return 1;
    else {
        f1=1;
        f2=1;
        
    for (i=3; i<=n; i++) { 
        f=f1 + f2;
        f1=f2;
        f2=f;
      } 
    return f;
}}

console.log(elementFibonacci(5));
