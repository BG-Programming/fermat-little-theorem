// BigNumber Library : https://github.com/MikeMcl/bignumber.js/
import BigNumber from "bignumber.js";

(()=>{
    const bp  = BigNumber(11);
    let ba : BigNumber | undefined;
    for ( let a = 1;    a < 100;    ++a) {
        ba = new BigNumber(a);
                   
        if( ba.mod(bp).isEqualTo(0) === true )
            continue;

        console.log("=========================");
        console.log(`p = ${bp}`);
        console.log(`a = ${ba}`);
        let bap = ba.pow(bp.minus(1));
        console.log(`ap = ${bap}`);
        console.log(bap.mod(bp).valueOf());
    }
})();