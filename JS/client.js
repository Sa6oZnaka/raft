let steps = 3;

//let goats = [313000, 111000,666000,42000,7000,13000,400000,511000,600000,200000,202000,94000,280000,72000,42000];
//let goats = [666,42,7,13,400,511,600,200,202,111,313,94,280,72,42];
let goats = [69,6152,18176,22399,3383,14370,3610,5941,27983,8048,4523,28498,3785,18127,23660,8125,20932,28273,19474,29795,25412,7380,25718,23503,18813,2549,24051,19451,1359,19137,29455,26981,27917,20684,12638,9318,9346,4677,20900,16575,22070,28202,23354,31605,4589,8376,5811,17120,29809,23590,5054,13566,31889,22930,17998,22541,12650,30268,32505,16728,32229,12530,17054,7761,25985,7115,17739,21472,30291,5656,3166,10235,7243,25240,31722,10615,14776,28139,21340,18973,10510,22857,23902,24321,3047,7540,22267,31503,2889,23019,20996,22503,27943,9313,5811,16619,9002,27757,18575,13461,14001,18307,21135,12303,13846,14627,24194,22781,1843,19280,23470,31133,17188,2884,22712,787,32591,15970,13508,2558,10146,25452,27612,29007,19996,21494,662,14171,5007,6683,21745,6447,3492,20078,19585,35,19999,4659,16844,28082,28516,31184,3315,22920,19002,31614,2453,13789,14544,13892,4592,3586,2814,9510,13641,29497,4044,4762,11662,11210,22584,24635,22587,22611,5940,30401,13946,864,17135,29233,14478,20283,23381,24145,22641,13830,31193,5983,18364,4102,3698,8962,13512,21570,28131,5505,27411,18253,5440,22323,21221,3168,18094,24119,5171,19627,25450,12388,24771,26861,9997,16771,10641,26947,10254,444,17266,7997,16776,12367,16119,11831,19005,18053,30612,28135,15580,3813,7681,23346,13695,15530,16865,2884,26744,6005,7842,21727,30285,3904,12196,9203,16641,19603,20381,11120,9877,4346,26428,26968,17615,31670,28428,12568,10810,1715,18588,12312,6254,20410,13021,8337,15249,488,24011,7839,31518,29535,24911,21399,18405,19259,7012,27546,2900,17352,14714,2410,7156,23794,28951,11389,23350,4860,11204,15696,24688,28021,10791,13310,21795,31336,25197,3345,26239,2516,7659,152,28713,15707,6660,12154,17467,16446,12365,15113,13453,15241,18927,31450,16691,23179,8781,17621,4166,29577,7399,31624,4840,10420,12926,22208,31618,5463,14714,6747,26960,23381,3464,12120,27936,9427,23175,21296,19286,28210,3749,20841,7988,11328,14277,31592,17240,8879,20517,21127,9094,32454,15933,6247,23464,2646,3050,14728,18451,2800,6347,17942,27404,8533,19435,27910,19339,15662,2209,11618,12607,30973,27317,12769,25041,29268,3524,2747,17261,29253,25574,14779,2175,31257,24461,17558,18618,2116,29873,16763,11103,10649,13610,4587,1724,10939,3165,16331,6387,32212,24090,12472,15868,10377,3269,9114,18157,20013,10932,11388,22137,10804,23257,8859,26295,3819,9377,13500,23589,15463,16155,6083,18925,9147,5981,898,19303,27247,5668,29135,5854,16941,26810,21465,11671,26812,20765,12732,19727,25651,16733,26706,1413,20326,17990,31052,6584,19109,1343,8578,3058,25766,20850,10632,31813,4031,7213,9346,15381,30552,17544,4409,15063,18849,2633,4462,12311,18816,10244,11118,9920,15566,22663,18918,19864,2754,19317,28153,12554,7853,19760,18320,16936,25320,9724,10225,20208,26635,29794,660,20430,3168,1747,28721,11875,14232,30862,26654,27013,32444,5572,9176,14983,17510,19193,24800,8122,10544,9133,29896,28723,24685,7228,26509]

goats = goats.sort((a,b) => b-a);

let lowRange = goats[0];
let highRange = goats.reduce((a, b) => a + b, 0)

let validations = 0;
while(lowRange != highRange){
    let mid = Math.round((highRange + lowRange - 1) / 2);
    if(validCapacity(goats, mid)){
        highRange = mid;
    }else{
        lowRange = mid + 1;
    }
    validations++;
    if(validations > 1000)
        break;
}
console.log("Result: " + lowRange, highRange);
console.log("Steps: " + validations);

function validCapacity(arr, maxCapacity){
    let currentCapacity = 0;
    let temp;
    temp = [...arr];
    for(let i = 0; i < steps; i ++){
        currentCapacity = 0;
        for(let j = 0; j < temp.length; j ++){

            if(currentCapacity + temp[j] <= maxCapacity){
                currentCapacity += temp[j];
                temp.splice(j, 1);
                j--;
                
            }
        }
    }
    if(temp.length > 0)
        return false;
    return true;
}