function saturdayFun (activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork (toDo = "go to the office"){
    return `This Monday, I will ${toDo}.`;
}

function wrapAdjective (param = "*") {
    return function (adjective = "special") {
        return `You are ${param}${adjective}${param}!`
    }
}