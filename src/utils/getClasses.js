export const getClasses=(classes)=>
    // burası classınların css ayarlaması için yapılmış bir alan 

    classes.filter((item)=>item !=='').join(' ').trim()
    
