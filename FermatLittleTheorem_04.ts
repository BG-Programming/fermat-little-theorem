// BigNumber Library : https://github.com/MikeMcl/bignumber.js/
import BigNumber from "bignumber.js";
import jsonPrimeList from "./PrimeList.json";
import assert from "assert";

function checkFermatLittleTheorem(a : number, p : number) {
    const ba = BigNumber(a);
    const bp = BigNumber(p);    
    const bap = ba.pow(bp.minus(1));
    const result = parseInt(bap.mod(bp).valueOf());    
    assert(result === 1);
    if( result !== 1) 
        throw Error("Check Fermat Little Theorem Faild!");
}





(()=>{
    const primeList = jsonPrimeList.primeList;
    
    let bp : BigNumber | undefined;
    let ba : BigNumber | undefined;
    let idxPrimeList = 0;
    let p : number | undefined = 11;
    try {
        for ( let a = 1;    a < 100000;    ++a) {
            if( a % 100 == 0 ) {
                console.log(a);
            }
            
            // idxPrimeList = Math.floor( Math.random() * primeList.length);
            // p = primeList[idxPrimeList];
            bp = new BigNumber(p);
            ba = new BigNumber(a);  
            if( ba.mod(bp).isEqualTo(0) === true )
                continue;

            checkFermatLittleTheorem(a, p);            
        }
    } catch(e : any) {
        console.log(e);
    }
})();