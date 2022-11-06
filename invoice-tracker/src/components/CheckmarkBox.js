import React from 'react'

{/*this is for the checkboxes on the view table*/}
export const CheckmarkBox = React.forwardRef(({indeterminate, ...rest}, ref) =>{
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return(
        <>
            <input type ='checkbox' ref ={resolvedRef}{...rest}/>
        </>
    )
})