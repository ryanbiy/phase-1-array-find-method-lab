// code your solution here
function superbowlWin(record){
    let result = record.find( record => record.result === "W" );
    const  sadReality =  result ? result.year : undefined;
    return sadReality;
    }

superbowlWin()