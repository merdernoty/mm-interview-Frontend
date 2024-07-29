import React from 'react';

const PreFooter = () => {
    let styles: { [key: string]: string } = {
        backgroundImage: "radial-gradient(145% 105% at 45% 20%, transparent 40%, #63e 75%, #c8c8ff 95%)",
        height: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        padding: "20px",
        position: "relative",
        opacity: "1",
        boxShadow: "0px 20px 20px rgba(76, 44, 164, 0.2)",
    };

    let lineStyles1: { [key: string]: string } = {
        top: "0",
        zIndex: "0",
        content: '""',
        width: "50%",
        position: "absolute",
        borderTop: "1px solid",
        borderImageSource: "linear-gradient(90deg, transparent, rgba(143, 120, 255, .5) 50%, transparent)",
        borderImageSlice: "1",
        filter: "drop-shadow:(0 1px 10px rgba(76, 44, 164, 0.8))",
    };


    return (
        <>
            <div className="styles_divider__elk7j" style={lineStyles1}/>
            <div className="px-12 py-5 relative  ">
                <div className="styles_divider__elk7j" style={lineStyles1}/>
                    <div style={styles}>
                        <div>
                        </div>
                    </div>

            </div>

        </>
    );
};

export default PreFooter;
