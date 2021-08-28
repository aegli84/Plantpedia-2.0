export const titleAnimation = {
    hidden: {y: 100},
    show: {
        y: 0,
        transition: {duration: 0.5, ease: "easeOut"},
    }
} 
export const fade = {
    hidden: {opacity: 0},
    show: {
        opacity: 1, 
        transition: { ease: "easeOut", duration: 0.2},
    }
}

export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: -200
    },
    show: {
        opacity: 1,
        y: 0, 
        transition: {
            duration: 0.5, 
            when: 'beforeChildren',
            staggerChildren: 0.5
        },
    },
    
};

export const photoAnimation = {
    hidden: {scale: 1.2, opacity: 0},
    show: {
        scale: 1.1,
        opacity: 1,
        transition: {
            ease: "easeOut",
            
        }
    }
}
