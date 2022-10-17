(()=>{
    const p : number = 11;
    for ( let a = 1;    a < 100;    ++a) {
        if( a % p === 0 )
            continue;
        console.log("=========================");
        console.log(`p = ${p}`);
        console.log(`a = ${a}`);        
        let ap = Math.pow(a, p-1);
        console.log(`ap = ${ap}`);
        console.log(ap%p);
    }
})();