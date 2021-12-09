let POLICE = {
    name : "friday",
    
    }
    let NAVY = {
        name : "TIM TIM",
    }
    let ARMY = {
        title : "A King",
        name: "Etimbuk",
        brother1 : POLICE,
        brother2 : NAVY,
    }
    
    let NSCDC = {
    ranked: "B",
    
    }

    let arr = [ARMY,NSCDC];
    console.log(JSON.stringify(arr));