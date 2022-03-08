const MenuSVG = ({ width = "30", height = "15" }: { width?: string, height?: string }) => {
    return <svg width={width} height={height} viewBox="0 0 31 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="1.75" y1="2.25" x2="29.25" y2="2.25" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="12.75" y1="12.25" x2="29.25" y2="12.25" strokeWidth="3.5" strokeLinecap="round" />
    </svg>



}

export default MenuSVG;
