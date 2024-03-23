const PreloadImage = ({ href, as })=>{
    return(
        <link rel="preload" href={href} as={as} />
    )
}
export default PreloadImage;