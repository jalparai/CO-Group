export const fadeIn = (direction, deplay) =>{
    return{
        hidden:{
            y: direction === 'up' ? 40 : direction === "down" ? -40 : 0,
            x: direction === 'left' ? 40 : direction === "right" ? -40 : 0

        },
        show:{
            y:0,
            x:0,
            opacity: 1,
            transition : {
                type: 'tween',
                direction: '1.2',
                deplay: deplay,
                ease: [0.25,0.25,0.25,0.75]
            }
        }
    }
}